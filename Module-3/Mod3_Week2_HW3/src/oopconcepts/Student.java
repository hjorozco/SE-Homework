package oopconcepts;

public class Student extends Person implements PersonInterface {
	private static int idGenerator = 0;

	private int id;
	private String course;
	private double grade1;
	private double grade2;
	private double grade3;
	private double finalGrade;

	public Student(String name, String address, String phoneNumber, String course, double grade1,
			double grade2, double grade3) {
		super(name, address, phoneNumber);
		this.id = ++idGenerator;
		this.course = course;
		this.grade1 = grade1;
		this.grade2 = grade2;
		this.grade3 = grade3;
	}

	public void setFinalGrade(double finalGrade) {
		this.finalGrade = finalGrade;
	}

	/**
	 * Calculate the final grade of the student.
	 * 
	 * @param extraPoints. The extra points the student got
	 * @return The final grade of the student (Average of the 3 grades plus extra
	 *         points)
	 */
	@Override
	public double calculate(int extraPoints) {
		return ((grade1 + grade2 + grade3) / 3) + extraPoints;
	}

	/**
	 * Display the details of an student
	 */
	@Override
	public void display() {
		System.out.println("STUDENT " + this.id);
		System.out.println("Organization: " + PersonInterface.ORGANIZATION);
		System.out.println("Name: " + super.name);
		System.out.println("Address: " + super.address);
		System.out.println("Phone number: " + super.phoneNumber);
		System.out.println("Course: " + this.course);
		System.out.printf("Final grade: %.2f\n\n", this.finalGrade);
	}

}
