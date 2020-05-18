/**
 * Builds a partition of which occupancies should go where in a column.
 * 
 * @param {array} occupancies 
 * 
 * Example output:
 * {
 *   "parts": {
 *     "1": 1,
 *     "2": 2,
 *     "3": 1
 *   },
 *   "widths": {
 *     "1": 2,
 *     "2": 2,
 *     "3": 2
 *   }
 * }
 * 
 * Here, the parts object contains the column of the event indexed by ID, and
 * the widths object contains how many columns are used for an event, indexed by
 * ID.
 */
export function buildPartition(occupancies) {
    const overlapping = buildOverlappingFunction(occupancies);
    const ids = occupancies.map(x => x.id);
    return partition(ids, overlapping);
}

/**
 * Creates a function that when given two ID checks if they are overlapping.
 * @param {array} occupancies 
 */
function buildOverlappingFunction(occupancies) {
    /**
     * Checks if two events are overlapping.
     * @param {object} eventA
     * @param {object} eventB
     */
    function _overlaps(eventA, eventB) {
        // OK as long as a.start < a.end and b.start < b.end
        // Does not consider exactly matching bounds as overlapping
        return (eventA.start < eventB.end) && (eventA.end > eventB.start);
    }

    function buildKey(indexA, indexB) {
        const key = [indexA, indexB];
        key.sort();
        return key.toString();
    }

    // This object is used as a set.
    const overlapping = new Set();

    for (let eventA of occupancies)
        for (let eventB of occupancies)
            if (eventA.id !== eventB.id && _overlaps(eventA, eventB))
                overlapping.add(buildKey(eventA.id, eventB.id));

    /**
     * Checks that two events overlap using their IDs.
     * @param {number} firstID 
     * @param {number} secondID 
     */
    return (firstID, secondID) => overlapping.has(buildKey(firstID, secondID));
}

/**
 * Builds a partition for a group of events, which is which event should
 * be on which column, and the width of each event.
 * @param {*} ids The IDS of the event to partition.
 * @param {*} overlaps An array of tuples of the IDs that overlap.
 * 
 * Example:
 * partition([1, 2, 3], [[1, 2], [2, 3]]) = {
 *   "parts": {
 *     "1": 1,
 *     "2": 2,
 *     "3": 1
 *   },
 *   "widths": {
 *     "1": 2,
 *     "2": 2,
 *     "3": 2
 *   }
 * }
 * 
 * 
 * This algorithm works by first creating groups of events that are overlapping
 * each other.
 * 
 * Then, for each group, the required number of columns is computed, along with
 * which event should go in which column, so that when drawn to the screen they
 * are not on top of each other.
 */
function partition(ids, overlapping) {
    const groups = createGroups(ids, overlapping);

    let parts = {};
    let widths = {};

    for (let group of groups) {
        const { groupParts, groupWidths } = partitionGroup(group, overlapping);
        parts = Object.assign(parts, groupParts);
        widths = Object.assign(widths, groupWidths);
    };

    return { parts, widths };
}

/**
 * Creates groups of events that overlap with each other.
 */
function createGroups(ids, overlapping) {
    // First move each event in its own group.
    const groups = [];

    for (let id of ids)
        groups.push([id]);

    function fusionGroups(indexA, indexB) {
        const a = groups.splice(indexA, 1)[0];
        const b = groups.splice(indexB - 1, 1)[0];
        groups.push(a.concat(b));
    }

    // Returns true if the two groups have at least one overlapping event.
    function shouldFusion(groupA, groupB) {
        return groupA.some(a => groupB.some(b => overlapping(a, b)));
    }

    // Then, fusion the groups as long as they have at least one overlapping event.
    let shouldContinue = true;

    while (shouldContinue) {
        shouldContinue = false;

        for (let [indexA, groupA] of groups.entries()) {
            for (let [indexB, groupB] of groups.entries()) {
                if (indexA === indexB) continue;

                if (shouldFusion(groupA, groupB)) {
                    fusionGroups(indexA, indexB);
                    shouldContinue = true;
                    break;
                }
            }

            // Don't process the rest : the IDs may be invalid. Restart the loop.
            if (shouldContinue)
                break;
        }
    }

    return groups;
}

/**
 * Partitions a specific group, that is compute the required number of column to fit
 * all the provided events so that they don't overlap when drawn, and assign a free
 * slot for ecah event.
 * @param {array} ids 
 * @param {function} overlapping 
 */
function partitionGroup(ids, overlapping) {
    const groupParts = {};

    // Initialize partition, setting the column of every element to 1.
    for (let id of ids)
        groupParts[id] = 1;

    let numberOfColumns = 1;

    // For each step, search for two events that are overlapping and in the same column.
    // If they are, put the second event in the next column.
    // Increase the total number of columns if needed.
    function step() {
        for (let first of ids) {
            for (let second of ids) {
                const eventsOverlap = overlapping(first, second);
                const eventsAreInSameColumn = groupParts[first] == groupParts[second];

                if (eventsOverlap && eventsAreInSameColumn) {
                    groupParts[second] += 1;
                    numberOfColumns = Math.max(numberOfColumns, groupParts[second]);
                    return true;
                }
            }
        }

        return false;
    };

    do { } while (step());

    const groupWidths = {};

    for (var i = 0; i < ids.length; i++)
        groupWidths[ids[i]] = numberOfColumns;

    return { groupParts, groupWidths };
}
