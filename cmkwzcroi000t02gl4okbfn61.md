---
title: "About .git folder and it's existence"
datePublished: Tue Jan 27 2026 19:19:16 GMT+0000 (Coordinated Universal Time)
cuid: cmkwzcroi000t02gl4okbfn61
slug: about-git-folder-and-its-existence
tags: chaiaurcode, chaicode, chaicohort

---

## How Git works internally

Here we will learn about the working of git. It is a <mark>hidden folder </mark> which is created by the Git repo when we run a command <mark>‘git init’ </mark> . It creates this folder to track the changes, without this folder our project is not a repository. This folder is the <mark>core of the git repository </mark> .

Git track what happening in this folder and we are only who give the permission to track the changes. The first ever command we’ll be using is the <mark>“git —version” </mark> when we run this command we get the version of the Git which we have installed in our local system basically to check the <mark>version of the Git </mark> which we have installed in our <mark>local system </mark> .

## Understanding the ‘.git’ folder

This <mark>‘.git’ </mark> a hidden folder is like a <mark>database </mark> of the project tracking. It contain all the essential thing which helps in tracking the changes in our project. The thing which is stored in this folder basically the things we have changed in our project like <mark>deletion </mark> , <mark>addition </mark> , and when we have done all this changes.

It store the folders like :-

* objects
    
* refs
    
* Head
    
* config
    
* index
    
* logs
    

## Git Objects: Blob, Tree, Commit

We do the regular basic thing in our projects are write and then add it and the commit. Git <mark>stores everything </mark> like a object, it creates three main objects and they are <mark>blob</mark>, <mark>tree</mark> and <mark>commit</mark>.

### Blob

Blob is the actual file or a code which needs to be saved. It stores <mark>all content</mark> of the files only.

Like if we write

```xml
fileOne.html

/* Having the message */
'Hello World'

/* The Blob conatins only the message we have written in the fileOne.html*/
```

### Tree

Now, the tree just by hearing the word tree there is a image of a tree where we imagine a tree have branches and the structure like starting from the single lane to a multiple routes (spreading). This is the same thing tree does here. It gives us the <mark>structure of the project’s files </mark> and folders with its name. And it is the <mark>reference of the Blob </mark> .

We have this structure which we see

```xml
project/
 ├── fileOne.html
 └── src/
     └── app.js
```

But the things goes in it like

```xml
Tree (project)
 ├── fileOne.html => Blob
 └── src → Tree
      └── app.js => Blob
```

### Commit

Commits are just like the <mark>screenshots </mark> of the latest or <mark>updated project </mark> . Here we can assume like the top of the tree. And it takes the <mark>reference of the Tree </mark> . Few things which commits contain are :-

* Parent commit ( may have multiple parent commit )
    
* Commit message
    
* Time Stamp
    
* Authors information
    

And this is the thing goes on in the Commit object is

```xml
Commit A
 ├── Tree (root)
 ├── Parent => Commit B
 ├── Author: You
 └── Message: "Initial commit"
```

## How Git Tracks Change

Git track changes by three main things :-

1. Content of the file
    
2. State of the file
    
3. History of the changes
    

### Content of the file

Whenever we do a commit a <mark>SHA-1 hash </mark> get created and Git track changes just by <mark>comparing </mark> the SHA-1 hash. Git just compare the last commit and the SHA-1 hash if the hash changes that means you have changed something, <mark>even a single character </mark> is getting tracked by the SHA-1 hash. Git <mark>recalculate </mark> the hash which is generally of <mark>40 characters </mark> if we do any changes it change the 40 character hash. And when Git recalculate it get the different hash then Git mark it as modified which means you have done few or more changes in the file if it gets the same hash then it mark as unchanged.

### State of the file

It track the files status that what is the status of the file untracked, modified, staged or committed.

**<mark>Untracked </mark>** if the file exists in our folder but Git is unaware of it that means it is untracked. But if the file is marked as **<mark>modifies </mark>** it clearly means that there are few changes have been done by the user after the file was committed. But if we have added the file by running this code

```xml
git add index.html
```

Now, our code have been added to <mark>staging </mark> are just like taking a <mark>screenshot </mark> of it. And it is <mark>ready for commit </mark> . The code get saved permanently by writing this code

```xml
git commit -m "Here the code is being permanently saved"
```

After running this code our code will be uploaded or saved permanently to our server which we are using likely GitHub or GitLab.

### History of the changes

Git store or maintain the history of the commits like chain structure. Whenever we do a commit the commit stores/save our details of <mark>author details </mark> , <mark>commit time </mark> , <mark>messages </mark> , <mark>parent commit </mark> and structure of the project ( <mark>Tree </mark> ) and each of this is being saved in the commit. Each commit know its parents because it is stored in history.

When we do commit it save the file blobs, creates tree, create commit object and store parent commit hash and Git use our old blobs if our file’s content is not changes otherwise it creates a new blob.