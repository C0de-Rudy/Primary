package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"
)

func main() {

	slicemain := make([]int, 0, 3)

	for {
		scanner := bufio.NewScanner(os.Stdin)
		fmt.Printf("\nAdd Integer Here or 'X' to Exit: ")
		scanner.Scan()

		if strings.Contains(scanner.Text(), "x") ||
			strings.Contains(scanner.Text(), "X") {
			fmt.Println("Program Terminated.")
			break

		} else {

			input, _ := strconv.Atoi(scanner.Text())
			slicemain = append(slicemain, input)
			sort.Sort(sort.IntSlice(slicemain))
			fmt.Print(slicemain)

		}

	}
}
