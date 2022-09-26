export default function keyGenerator() {
	const TimeStamp = Date.now();
	const diff = Math.random() * (150 - 2) + 2;
	const result = TimeStamp * diff;
	return result.toString();
}
