package oopconcepts;

public class Employee extends Person implements PersonInterface {

	private static int idGenerator = 0;

	private int id;
	private String jobDescription;
	private double payRate;
	private double totalPay;

	public Employee(String name, String address, String phoneNumber, String jobDescription,
			double payRate) {
		super(name, address, phoneNumber);
		this.id = ++idGenerator;
		this.jobDescription = jobDescription;
		this.payRate = payRate;
	}

	public void setTotalPay(double totalPay) {
		this.totalPay = totalPay;
	}

	/**
	 * Calculate the total pay for the employee.
	 * 
	 * @param numberOfHours. The total number of hours worked by the employee
	 * @return The total pay for the employee (payRate x total number of hours
	 *         worked)
	 */
	@Override
	public double calculate(int numberOfHours) {
		return numberOfHours * payRate;
	}

	/**
	 * Display the details of an employee
	 */
	@Override
	public void display() {
		System.out.println("EMPLOYEE " + this.id);
		System.out.println("Organization: " + PersonInterface.ORGANIZATION);
		System.out.println("Name: " + super.name);
		System.out.println("Address: " + super.address);
		System.out.println("Phone number: " + super.phoneNumber);
		System.out.println("Job description: " + this.jobDescription);
		System.out.printf("Total pay: %.2f \n\n", this.totalPay);
	}

}
