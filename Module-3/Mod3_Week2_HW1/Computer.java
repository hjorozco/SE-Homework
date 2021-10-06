public class Computer {

	private String name;
	private int year;
	private double cost;

	// Getters
	public String getName() {
		return this.name;
	}

	public int getYear() {
		return this.year;
	}

	public double getCost() {
		return this.cost;
	}

	// Setters
	public void setName(String name) {
		this.name = name;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	public static void main(String args[]) {
		Computer computer1 = new Computer();
		computer1.setName("Hector's computer");
		computer1.setYear(2020);
		computer1.setCost(2000.0);
		
		Computer computer2 = new Computer();
		computer2.setName("Renee's computer");
		computer2.setYear(2021);
		computer2.setCost(2050.99);


		System.out.printf("%s. Year %d. Cost %.2f %n", computer1.getName(), computer1.getYear(), computer1.getCost());
		System.out.printf("%s. Year %d. Cost %.2f", computer2.getName(), computer2.getYear(), computer2.getCost());
	}

}
