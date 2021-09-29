package variablesandconditions;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Exercise1 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter the grade as a number [0-100]: ");

		// Validate the input
		try {
			int grade = scanner.nextInt();
			if (grade >= 0 && grade <= 100) {

				System.out.print("The letter grade is: ");

				if (grade >= 90) {
					System.out.println("A");
				} else if (grade >= 80) {
					System.out.println("B");
				} else if (grade >= 70) {
					System.out.println("C");
				} else if (grade >= 55) {
					System.out.println("D");
				} else {
					System.out.println("F");
				}

			} else {
				System.out.println("Invalid input. Enter a number between 0 and 100.");
			}
		} catch (InputMismatchException e) {
			System.out.println("Invalid input. Enter a number between 0 and 100.");
		}

		scanner.close();

	}

}
