package variablesandconditions;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Exercise3 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter a number greater than 0: ");

		// Validate the input
		try {
			int num = scanner.nextInt();
			if (num > 0) {

				if (num % 2 == 1) {
					// If num is odd, display "Cool"
					System.out.println("Cool");
				} else {
					if (num >= 2 && num <= 5) {
						// If num is even and between 2-5, display "Not Cool"
						System.out.println("Not Cool");
					} else if (num >= 6 && num <= 20) {
						// If num is even and between 6-20, display "Cool"
						System.out.println("Cool");
					} else {
						// If num is even and greater than 20, display "Not Cool"
						System.out.println("Not Cool");
					}
				}
			} else {
				System.out.println("Invalid input. Enter a number greater than 0.");
			}
		} catch (InputMismatchException e) {
			System.out.println("Invalid input. Enter a number greater than 0.");
		}

		scanner.close();

	}

}
