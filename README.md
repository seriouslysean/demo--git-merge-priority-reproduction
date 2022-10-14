# Git Merge Priority

Explanation, reproduction + resolution of a version mismatch.

## Explanation

1. The `main` (`0.1.0`) branch of tstarts with version `1.9.8` of `dayjs` ("old" version)
2. The `main` (`0.1.0`) branch of this repository has version `1.11.5` of `dayjs` ("latest" version)
3. The `hotfix/0.1.1` branch was downgraded to version `1.9.8` of `dayjs` via revert ("old" version)
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
