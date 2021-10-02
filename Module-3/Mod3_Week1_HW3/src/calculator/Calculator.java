package calculator;

import java.text.DecimalFormat;
import java.util.Scanner;

public class Calculator {

	static Scanner scanner = new Scanner(System.in);

	public static void main(String[] args) {
		String optionInput;
		char menuOption;
		boolean exit = false;
		boolean validOption;
		double numbers[] = new double[3];
		DecimalFormat decimalFormat = new DecimalFormat("#.##");

		do {
			System.out.println("-----------------------------------------------------------------------------");
			System.out.println("CALCULATOR");
			System.out.println("Perform any of the following operations on two numbers (decimals and negative numbers allowed):\n");
			System.out.println("1. ADD");
			System.out.println("2. SUBTRACT");
			System.out.println("3. MULTIPLY");
			System.out.println("4. DIVIDE");
			System.out.println("5. Exit\n");
			System.out.println("Enter an option [1-5]: ");

			do {
				optionInput = scanner.nextLine();

				if (optionInput.length() > 1 || optionInput.length() == 0) {
					validOption = false;
				} else {
					menuOption = optionInput.charAt(0);
					if (menuOption < '1' || menuOption > '5')
						validOption = false;
					else {
						validOption = true;
						switch (menuOption) {
						case '1':
							numbers = add();
							System.out.printf("%n%s + %s = %s", decimalFormat.format(numbers[0]),
									decimalFormat.format(numbers[1]), decimalFormat.format(numbers[2]));
							System.out.println("\n\nPress <ENTER> to select another menu option...");
							scanner.nextLine();
							break;
						case '2':
							numbers = subtract();
							System.out.printf("%n%s - %s = %s", decimalFormat.format(numbers[0]),
									decimalFormat.format(numbers[1]), decimalFormat.format(numbers[2]));
							System.out.println("\n\nPress <ENTER> to select another menu option...");
							scanner.nextLine();
							break;
						case '3':
							numbers = multiply();
							System.out.printf("%n%s x %s = %s", decimalFormat.format(numbers[0]),
									decimalFormat.format(numbers[1]), decimalFormat.format(numbers[2]));
							System.out.println("\n\nPress <ENTER> to select another menu option...");
							scanner.nextLine();
							break;
						case '4':
							numbers = divide();
							System.out.printf("%n%s / %s = %s", decimalFormat.format(numbers[0]),
									decimalFormat.format(numbers[1]), decimalFormat.format(numbers[2]));
							System.out.println("\n\nPress <ENTER> to select another menu option...");
							scanner.nextLine();
							break;
						default:
							exit = true;
						}
					}
				}

				if (!validOption)
					System.out.println("Invalid menu option. Try again.");

			} while (!validOption);

		} while (!exit);

		System.out.println("\nThank you for using the calculator!");
	}

	/**
	 * Get two numbers as inputs from the user and add them.
	 * 
	 * @return an array of three double numbers. The first element of the array is the
	 *         first addend, the second element of the array is the second addend,
	 *         and the third element of the array is the sum.
	 */
	private static double[] add() {

		double numbers[] = new double[3];

		System.out.println("\nADDITION");
		System.out.println("Enter the first addend: ");
		numbers[0] = getNumberInput();
		System.out.println("Enter the second addend: ");
		numbers[1] = getNumberInput();

		numbers[2] = numbers[0] + numbers[1];

		return numbers;
	}

	/**
	 * Get two numbers as inputs from the user and subtract them.
	 * 
	 * @return an array of three double numbers. The first element of the array is the
	 *         minuend, the second element of the array is the subtrahend,
	 *         and the third element of the array is the difference.
	 */
	private static double[] subtract() {

		double numbers[] = new double[3];

		System.out.println("\nSUBTRACTION");
		System.out.println("Enter the minuend: ");
		numbers[0] = getNumberInput();
		System.out.println("Enter the subtrahend: ");
		numbers[1] = getNumberInput();

		numbers[2] = numbers[0] - numbers[1];

		return numbers;
	}

	/**
	 * Get two numbers as inputs from the user and multiply them.
	 * 
	 * @return an array of three double numbers. The first element of the array is the
	 *         first factor, the second element of the array is the second factor,
	 *         and the third element of the array is the product.
	 */
	private static double[] multiply() {

		double numbers[] = new double[3];

		System.out.println("\nMULTIPLICATION");
		System.out.println("Enter the first factor: ");
		numbers[0] = getNumberInput();
		System.out.println("Enter the second factor: ");
		numbers[1] = getNumberInput();

		numbers[2] = numbers[0] * numbers[1];

		return numbers;
	}
	
	/**
	 * Get two numbers as inputs from the user and divide them.
	 * 
	 * @return an array of three double numbers. The first element of the array is the
	 *         dividend, the second element of the array is the divisor,
	 *         and the third element of the array is the quotient.
	 */
	private static double[] divide() {

		double numbers[] = new double[3];

		System.out.println("\nDIVISION");
		System.out.println("Enter the dividend: ");
		numbers[0] = getNumberInput();
		System.out.println("Enter the divisor: ");
		numbers[1] = getNumberInput();

		numbers[2] = numbers[0] / numbers[1];

		return numbers;
	}
	
	/**
	 * Ask the user for an input and return it until it is a valid double number
	 * 
	 * @return the double number input from the user.
	 */
	private static double getNumberInput() {
		String string;
		boolean valid;
		double number = 0;

		do {
			string = scanner.nextLine();
			valid = isDouble(string);
			if (valid)
				number = Double.parseDouble(string);
			else
				System.out.println("Not a valid number. Try again.");
		} while (!valid);

		return number;
	}

	/**
	 * Check if a string is the representation of a valid double number
	 * 
	 * @param string
	 * @return true if the string argument is the representation of a double number
	 *         false otherwise.
	 */
	private static boolean isDouble(String string) {
		try {
			Double.parseDouble(string);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

}
