---
title: "Git and GitHub"
datePublished: Mon Jan 12 2026 19:37:11 GMT+0000 (Coordinated Universal Time)
cuid: cmkbke19b000102l5htvect53
slug: git-and-github
tags: chaiaurcode, chaicode, git-and-github-for-beginners

---

## Content

* What is Git
    
* Why Git is used
    
* Basic and core terminologies
    
* Few common Got Commands
    

## Git

Git is a <mark>independent software</mark> which runs on our local system. It is a **<mark>version control system</mark>** (*VCS*). It basically <mark>track the changes</mark> which we are doing in our code. It is very difficult to track our changes when more than one person works on a single project.

Eg. As a team two people started working one a single project. Initially they have to code something and store in a pen drive or a hard disk. In starting they will be not aware about the changes what other one is making in it .If someone is making a change in it and the other one is not aware about the changes what the first person have done. So, to deal with this here Git is being introduced to track the changes like a screen shot that they have made in the code.

## Uses of Git

Git is used to track your changes which have been made by the team members, so that you can handle the errors and get aware about the latest changes in your project or code.

## Some basic and core terminologies of git

Few basic and core terminologies of git which we need to know about them are :-

### Repository ( Repo )

This is the project folder which is managed by the Git. All the folders and files of your project will live here.

### Commit

This is like a screenshot of the code which will be saved to trace the changes in the older and the latest version by comparison.

### Status

To know the current status or condition of the project on which someone is working.

### Staging area

This is the place where the code is ready to go. Here the code id kept like a dispatch department where by just giving a message we can save a screenshot to a cloud or a server like GitHub or GitLab.

### Branch

This is the point where we get separated by the main path to another own path with the copy of the main project that if by any change the code goes wrong we will resolve it on the way which will not effect the main path of the project. And this is helpful when several people are working on the same project at a time.

### Merge

Now, this is the place where we merge our separated path to the main path of the project after making the changes of our part which is it be done without disturbing the main project.

### Remote

The remote means the connected by distance which can be operated by the anywhere from the world. It’s basic means is that hosting online.

### Push

This is the thing which will push the code from our staging area to cloud or remote or a server we can say.

### Pull

This is the feature which is provided to us through which we can get the zipped file from the server to our local system.

## Common Git commands

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1768244343294/d4db4046-3fe7-4053-8ee0-3f78aecf343a.png align="center")

Here, we have few commands to co-operate with <mark>Git</mark> and tell the git that which is the project to be tracked. The Git track the changes as we tell him, just <mark>clicking like a selfie</mark> when we press a button on a screen to take a selfie. Git have <mark>commands</mark> to take for the tracking of it like we code line by line, but it’ll be very huge and large to track it <mark>line by line changes</mark>. So, Git says that “ ***I have few commands which will help you to co-operates with us. Just give the instruction***. “.Here Git also tell us that , tell me whenever you are complete just by few commands. The commands for that are provide to communicate with the Git and GitHub are **<mark>initializing </mark>** , **<mark>connecting to server </mark>** , **<mark>current status </mark>** and so on.

### The commands are as follows :-

1. git init *( for initialization )*
    

This is to initialize the git repo.

```xml
git init 
```

2. git clone &lt; URL &gt; *( to create a local copy from the server )*
    

This is use to copy the exact code from the server to your local system.

```xml
git clone < repo_URl >
```

3. git config *( to set the configuration like username & user mail )*
    

This is the command which is used to set and manage the configuration for the Git. This is to set name and email.

```xml
git config --global --edit
```

4. git status *( current position of the tracking )*
    

It is the command which is used to get the current situation or the status of the repo like it is in staging are or in modified or untracked or like nothing to commit ( screenshot ).

```xml
git status
```

5. git commit -m “ some changes related messages “ *( message before tracking )*
    

Here, we give the final message to the changes which we have made like added a feature or whatever we have changed we give a message and save it to repo’s history.

```xml
git commit -m "Initial commit message"
```

6. git add *( ready to go to the server )*
    

This is the command which we use to give access to staging area where the codes are ready to go.

```xml
git add .
```

7. git diff *( basically the difference )*
    

We use this command to see the difference between the changes which we have made in our project like deletion, addition of file or extra line the actual and exact changed which we have done.

```xml
git diff
```

8. git push *( the final push to server )*
    

It pushes the final code with commit message from our local system to remote repo which is uploaded on the server like GitHub or GitLab

```xml
git push
```