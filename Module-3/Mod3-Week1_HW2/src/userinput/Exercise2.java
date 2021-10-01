package userinput;

import java.util.Scanner;

public class Exercise2 {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);

		System.out.println("ARMSTRONG NUMBER.\n");
		System.out.println("Enter a number greater than 0 to check if it is an Armstrong number: ");
		
		try {
			int number = scanner.nextInt();
			if (number > 0) {
				if (isArmstrongNumber(number)) {
					System.out.printf("The number %d is an Armstrong number.", number);
				} else {
					System.out.printf("The number %d is NOT an Armstrong number.", number);
				}	
			} else {
				System.out.println("Invalid input. Enter a whole number greater than 0.");
			}
		} catch (Exception e) {
			System.out.println("Invalid input. Enter a whole number greater than 0.");
		}

		scanner.close();
	}

	
	// An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.
	
	// Function to check if a number is an Armstrong number
	static boolean isArmstrongNumber(int number) { 
		 
		int temporary;
		int lastDigit;
		int numberOfDigits = 0;
		int sum = 0;
		
		temporary = number;
		while (temporary > 0) {
			temporary = temporary / 10;
			numberOfDigits++;
		}
		
		temporary = number;
		while (temporary > 0) {
			lastDigit = temporary % 10;
			sum += (Math.pow(lastDigit, numberOfDigits));
			temporary = temporary / 10;
		}
		
		return number==sum;
	}

}
