Angular Developer Test
======================
The Business of Fashion uses various tests to assess whether a candidate is best suited to the expectations of the role advertised and the offer given.

This test aims to demonstrate your technical skills in practice: that you can deliver a solution which implements a scalable front-end architecture, which is easy to use, and that pays attention to the requirement details.

Instructions & Deliverables
---------------------------

1. Fork this repository to your account (https://help.github.com/articles/fork-a-repo/)
2. Read these instructions carefully first before continuing with the practical test
3. Read the Requirements / Story Definition and Conditions of Acceptance
4. Identify and write at least 5 test cases (no code necessary; Gherkin or a written list will suffice)
    - Demonstrate your understanding of the Conditions of Acceptance
    - Identify any appropriate edge cases
5. Implement the Story's functionality using the files in 'public' directory
    - Develop a solution which demonstrates your skills and strengths
    - You may add/change/modify any files in the project
    - You may use any google or other references for angular/bootstrap syntax
6. Describe how you can build a better "Product" for this coding task in SOLUTION.md and include your estimates
7. Create a pull request to origin repository when you are satisfied with your solution (https://help.github.com/articles/about-pull-requests/) 


Other Notes
-----------

- This test uses Angular 1.5 and Bootstrap 3 but you are free to base it on Angular 1.6 and/or Foundation if that is what you prefer
- Please remember to demonstrate your skills and how you would normally approach feature development
- I must ask that you time yourself so that you balance Quality and Delivery. I will not prescribe a
deadline of X hours, instead, I would like you estimate the task, complete the task, and measure your elapsed time. Please submit your estimate and actual time with your code solution
- Solution should be fully working when we check out code, make sure you add any additional dependencies you use in package.json or bower.json
- You can access API docs here: (https://github.com/bof-ci/test-angular/blob/master/API_DOCS.md)


Requirements / Story Definitions
================================

### Technical requirements:

Develop a SPA app (single page app), where profiles are retrieved from the API and where filters can be used to limit the results from the API. Each profile can be edited on a seperate page.

We prepared a starting template to help you get started. Feel free to modify that in any way you see fit. 

Provided templates:

- public/index.html - first page, profile listing
- public/profile_edit.html - profile editing


### Product Requirements:

TASK 1:

As a BoF editor I want to list and filter person profiles

``` gherkin
WHEN I visit the homepage
THEN I expect to see filters sidebar
AND I expect to see a table of profiles
AND I expect to see "10" profiles in a table
AND I expect to see profiles pagination

WHEN I visit the homepage
THEN I expect to see filters sidebar
WHEN I search for "Japan" in filters sidebar
THEN I expect to see he following profiles in the profiles table:
    | Masamichi Katayama    |
    | Rei Kawakubo          |


WHEN I visit the homepage
THEN I expect to see filters sidebar
WHEN I filter by "Enabled" "No" in the sidebar
THEN I expect to see he following profiles in the profiles table:
    | Linda Fargo       |
    | Jefferson Hack    |
    | James Jebbia      |

WHEN I visit the homepage
THEN I expect to see filters sidebar
WHEN I filter by "Enabled" "No" in the sidebar
AND  I filter by "Visible" "No" in the sidebar
THEN I expect to see he following profiles in the profiles table:
    | Jefferson Hack    |

```

TASK 2:

As a BoF editor I want to edit a person's profile

``` gherkin
WHEN I visit the homepage
THEN I expect to see a table of profiles
WHEN I click on a profile row
THEN I expect to see profile edit page

WHEN I visit profile edit page
THEN I expect profile data to be pre-filled
WHEN I change data and click save
THEN I expect the data to be saved

WHEN I visit profile edit page
THEN I expect profile data to be pre-filled
AND  I expect to see profile thumbnail
AND  I expect to see profile assets
WHEN I click on a profile asset
THEN I profile thumbnail is updated
AND  I expect the data to be saved

```

Technical Setup
===============

You will need to have node and npm installed. This test was verified to work on Node v7.5.0.

1. On the command prompt, run:

    $> cd /path/to/the/test/folder

    $> npm install
    $> npm install -g bower
    $> bower install
  

2. Ensure everything was installed successfully

3. Start the environment

    $> npm run-script serve

4. Visit the page in browser

    http://localhost:3000

    You should see a Bootstrap based page