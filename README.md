# Git Merge Priority

Explanation, reproduction + resolution of a version mismatch.

## Explanation

1. The `main` (`0.1.0`) branch of this repo starts with version `1.9.8` of `dayjs` ("old" version)
    - 3e6879de8f7627ae8b7c26daf94a4d4165e9d356
2. The `main` (`0.1.0`) branch of this repository is updated to `1.11.5` of `dayjs` ("latest" version)
    - 50a9394d449359b17c290027182390ee0fc45de9
3. The `hotfix/0.1.1` branch was downgraded to version `1.9.8` of `dayjs` via revert ("old" version)
    - 46c8f3900dec7703b4d333d0e5cc972702dfc9cc
4. The `release/0.2.0` branch has version `1.10.8` of `dayjs` ("bad" version)
5. `release/0.2.0` is downmerged in to `main`, upgrading it to `1.10.8` ("bad" version)
6. `hotfix/0.1.1` is downmerged to `release/0.2.0`, skipping the "upgrade" because the change is older
7. `release/0.2.0` is downmerged to `main`, bringing the "bad" version with it

## Build & Run

1. `npm ci` to install deps
2. `npm start` to run the app and see if it's Halloween 🎃
   - `Is it Halloween? NO!` on most days
   - `Is it Halloween? YES!` on Halloween 🐈‍⬛
3. `npm run test` to run the tests
