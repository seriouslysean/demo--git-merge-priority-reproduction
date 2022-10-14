# Git Merge Priority

Explanation, reproduction + resolution of a version mismatch.

## Explanation

1. `main` (`0.1.0`) branch of this repo starts with version `1.9.8` of `dayjs` ("old" version)
    - [sha](https://github.com/seriouslysean/reproduction-git-merge-priority/commit/3e6879de8f7627ae8b7c26daf94a4d4165e9d356)
2. `main` (`0.1.0`) branch of this repository is updated to `1.11.5` of `dayjs` ("latest" version)
    - [sha](https://github.com/seriouslysean/reproduction-git-merge-priority/commit/50a9394d449359b17c290027182390ee0fc45de9)
3. `hotfix/0.1.1` branch is downgraded to version `1.9.8` of `dayjs` via revert ("old" version)
    - [sha](https://github.com/seriouslysean/reproduction-git-merge-priority/commit/46c8f3900dec7703b4d333d0e5cc972702dfc9cc)
4. `release/0.2.0` branch is upgraded to `1.10.8` of `dayjs` ("bad" version)
5. `release/0.2.0` is downmerged in to `main`, upgrading it to `1.10.8` ("bad" version)
    - [sha](https://github.com/seriouslysean/reproduction-git-merge-priority/commit/8ba09f36be3662ae22922afa6ec8ee3a56596f68)
6. `hotfix/0.1.1` is downmerged to `release/0.2.0`
    - [There is a conflict of the project version but not the package version](#hotfix011-merge-conflict)
    - The `1.9.8` update is skipped because the change is now older
    - [sha](https://github.com/seriouslysean/reproduction-git-merge-priority/commit/6d45af50f10d9511ffa941fe097f14d6976f4a2d)
7. `release/0.2.0` is downmerged to `main`
    - The merge is successful
    - The "bad" version is kept because it is technically newer than the previous revert
    - [sha](https://github.com/seriouslysean/reproduction-git-merge-priority/commit/14434cd35559f7040506aef6267edcba1efb95c4)
    ```
    [main] » git merge release/0.2.0
    Merge made by the 'ort' strategy.
    ```
## Build & Run

1. `npm ci` to install deps
2. `npm start` to run the app and see if it's Halloween 🎃
   - `Is it Halloween? NO!` on most days
   - `Is it Halloween? YES!` on Halloween 🐈‍⬛
3. `npm run test` to run the tests

## References

### hotfix/0.1.1 Merge Conflict

```
diff --cc package-lock.json
index 558b544,688b83e..0000000
--- a/package-lock.json
+++ b/package-lock.json
@@@ -1,6 -1,6 +1,10 @@@
{
    "name": "reproduction-git-merge-priority",
++<<<<<<< HEAD
+  "version": "0.2.0",
++=======
+   "version": "0.1.1",
++>>>>>>> hotfix/0.1.1
    "lockfileVersion": 1,
    "requires": true,
    "dependencies": {
diff --cc package.json
index d947581,a936582..0000000
--- a/package.json
+++ b/package.json
@@@ -1,7 -1,7 +1,11 @@@
{
    "name": "reproduction-git-merge-priority",
    "description": "Explanation, reproduction + resolution of a version mismatch.",
++<<<<<<< HEAD
+  "version": "0.2.0",
++=======
+   "version": "0.1.1",
++>>>>>>> hotfix/0.1.1
    "author": "Sean Kennedy",
    "bugs": {
    "url": "https://github.com/seriouslysean/reproduction-git-merge-priority/issues"
(END)
```
