list=[20,10,30,6,8,7]#i know it doesnt work.dont know why
def sort(unsorted_list,x):
    while x< len(unsorted_list)-1:
            for slot in unsorted_list:
                if slot < unsorted_list[x]:
                    temp=slot
                    slot=unsorted_list[x]
                    unsorted_list[x]=temp
                    x+=1
            else:
                x+=1
            

print(sort(list,0)) 