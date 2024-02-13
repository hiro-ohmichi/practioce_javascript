export function convertToJson(input: string): string {
  try {
    const jsonObject = JSON.parse(input);
    const resultObj = { success: true, data: jsonObject };
    return JSON.stringify(resultObj);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const resultObj = { success: false, error: error.message };
    return JSON.stringify(resultObj);
  }
}
