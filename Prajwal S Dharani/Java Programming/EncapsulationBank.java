import java.util.*;
class BankAccount
{
    private double balance;
    public void deposit(double amount)
    {
        if(amount > 0)
        {
            balance = balance + amount;
            System.out.println("Amount deposited: " + amount);
        }
        else
        {
            System.out.println("Invalid deposit amount");
        }
    }
    public void withdraw(double amount)
    {
        if(amount > 0 && amount <= balance)
        {
            balance = balance - amount;
            System.out.println("Amount withdrawn: " + amount);
        }
        else
        {
            System.out.println("Insufficient balance or invalid amount");
        }
    }
    public double getBalance()
    {
        return balance;
    }
}
public class EncapsulationBank
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        BankAccount account = new BankAccount();
        int choice;
        do
        {
            System.out.println("Bank Actions:");
            System.out.println("1. Deposit");
            System.out.println("2. Withdraw");
            System.out.println("3. Check Balance");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");
            choice = sc.nextInt();
            switch(choice)
            {
                case 1:
                    System.out.print("Enter deposit amount: ");
                    double deposit = sc.nextDouble();
                    account.deposit(deposit);
                    break;
                case 2:
                    System.out.print("Enter withdrawal amount: ");
                    double withdraw = sc.nextDouble();
                    account.withdraw(withdraw);
                    break;
                case 3:
                    System.out.println("Current Balance: " + account.getBalance());
                    break;
                case 4:
                    System.out.println("Thank you!");
                    break;
                default:
                    System.out.println("Invalid choice");
            }
        } while(choice != 4);
    }
}