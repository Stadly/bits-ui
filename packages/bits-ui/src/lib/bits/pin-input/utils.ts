export function syncTimeouts(cb: (...args: unknown[]) => unknown): number[] {
	const t1 = window.setTimeout(cb, 0);
	const t2 = window.setTimeout(cb, 1_0);
	const t3 = window.setTimeout(cb, 2_0);
	return [t1, t2, t3];
}

export const REGEXP_ONLY_DIGITS = "^\\d+$";
export const REGEXP_ONLY_CHARS = "^[a-zA-Z]+$";
export const REGEXP_ONLY_DIGITS_AND_CHARS = "^[a-zA-Z0-9]+$";
