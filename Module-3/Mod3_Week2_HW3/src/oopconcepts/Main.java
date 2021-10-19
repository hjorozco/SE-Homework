package oopconcepts;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
	private static Scanner scanner = new Scanner(System.in);

	private static String name;
	private static String address;
	private static String phoneNumber;
	private static ArrayList<Employee> employees = new ArrayList<Employee>();
	private static ArrayList<Student> students = new ArrayList<Student>();
	private static ArrayList<Person1> persons = new ArrayList<Person1>();

	public static void main(String[] args) {
		String optionString;
		byte optionNumber = 0;
		boolean validOption;
		boolean exit = false;

		do {
			System.out.println(
					"**************************************************************************");
			System.out.println("OOP CONCEPTS.\n");
			System.out.println("Options:\n");
			System.out.println("1. Create Employee.");
			System.out.println("2. Create Student.");
			System.out.println("3. Create Person.\n");
			System.out.println("4. Display Employees.");
			System.out.println("5. Display Students.");
			System.out.println("6. Display Persons.\n");
			System.out.println("7. Exit.\n");
			System.out.println("Choose an option [1-7]: ");
			do {
				optionString = scanner.nextLine();
				try {
					optionNumber = Byte.parseByte(optionString);
					validOption = (optionNumber > 0) && (optionNumber < 8);
				} catch (Exception e) {
					validOption = false;
				}
				if (!validOption) {
					System.out.println("Invalid option. Try again.");
				}
			} while (!validOption);

			System.out.println();

			switch (optionNumber) {
			case 1:
				createEmployee();
				break;
			case 2:
				createStudent();
				break;
			case 3:
				createPerson();
				break;
			case 4:
				displayEmployees();
				break;
			case 5:
				displayStudents();
				break;
			case 6:
				displayPersons();
				break;
			case 7:
				exit = true;
			}

			if (!exit) {
				System.out.println("Press <ENTER> to choose another option...");
				scanner.nextLine();
			}

		} while (!exit);

		System.out.println("Good bye!");

		scanner.close();
	}

	static private void createEmployee() {
		String jobDescription;
		double payRate;
		int numberOfHours;
		double totalPay;
		Employee employee;

		System.out.println("Enter EMPLOYEE details.");
		System.out.println("Name: ");
		name = scanner.nextLine();
		System.out.println("Address: ");
		address = scanner.nextLine();
		System.out.println("phoneNumber: ");
		phoneNumber = scanner.nextLine();
		System.out.println("Job description: ");
		jobDescription = scanner.nextLine();
		System.out.println("Pay rate: ");
		payRate = getEmployeePayRate();
		System.out.println("Number of hours worked: ");
		numberOfHours = getEmployeeNumberOfHours();
		System.out.println();

		employee = new Employee(name, address, phoneNumber, jobDescription, payRate);
		totalPay = employee.calculate(numberOfHours);
		employee.setTotalPay(totalPay);

		employees.add(employee);
	}

	static private void createStudent() {
		String course;
		double grade1;
		double grade2;
		double grade3;
		int extraPoints;
		double finalGrade;
		Student student;

		System.out.println("Enter STUDENT details.");
		System.out.println("Name: ");
		name = scanner.nextLine();
		System.out.println("Address: ");
		address = scanner.nextLine();
		System.out.println("phoneNumber: ");
		phoneNumber = scanner.nextLine();
		System.out.println("Course: ");
		course = scanner.nextLine();
		System.out.println("Grade 1: ");
		grade1 = getStudentGrade();
		System.out.println("Grade 2: ");
		grade2 = getStudentGrade();
		System.out.println("Grade 3: ");
		grade3 = getStudentGrade();
		System.out.println("Extra points for final grade: ");
		extraPoints = getStudentExtraPoints();
		System.out.println();

		student = new Student(name, address, phoneNumber, course, grade1, grade2, grade3);
		finalGrade = student.calculate(extraPoints);
		student.setFinalGrade(finalGrade);

		students.add(student);
	}

	static private void createPerson() {
		Person1 person;

		System.out.println("Enter PERSON details.");
		System.out.println("Name: ");
		name = scanner.nextLine();
		System.out.println("Address: ");
		address = scanner.nextLine();
		System.out.println("phoneNumber: ");
		phoneNumber = scanner.nextLine();
		System.out.println();

		person = new Person1();
		person.setName(name);
		person.setAddress(address);
		person.setPhoneNumber(phoneNumber);

		persons.add(person);
	}

	static private void displayEmployees() {
		if (employees.size() == 0) {
			System.out.println("No employees to display.");
		} else {
			for (Employee employee : employees) {
				employee.display();
			}
		}
	}

	static private void displayStudents() {
		if (students.size() == 0) {
			System.out.println("No students to display.");
		} else {
			for (Student student : students) {
				student.display();
			}
		}
	}

	static private void displayPersons() {
		if (persons.size() == 0) {
			System.out.println("No persons to display.");
		} else {
			for (Person1 person : persons) {
				System.out.println("PERSON");
				System.out.println("Name: " + person.getName());
				System.out.println("Address: " + person.getAddress());
				System.out.println("Phone number: " + person.getPhoneNumber() + "\n");
			}
		}
	}

	static private double getEmployeePayRate() {
		boolean valid;
		double payRate = 0;
		String input;

		do {
			input = scanner.nextLine();
			try {
				payRate = Double.parseDouble(input);
				valid = (payRate > 0);
			} catch (Exception e) {
				valid = false;
			}
			if (!valid)
				System.out.println("Invalid pay rate. Enter a positive number.");
		} while (!valid);

		return payRate;
	}

	static private int getEmployeeNumberOfHours() {
		boolean valid;
		int numberOfHours = 0;
		String input;

		do {
			input = scanner.nextLine();
			try {
				numberOfHours = Integer.parseInt(input);
				valid = (numberOfHours > 0);
			} catch (Exception e) {
				valid = false;
			}
			if (!valid)
				System.out.println("Invalid. Enter a positive number.");
		} while (!valid);

		return numberOfHours;
	}

	static private double getStudentGrade() {
		boolean valid;
		double grade = 0;
		String input;

		do {
			input = scanner.nextLine();
			try {
				grade = Double.parseDouble(input);
				valid = ((grade >= 0) && (grade <= 100));
			} catch (Exception e) {
				valid = false;
			}
			if (!valid)
				System.out.println("Invalid grade. Enter a number between 0 and 100.");
		} while (!valid);

		return grade;
	}

	static private int getStudentExtraPoints() {
		boolean valid;
		int extraPoints = 0;
		String input;

		do {
			input = scanner.nextLine();
			try {
				extraPoints = Integer.parseInt(input);
				valid = ((extraPoints >= 0) && (extraPoints <= 100));
			} catch (Exception e) {
				valid = false;
			}
			if (!valid)
				System.out.println("Invalid. Enter a number between 0 and 100.");
		} while (!valid);

		return extraPoints;
	}

}
