import java.util.Scanner;
public class TemperatureConversion{
    static double celsiusToFahrenheit(double celsius){
        return (celsius * 9/5) + 32;
    }
    
    static double fahrenheitToCelsius(double fahrenheit){
        return (fahrenheit - 32) * 5/9;
    }

    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        System.out.println("1. Celsius to Fahrenheit");
        System.out.println("2. Fahrenheit to Celsius");
        System.out.print("Enter your choice: ");
        int choice=sc.nextInt();

        System.out.print("Enter Temperature: ");
        double temperature=sc.nextDouble();
        
        if(choice==1){
            double result=celsiusToFahrenheit(temperature);
            System.out.printf("Temperature in Fahrenheit: %.2f%n",result);
        }
        else if(choice==2){
            double result = fahrenheitToCelsius(temperature);
            System.out.printf("Temperature in Celsius: %.2f%n",result);
        }
        else{
            System.out.println("Invalid choice.");
        }
        
        sc.close();
    }
}