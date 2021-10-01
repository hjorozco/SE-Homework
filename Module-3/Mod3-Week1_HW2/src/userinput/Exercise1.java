package userinput;

import java.util.Scanner;

public class Exercise1 {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);

		System.out.println("FIBONACCI SERIES.\n");
		System.out.println("Enter the number of elements you want to print [1-40]: ");
		
		try {
			int number = scanner.nextInt();
			if (number >= 1 && number <= 40) {
				System.out.printf("Here are the first %d elements of the fibonacci series:%n", number);
				fibonacci(number);
			} else {
				System.out.println("Invalid input. Enter a whole number between 1 and 40.");
			}
		} catch (Exception e) {
			System.out.println("Invalid input. Enter a whole number between 1 and 40.");
		}

		scanner.close();

	}
	

	// In mathematics, the Fibonacci numbers, commonly denoted Fn, form a sequence, called the Fibonacci sequence, 
	// such that each number is the sum of the two preceding ones, starting from 0 and 1.
	
	// Function to print n Fibonacci numbers
	static void fibonacci(int number) {
		int n1 = 0;
		int n2 = 1;
		int n3;

		for (int i = 0; i < number; i++) {
			System.out.print(n1 + " ");
			n3 = n1 + n2;
			n1 = n2;
			n2 = n3;
		}
	}

}
