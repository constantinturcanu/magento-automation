export async function absoluteWait(time: number): Promise<void> {
	await new Promise((resolve) => setTimeout(resolve, time))
}
