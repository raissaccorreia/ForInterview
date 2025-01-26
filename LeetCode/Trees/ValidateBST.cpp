#include <iostream>

struct TreeNode
{
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution
{
public:
  bool isValidBST(TreeNode *root)
  {
    return true;
  }

  void buildTreeFromArray(TreeNode *root, int *arr)
  {
    if (root == nullptr)
    {
      return;
    }
    root->val = *arr;
    buildTreeFromArray(root->left, arr + 1);
    buildTreeFromArray(root->right, arr + 1);
  }
};

int main()
{
  TreeNode *root = new TreeNode();
  Solution *s = new Solution();
  int arr[] = {2, 1, 3};
  s->buildTreeFromArray(root, arr);
  return s->isValidBST(root) ? 0 : 1;
}