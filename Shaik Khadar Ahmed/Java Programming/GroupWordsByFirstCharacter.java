import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class GroupWordsByFirstCharacter{
    static Map<Character,List<String>> groupWords(String[] words){
        Map<Character,List<String>> groupWords=new LinkedHashMap<>();
        for(String word:words){
            if(word.isEmpty()){
                continue;
            }

            char firstCharacter=Character.toLowerCase(word.charAt(0));
            if(!groupWords.containsKey(firstCharacter)){
                groupWords.put(firstCharacter,new ArrayList<>());
            }
            groupWords.get(firstCharacter).add(word);
        }
        return groupWords;
    }

    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the number of words: ");
        int n=sc.nextInt();
        sc.nextLine();

        if(n<=0){
            System.out.println("Please enter a positive number. ");
            sc.close();
            return;
        }

        String[] words=new String[n];

        System.out.println("Enter the words:");
        for(int i=0;i<n;i++){
            words[i]=sc.nextLine().trim();
        }
        Map<Character,List<String>> result=groupWords(words);
        System.out.println("Grouped words:");

        for(Map.Entry<Character,List<String>> entry:result.entrySet()){
            System.out.println(entry.getKey()+"->"+entry.getValue());
        }

        sc.close();
    }

}
