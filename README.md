# Git, GitHub & GitHub Actions — Complete Beginner's Guide

> A practical, beginner-friendly guide to learning Git, using GitHub, automating workflows with GitHub Actions, and hosting a website with GitHub Pages.

![Git](https://img.shields.io/badge/Git-Version%20Control-F05032?logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-Code%20Hosting-181717?logo=github&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-Automation-2088FF?logo=githubactions&logoColor=white)
![Beginner Friendly](https://img.shields.io/badge/Level-Beginner%20to%20Intermediate-brightgreen)

## Table of Contents

- [1. What will you learn?](#1-what-will-you-learn)
- [2. Git vs GitHub vs GitHub Actions](#2-git-vs-github-vs-github-actions)
- [3. Install Git and configure it](#3-install-git-and-configure-it)
- [4. Basic terminal commands](#4-basic-terminal-commands)
- [5. Start your first Git repository](#5-start-your-first-git-repository)
- [6. Everyday Git commands](#6-everyday-git-commands)
- [7. Branches and merging](#7-branches-and-merging)
- [8. Undo changes safely](#8-undo-changes-safely)
- [9. Connect Git to GitHub](#9-connect-git-to-github)
- [10. Work with remote repositories](#10-work-with-remote-repositories)
- [11. Forks, pull requests, issues, and collaboration](#11-forks-pull-requests-issues-and-collaboration)
- [12. GitHub CLI basics](#12-github-cli-basics)
- [13. GitHub Actions from zero](#13-github-actions-from-zero)
- [14. Host a website with GitHub Pages](#14-host-a-website-with-github-pages)
- [15. A simple CI workflow](#15-a-simple-ci-workflow)
- [16. Common errors and fixes](#16-common-errors-and-fixes)
- [17. Git command cheat sheet](#17-git-command-cheat-sheet)
- [18. Practice projects](#18-practice-projects)
- [19. Security and good habits](#19-security-and-good-habits)
- [20. Useful official resources](#20-useful-official-resources)

---

## 1. What will you learn?

By the end of this guide, you should be able to:

- Track changes to files with Git.
- Create repositories and upload projects to GitHub.
- Use commits, branches, merges, and pull requests.
- Download, update, and collaborate on repositories.
- Understand GitHub Actions and automate basic tasks.
- Publish a static website using GitHub Pages.
- Troubleshoot common Git errors.

**Important:** Git has many commands and options. This guide covers the commands used most often in real projects, plus useful advanced commands. You do not need to memorise everything. Learn the workflow and practise it.

## 2. Git vs GitHub vs GitHub Actions

| Tool | Simple meaning | Example |
|---|---|---|
| **Git** | Version control software that records changes to files. | Save checkpoints of your code. |
| **GitHub** | A website for storing Git repositories and collaborating. | Share a project with a team. |
| **GitHub Actions** | Automation that runs tasks when events happen in GitHub. | Run tests when code is pushed. |
| **GitHub Pages** | A service for hosting static websites from a repository. | Publish an HTML/CSS portfolio. |

A simple way to remember it: **Git tracks your work, GitHub stores and shares it, and GitHub Actions automates work.**

## 3. Install Git and configure it

### Check whether Git is installed

```bash
git --version
```

If Git is installed, a version number will appear.

### Install Git

- **Windows:** Download Git from [git-scm.com/downloads](https://git-scm.com/downloads), then open Git Bash.
- **Ubuntu/Debian:**

  ```bash
  sudo apt update
  sudo apt install git
  ```

- **RHEL/Fedora:**

  ```bash
  sudo dnf install git
  ```

### Set your identity

Use the name and email you want attached to your commits. For GitHub contributions, use an email associated with your GitHub account, or the GitHub-provided private `noreply` address.

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Check your configuration:

```bash
git config --global --list
git config user.name
git config user.email
```

Set the default branch name for new repositories:

```bash
git config --global init.defaultBranch main
```

Optional: make command output easier to read:

```bash
git config --global color.ui auto
```

## 4. Basic terminal commands

Git commands are often used alongside terminal commands.

| Command | What it does |
|---|---|
| `pwd` | Shows your current directory (Linux/macOS/Git Bash). |
| `ls` | Lists files and folders (Linux/macOS/Git Bash). |
| `ls -la` | Lists files, including hidden files. |
| `cd folder-name` | Moves into a folder. |
| `cd ..` | Moves up one folder. |
| `mkdir my-project` | Creates a folder. |
| `touch README.md` | Creates an empty file (Linux/macOS/Git Bash). |
| `cat README.md` | Prints a text file in the terminal. |
| `clear` | Clears the terminal screen. |

Windows Command Prompt and PowerShell have some different commands. Git Bash supports many familiar Linux-style commands.

## 5. Start your first Git repository

A **repository** (or *repo*) is a project whose history Git tracks.

### Step 1: Create a project folder

```bash
mkdir git-practice
cd git-practice
```

### Step 2: Initialise Git

```bash
git init
```

This creates a hidden `.git` directory that stores Git's history and configuration. Do not manually edit its contents.

### Step 3: Create a file

```bash
echo "# My Git Practice" > README.md
```

Open `README.md` in your editor and add a description if you like.

### Step 4: Check the status

```bash
git status
```

Git should show `README.md` as an untracked file.

### Step 5: Stage the file

```bash
git add README.md
```

**Staging** means selecting the changes you want included in the next commit.

Stage all changes in the current directory:

```bash
git add .
```

Review what is staged:

```bash
git status
git diff --staged
```

### Step 6: Commit the file

```bash
git commit -m "Add initial README"
```

A **commit** is a saved checkpoint in the project's history. A good commit message briefly explains the change.

### Step 7: View the history

```bash
git log
git log --oneline
git log --oneline --graph --all
```

### The basic Git workflow

```text
Edit files → git add → git commit → git push
```

- **Edit:** change your files.
- **Add:** choose which changes belong in the next checkpoint.
- **Commit:** record the checkpoint locally.
- **Push:** send local commits to a remote repository such as GitHub.

## 6. Everyday Git commands

### Check your changes

```bash
git status
git diff
git diff --staged
```

- `git diff` shows unstaged changes.
- `git diff --staged` shows changes selected for the next commit.

### Stage and commit

```bash
git add filename.txt
git add .
git commit -m "Describe the change"
```

To stage tracked-file modifications and deletions (but not new untracked files):

```bash
git add -u
```

### Rename and delete tracked files

```bash
git mv old-name.txt new-name.txt
git rm old-name.txt
git commit -m "Rename and remove files"
```

Git can usually detect renames from file history, so `git mv` is convenient but not strictly required.

### See previous commits

```bash
git log --oneline
git show COMMIT_ID
```

Replace `COMMIT_ID` with a real commit ID from your history.

### Ignore files with `.gitignore`

Create a file named `.gitignore` in the repository root. Example:

```gitignore
# Secrets and local configuration
.env
*.key

# Dependencies and generated files
node_modules/
dist/

# Editor and operating-system files
.vscode/
.DS_Store
```

Patterns depend on your project. **Never commit passwords, API keys, private keys, or tokens.** If a file is already tracked, adding it to `.gitignore` does not automatically untrack it.

To stop tracking a file while keeping it on your computer:

```bash
git rm --cached filename
git commit -m "Stop tracking local file"
```

## 7. Branches and merging

A **branch** is an independent line of development. Branches let you work on a feature without immediately changing the main branch.

### List branches

```bash
git branch
git branch -a
```

### Create and switch to a branch

```bash
git switch -c feature/update-readme
```

This creates a branch and switches to it.

Switch to an existing branch:

```bash
git switch main
```

Older tutorials may show `git checkout`; `git switch` is clearer for changing branches.

### Commit work on the branch

```bash
git add README.md
git commit -m "Improve README instructions"
```

### Merge the branch into main

```bash
git switch main
git merge feature/update-readme
```

After confirming that the merge is complete, you can delete the local feature branch:

```bash
git branch -d feature/update-readme
```

### Resolve a merge conflict

A conflict happens when Git cannot automatically combine changes, often because two branches edited the same lines.

1. Run `git status` to identify conflicted files.
2. Open each conflicted file. You may see markers like these:

   ```text
   <<<<<<< HEAD
   Content from the current branch
   =======
   Content from the incoming branch
   >>>>>>> feature/update-readme
   ```

3. Edit the file to keep the correct final content and remove the markers.
4. Stage and commit the resolution:

   ```bash
   git add README.md
   git commit
   ```

Do not blindly choose one side unless you understand which changes will be lost.

## 8. Undo changes safely

Undoing can mean different things. Check `git status` first and be careful with commands that discard work.

### Discard unstaged changes in a file

```bash
git restore filename.txt
```

This permanently discards the file's unstaged edits. Make a backup if unsure.

### Unstage a file but keep its edits

```bash
git restore --staged filename.txt
```

### Correct the most recent commit

If you forgot to stage a file or want to adjust the latest commit:

```bash
git add forgotten-file.txt
git commit --amend
```

Amending changes the existing commit. Avoid amending commits that have already been shared unless you understand the consequences.

### Revert a commit safely

```bash
git revert COMMIT_ID
```

This creates a new commit that reverses the selected commit's changes. It is often the safest option for commits already pushed to a shared branch.

### Reset a local branch

```bash
git reset --soft HEAD~1
git reset --mixed HEAD~1
```

- `--soft` moves the branch back one commit and keeps changes staged.
- `--mixed` (the default) moves the branch back and keeps changes in your working directory, unstaged.

**Danger:** `git reset --hard` discards local changes. Do not use it unless you are certain you do not need those changes. Rewriting shared history can affect collaborators.

## 9. Connect Git to GitHub

GitHub is the remote hosting service; your local Git repository is on your computer.

### Option A: Create a repository on GitHub first

1. Sign in at [github.com](https://github.com).
2. Select **New repository**.
3. Give it a name, such as `git-practice`.
4. If you already have a local project, it is easiest to create the remote repository without a README, licence, or `.gitignore`, avoiding unrelated initial histories.
5. Copy the repository URL.

For example, the HTTPS URL looks like:

```text
https://github.com/YOUR-USERNAME/git-practice.git
```

Replace `YOUR-USERNAME` and the repository name with your own values.

### Add the remote and push

Run these commands from your local project folder:

```bash
git remote add origin https://github.com/YOUR-USERNAME/git-practice.git
git branch -M main
git push -u origin main
```

What they mean:

- `git remote add origin URL`: gives the remote repository the nickname `origin`.
- `git branch -M main`: renames the current branch to `main`.
- `git push -u origin main`: uploads the branch and sets its upstream, so future pushes can usually use `git push`.

Check your remote:

```bash
git remote -v
```

### Authentication

GitHub does not accept your normal account password for Git over HTTPS. Use an approved authentication method, such as a browser sign-in through Git Credential Manager, a personal access token when required, or SSH keys. Keep tokens and private keys secret.

### Option B: Clone a repository that already exists

```bash
git clone https://github.com/OWNER/REPOSITORY.git
cd REPOSITORY
```

`git clone` downloads the repository, including its history, and configures a remote named `origin`.

## 10. Work with remote repositories

| Command | Purpose |
|---|---|
| `git remote -v` | Shows remote URLs. |
| `git fetch origin` | Downloads remote updates without merging them into your current branch. |
| `git pull` | Fetches and integrates changes from the configured upstream branch. |
| `git pull --rebase` | Fetches changes and replays your local commits on top of them. |
| `git push` | Uploads your local commits. |
| `git push -u origin branch-name` | Pushes a branch and sets its upstream. |
| `git branch -r` | Lists remote-tracking branches. |
| `git remote show origin` | Shows information about a remote. |

A common daily workflow:

```bash
git status
git pull
# Edit files
git add .
git commit -m "Explain what changed"
git push
```

If you and another person change the same branch, you may need to resolve conflicts. Always read Git's messages instead of repeatedly retrying commands.

## 11. Forks, pull requests, issues, and collaboration

- **Fork:** your own GitHub copy of another person's repository.
- **Pull request (PR):** a proposal to review and merge changes into a branch.
- **Issue:** a place to report a bug, suggest a feature, or track work.
- **Review:** feedback on proposed code changes.

### Typical contribution workflow

1. Fork the project on GitHub.
2. Clone your fork.
3. Create a feature branch.
4. Make changes and commit them.
5. Push your branch to your fork.
6. Open a pull request on GitHub.
7. Respond to review feedback and update the branch if needed.

Example:

```bash
git clone https://github.com/YOUR-USERNAME/PROJECT.git
cd PROJECT
git switch -c docs/fix-typo
# Edit the file
git add README.md
git commit -m "Fix typo in documentation"
git push -u origin docs/fix-typo
```

Then open GitHub in your browser and create the pull request.

To keep a fork updated, you can add the original project as an `upstream` remote:

```bash
git remote add upstream https://github.com/ORIGINAL-OWNER/PROJECT.git
git fetch upstream
```

Then follow that project's contribution instructions to update your branch.

## 12. GitHub CLI basics

The GitHub CLI (`gh`) lets you work with GitHub from a terminal. Install it using the official instructions at [cli.github.com](https://cli.github.com/).

```bash
gh --version
gh auth login
gh auth status
```

Useful commands:

```bash
gh repo create
gh repo clone OWNER/REPOSITORY
gh repo view
gh issue list
gh pr list
gh pr create
gh pr view
gh run list
gh run view
```

Some commands ask interactive questions. For exact options, run a command with `--help`, for example:

```bash
gh repo create --help
gh workflow --help
```

## 13. GitHub Actions from zero

**GitHub Actions** runs automated workflows in response to events such as pushes, pull requests, scheduled times, or manual requests.

### Key terms

- **Workflow:** an automation defined in a YAML file.
- **Event / trigger:** what starts a workflow.
- **Job:** a group of steps that runs on a runner.
- **Runner:** the machine that executes the job.
- **Step:** one task inside a job.
- **Action:** a reusable unit of automation.
- **Artifact:** a file or bundle saved by a workflow run.

### Where do workflow files go?

Create this path at the root of your repository:

```text
.github/workflows/hello.yml
```

GitHub Actions looks for workflow YAML files in `.github/workflows/`.

### Your first workflow

Create `.github/workflows/hello.yml` with this content:

```yaml
name: Hello GitHub Actions

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read

jobs:
  hello:
    runs-on: ubuntu-latest
    steps:
      - name: Print a greeting
        run: echo "Hello! My GitHub Actions workflow is running."

      - name: Show the current date
        run: date
```

Explanation:

- `name`: the workflow's display name.
- `on`: events that trigger the workflow. Here, a push to `main` or a manual run.
- `permissions`: gives the workflow read-only access to repository contents.
- `jobs`: the tasks the workflow runs.
- `runs-on`: chooses the runner environment.
- `steps`: commands executed in order.

**YAML tip:** indentation matters. Use spaces, not tabs.

Push the file to GitHub. Open the repository's **Actions** tab to see the run and its logs. You can select **Run workflow** for a workflow that includes `workflow_dispatch`.

### Run a command in a workflow

```yaml
- name: Check Git version
  run: git --version
```

### Run multiple commands

```yaml
- name: Show project information
  run: |
    pwd
    ls -la
    echo "Workflow completed"
```

### Run on pull requests

```yaml
on:
  pull_request:
    branches: [main]
```

This triggers when a pull request targets `main`. You can combine multiple events under `on`.

### Use environment variables

```yaml
- name: Print a variable
  env:
    PROJECT_NAME: git-guide
  run: echo "Project: $PROJECT_NAME"
```

Never print secrets to workflow logs. Store credentials in GitHub repository or environment **Secrets**, then reference them through the `secrets` context only when needed.

### Use an action

A workflow step can use a reusable action:

```yaml
- name: Check out repository
  uses: actions/checkout@v4
```

Actions can change over time. For important production workflows, review the action's source, permissions, and release guidance; pinning actions to a full commit SHA offers stronger supply-chain protection than a movable version tag.

### View workflow runs using GitHub CLI

```bash
gh run list
gh run view RUN_ID
gh run view RUN_ID --log
```

Replace `RUN_ID` with the actual run ID.

## 14. Host a website with GitHub Pages

GitHub Pages hosts **static websites** such as HTML, CSS, and browser-side JavaScript. It does not run a backend server such as PHP, Python, or Node.js as a server application.

### Step 1: Create a simple website

In the root of your repository, create a file named `index.html`:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My First GitHub Pages Website</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      max-width: 760px;
      margin: 3rem auto;
      padding: 0 1rem;
      line-height: 1.6;
    }
    h1 { color: #0969da; }
  </style>
</head>
<body>
  <h1>Hello, GitHub Pages!</h1>
  <p>I published my first website using GitHub.</p>
  <p>This page is served as a static website.</p>
</body>
</html>
```

### Step 2: Commit and push it

```bash
git add index.html
git commit -m "Add first website"
git push
```

### Step 3: Enable GitHub Pages

1. Open your repository on GitHub.
2. Go to **Settings → Pages**.
3. Under the build/deployment source, choose **Deploy from a branch** if available.
4. Select the `main` branch and the `/ (root)` folder.
5. Save the settings.
6. Wait for deployment. The Pages settings area will show the published URL when it is ready.

For a normal project repository, the URL generally looks like:

```text
https://YOUR-USERNAME.github.io/REPOSITORY-NAME/
```

For a user or organization site repository named `YOUR-USERNAME.github.io`, the URL generally looks like:

```text
https://YOUR-USERNAME.github.io/
```

Replace the placeholders with your actual GitHub username and repository name. Deployment may take a few minutes.

### Step 4: Update the website

Edit `index.html`, then run:

```bash
git add index.html
git commit -m "Update website content"
git push
```

GitHub Pages will publish the new version after deployment finishes.

### Troubleshooting Pages

- Confirm that Pages is enabled in **Settings → Pages**.
- Check that `index.html` is in the selected publishing folder.
- Check the repository's Actions tab or Pages deployment status.
- Make sure the URL includes the repository name for a project site.
- Remember that filenames and paths are case-sensitive on the hosting environment.
- Never place secrets in website source code; published files can be viewed by visitors.

## 15. A simple CI workflow

**CI** means Continuous Integration: automatically checking code changes so problems are found earlier.

For a simple static website, create `.github/workflows/check-site.yml`:

```yaml
name: Check website files

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - name: Check out code
        uses: actions/checkout@v4

      - name: Verify website entry file exists
        run: test -f index.html

      - name: Show repository files
        run: ls -la
```

This workflow checks that `index.html` exists. It is a basic example, not a full HTML validator or test suite. Add suitable linting and tests as your project grows.

### Understand CI and CD

- **CI (Continuous Integration):** automatically checks changes, for example by running tests.
- **CD (Continuous Delivery/Deployment):** prepares or publishes changes through an automated release process.
- GitHub Pages can deploy a static website using its configured publishing source or a GitHub Actions workflow. Follow the repository's Pages settings and deployment instructions; do not assume every project uses the same deployment setup.

## 16. Common errors and fixes

### `fatal: not a git repository`

You are not inside a Git repository, or you are in the wrong directory.

```bash
pwd
ls -la
cd path/to/your/project
git status
```

### `Author identity unknown`

Set your Git identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### `remote origin already exists`

Inspect the configured remote:

```bash
git remote -v
```

If it points to the wrong repository, update it:

```bash
git remote set-url origin https://github.com/YOUR-USERNAME/REPOSITORY.git
```

### `src refspec main does not match any`

Often, the branch name is different or no commit exists yet.

```bash
git status
git branch
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

Only make a commit if there are files to commit and no existing commit already covers the work.

### `rejected` or `non-fast-forward`

The remote contains commits your local branch does not have. First fetch and review the changes:

```bash
git fetch origin
git status
git pull --rebase
```

Resolve any conflicts if asked, then push:

```bash
git push
```

Do not use force-push as a first fix. It can overwrite shared history.

### Authentication failed

- Check that you are using the correct GitHub account.
- For HTTPS, use a supported sign-in or token method rather than your GitHub password.
- For SSH, verify your key and remote URL.
- Never share tokens or private keys in chat, commits, screenshots, or logs.

### Merge conflict

Run `git status`, edit the conflicted files, remove conflict markers, stage the resolved files, and complete the merge or rebase as Git instructs.

### GitHub Actions workflow does not run

- Confirm the file is under `.github/workflows/`.
- Check YAML indentation and syntax.
- Confirm the event matches the branch and action you performed.
- Open the **Actions** tab and read the failed step's log.
- Check repository Actions permissions and any required secrets.

### GitHub Pages shows a 404

- Confirm Pages is enabled and the publishing source is correct.
- Confirm `index.html` exists in the selected directory.
- Check whether you are using the correct project-site URL.
- Wait for the latest deployment to finish and inspect its status.

## 17. Git command cheat sheet

| Goal | Command |
|---|---|
| Check Git version | `git --version` |
| Initialise repository | `git init` |
| Clone repository | `git clone URL` |
| Check working tree | `git status` |
| Stage one file | `git add FILE` |
| Stage all current-directory changes | `git add .` |
| Commit staged changes | `git commit -m "MESSAGE"` |
| See compact history | `git log --oneline` |
| Show unstaged diff | `git diff` |
| List local branches | `git branch` |
| Create and switch branch | `git switch -c BRANCH` |
| Switch branch | `git switch BRANCH` |
| Merge branch | `git merge BRANCH` |
| Download remote updates | `git fetch` |
| Pull upstream changes | `git pull` |
| Push commits | `git push` |
| Show remotes | `git remote -v` |
| Unstage file | `git restore --staged FILE` |
| Revert a commit | `git revert COMMIT_ID` |
| Show help | `git help COMMAND` |

Replace uppercase placeholders such as `FILE`, `URL`, and `BRANCH` with real values. Do not type the placeholder text literally.

## 18. Practice projects

Try these in order. Check each box when you complete the task.

- [ ] **Level 1 — First repository:** Create a folder, run `git init`, create `README.md`, stage it, commit it, and inspect `git log`.
- [ ] **Level 2 — GitHub upload:** Create a GitHub repository, connect it with `git remote add origin`, and push your local branch.
- [ ] **Level 3 — Branch practice:** Create a feature branch, edit a file, commit it, merge it into `main`, and delete the feature branch.
- [ ] **Level 4 — Collaboration:** Open an issue and a pull request in a test repository.
- [ ] **Level 5 — Website:** Create `index.html`, enable GitHub Pages, and publish the site.
- [ ] **Level 6 — Automation:** Add a GitHub Actions workflow that runs on every push and pull request.
- [ ] **Level 7 — DevOps practice:** Extend the workflow with linting or tests, and learn how to store secrets safely for workflows that genuinely need them.

## 19. Security and good habits

1. Write meaningful commit messages, such as `Add GitHub Pages homepage`.
2. Keep commits focused on one logical change.
3. Pull or fetch updates before starting work with a team.
4. Use branches and pull requests for changes that need review.
5. Add generated files, local settings, and secrets to `.gitignore` when appropriate.
6. Do not assume `.gitignore` removes a file already committed.
7. If a secret is accidentally committed, revoke or rotate it immediately. Removing it in a later commit does not erase it from history.
8. Give GitHub Actions only the permissions it needs.
9. Review third-party actions before using them, and use trusted versions.
10. Read the full error message before running a fix. Be especially cautious with `reset --hard`, `clean`, and force-push commands.

## 20. Useful official resources

- [Git documentation](https://git-scm.com/doc)
- [Git reference manual](https://git-scm.com/docs)
- [GitHub Docs](https://docs.github.com/)
- [GitHub Skills — interactive learning](https://skills.github.com/)
- [GitHub Actions documentation](https://docs.github.com/actions)
- [GitHub Pages documentation](https://docs.github.com/pages)
- [GitHub CLI manual](https://cli.github.com/manual/)

---

## Final note

You do not need to learn every command in one day. Start with `git status`, `git add`, `git commit`, `git push`, `git pull`, and `git branch`. Practise them in a test repository, then move on to pull requests, GitHub Actions, and GitHub Pages.

If you found this guide useful, consider starring the repository and contributing improvements.

**Happy learning! 🚀**
