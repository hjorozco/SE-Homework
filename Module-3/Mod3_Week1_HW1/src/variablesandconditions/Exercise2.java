package variablesandconditions;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Exercise2 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter a day number [1-7]: ");

		// Validate the input
		try {
			int day = scanner.nextInt();

			if (day >= 1 && day <= 7) {

				switch (day) {
				case 1:
					System.out.println("The day is Monday");
					break;
				case 2:
					System.out.println("The day is Tuesday");
					break;
				case 3:
					System.out.println("The day is Wednesday");
					break;
				case 4:
					System.out.println("The day is Thursday");
					break;
				case 5:
					System.out.println("The day is Friday");
					break;
				case 6:
					System.out.println("The day is Saturday");
					break;
				case 7:
					System.out.println("The day is Sunday");
					break;
				default:
					System.out.println("Invalid input");
				}

			} else {
				System.out.println("Invalid input. Enter a number between 1 and 7.");
			}
		} catch (InputMismatchException e) {
			System.out.println("Invalid input. Enter a number between 1 and 7.");
		}

		scanner.close();

	}

}
