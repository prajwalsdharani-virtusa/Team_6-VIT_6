import java.util.Scanner;
public class FibonacciSeries {
    static void printFibonacci(int n){
        long first=0;
        long second=1;

        for(int i=1;i<=n;i++){
            System.out.print(first+" ");
            long next=first+second;
            first=second;
            second=next;
        }
    }

    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the number of terms: ");
        int n=sc.nextInt();

        if(n<=0){
            System.out.println("Please enter a positive integer.");

        }
        else{
            System.out.println("Fibonacci series: ");
            printFibonacci(n);
        }

        sc.close();
    }
}