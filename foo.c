#include <stdio.h>

// Define the Foo structure
typedef struct {
    int ValueA;
    int ValueB;
} Foo;

int SingleStruct(Foo *argv) {
    int ValueA = argv->ValueA;
    int ValueB = argv->ValueB;
    int result = ValueA + ValueB;

    printf("SingleStruct is running -> ValueA: %d and ValueB: %d and Final Result: %d\n", ValueA, ValueB, result);
    return result;
}

int MultiStruct(Foo argv[], int size) {
    int totalSum = 0;
    for (int i = 0; i < size; i++) {
        totalSum += SingleStruct(&argv[i]);
    }
    printf("Multi Struct is running -> length of array = %d and Final Result: %d\n", size, totalSum);
    return totalSum;
}

int main() {
    // Initialize an array of Foo structs
    Foo args[] = { {1, 9}, {2, 8}, {3, 7} };

    int size = sizeof(args) / sizeof(args[0]);
    int finalSum = MultiStruct(args, size);

    printf("Final Sum of all SingleStruct results: %d\n", finalSum);

    return 0;
}
