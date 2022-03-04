
/*Pronlem Statement - Given n non-negative integers representing an elevation map where
the width of each bar is 1, compute how much water it is able to trap after raining.*/

waterTrap = function(height)
{
    let n=height.length,ans=0;
    let max_left=height[0],max_right=height[n-1];
    
    let left=0,right=n-1;
    
    while(left<right)
    {
        if(height[left]<height[right])
        {
            height[left]>max_left ? max_left=height[left] : ans+=(max_left - height[left]);
            left++;
        }
        else
        {
            height[right]>max_right ? max_right=height[right] : ans+=(max_right - height[right]);
            right--;
        }
    }
    return ans;
}

console.log(waterTrap([0,1,0,2,1,0,1,3,2,1,2,1])); // Output-6
console.log(waterTrap([4,2,0,3,2,5])); // Output-9