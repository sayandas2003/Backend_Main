#include <bits/stdc++.h>
using namespace std;

string reverseString(const string& s) {
    string t = s;
    reverse(t.begin(), t.end());
    return t;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string s;
    getline(cin, s);
    cout << reverseString(s) << "\n";
    return 0;
}
