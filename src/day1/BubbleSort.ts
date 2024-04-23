export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let y = 0; y < arr.length - 1 - i; y++) {
            if (arr[y] > arr[y + 1]) {
                const current = arr[y];

                arr[y] = arr[y + 1];
                arr[y + 1] = current;
            }
        }
    }
}
