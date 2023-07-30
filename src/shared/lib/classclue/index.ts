type TClassClue = (
    base: string | Array<string | undefined>,
    dynamic?: Record<string, boolean>
) => string;

/**
 * @param {string | string[]} base Base classes that should append always
 * @param {Record<string, boolean>} dynamic Dynamic classes
 */
const classClue: TClassClue = (base, dynamic): string => {
    const baseClasses = typeof base === 'object' ? base : [base];
    const dynamicClasses =
        dynamic != null
            ? Object.entries(dynamic).map(([key, value]) => {
                  return value ? key : undefined;
              })
            : [];

    return [...baseClasses, ...dynamicClasses].filter(Boolean).join(' ');
};

export default classClue;
