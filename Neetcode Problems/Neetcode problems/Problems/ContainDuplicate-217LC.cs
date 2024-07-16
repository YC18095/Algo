using System.Reflection.Metadata;

public class ContainDuplicate {
    public bool CheckDuplicate(int[] nums) {
        HashSet<int> set = new HashSet<int>();
        foreach(var num in nums) {
            if(set.Contains(num)) {
                return true;
            }
            set.Add(num);
        }
        return false;
    }
}