#include <iostream>
using namespace std;
void insert(int list[], int p);
int least(int list);
void MergeTree(int n, int list[100],int size);

struct treenode
{
    treenode *lchild;
    treenode *rchild;
    int weight;
};

int main()
{
    int list[100], n;
    cout << "enter the number of files: "<<endl;
    cin >> n;
    int size = n;
    for (int i = 0; i < n; i++)
    {
        cin >> list[i];
    }
    MergeTree(n, list, size);
    return 0;
}

int least(int list[], int size)
{
    int j;
    for (int i = 0; i < size - 1; i++)
    {
        for (j = 0; j < size-i-1; j++)
        {
            if (list[j] > list[j + 1])
            {
                int temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }

    int leastElement = list[0];
    for (int i = 0; i < size - 1; i++)
    {
        list[i] = list[i + 1];
    }
    return leastElement;
}


void insert(int list[], int p, int size)
{
    list[size] = p;
}

void MergeTree(int n, int list[], int size)
{
    int totalCost = 0;
    for (int i = 0; i < n-1; i++)
    {
        treenode *p = new treenode;
        p->lchild = new treenode;
        p->rchild = new treenode;
        int nayisize;
        (p->lchild->weight) = least(list, size);
        size--;
        (p->rchild->weight) = least(list, size);
        size--;        
        (p->weight) = (p->lchild->weight) + (p->rchild->weight);

        insert(list, (p->weight), size);
        size++;
        
        totalCost += (p->weight);
        
    }
cout << "Total cost of merging: " << totalCost << endl;
}
    