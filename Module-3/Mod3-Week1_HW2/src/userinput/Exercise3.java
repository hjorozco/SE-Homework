package userinput;

import java.util.Scanner;

public class Exercise3 {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);

		System.out.println("PALINDROME.\n");
		System.out.println("Enter a word, phrase or sentence to check if it is a Palindrome: ");

		String string = scanner.nextLine();
		
		if (isPalindrome(string)) {
			System.out.println("It is a palindrome");
		} else {
			System.out.println("It is NOT a palindrome");
		}

		scanner.close();
	}

	// A Palindrome is a word, phrase, or sequence that reads the same backward as
	// forward.

	// Function to check if a String is a Palindrome
	static boolean isPalindrome(String string) {

		string = string.toLowerCase().trim();

		int leftIndex = 0;
		int rightIndex = string.length() - 1;

		while (leftIndex < rightIndex) {
			char leftCharacter = string.charAt(leftIndex);
			char rightCharacter = string.charAt(rightIndex);

			if (!isLowerCaseLetter(leftCharacter))
				leftIndex++;
			else if (!isLowerCaseLetter(rightCharacter))
				rightIndex--;
			else if (leftCharacter == rightCharacter) {
				leftIndex++;
				rightIndex--;
			} else
				return false;
		}

		return true;

	}
	

	static boolean isLowerCaseLetter(char character) {
		return character >= 'a' && character <= 'z';
	}

}
