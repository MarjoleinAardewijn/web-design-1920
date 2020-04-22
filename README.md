# Web Design @cmda-minor-web 1920

<p align="center">
  <a href="https://ancient-hamlet-10241.herokuapp.com/">
    <img src="https://img.shields.io/badge/demo-LIVE-brightgreen.svg?style=flat-square" alt="Demo">
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://github.com/MarjoleinAardewijn/progressive-web-apps-1920/blob/master/LICENSE.txt">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="License">
  </a>
</p>

![App Home](https://user-images.githubusercontent.com/23479038/79967167-c8f5dd00-848e-11ea-8e37-0e35b43aba15.png "Marijn's Reisplanner")

## Description

This is a travel planner for the NS specifically designed for Marijn. Marijn is motor impaired and sometimes has trouble navigating websites.
When he needs to use the train he must indicate this at least an hour in advance so that he can be helped with boarding.

The core functionality of this app is a date picker to see which trains he can take to go to his work or home. Normally, you need to 
type the departure and destination location and select a date and time of which you are leaving are need to be at your destination.
But to make it more accessible for Marijn he can just click on some buttons using his trackpad or keyboard to see which trains he can take to go 
to his work or home. For more information about Marijn see: [User Scenario (Marijn)](#User-Scenario-(Marijn)).

## Table of Contents

* [To Do](#To-do)
* [How To Install](#How-To-Install)
  * [Development](#Development)
  * [Production](#Production)
* [User Scenario (Marijn)](#User-Scenario-(Marijn))
* [Design Principles](#Design-Principles)
* [Prototypes](#Prototypes)
  * [First Prototype](#First-Prototype)
    * [Feedback](#Feedback)
  * [Second Prototype](#Second-Prototype)
    * [Feedback](#Feedback)
  * [Final Prototype](#Final-Prototype)
* [Conclusion](#Conclusion)
* [Feature Wishlist](#Feature-Wishlist)
* [Sources](#Sources)
* [Credits](#Credits)

## How To Install

See the installation guide to learn how to install and use the app.

<details>
    <summary>Installation Guide</summary>

Go via the terminal to the folder you want the project to be placed:

```
    cd Path/To/Folder
```

Clone the repository and go to the project folder:

```
    git clone https://github.com/MarjoleinAardewijn/progressive-web-apps-1920.git && cd progressive-web-apps-1920
```

After cloning the project go to the docs folder:

```
    cd docs
```

Install npm:

```
    npm init
```

Install all the dependencies:

```
    npm install
```

### Development

When in development, run the following command to watch the changes:

```
    npm run dev:watch
```

In you browser. go to:

```
   localhost:3000 
```

### Production

When the app the finished use Heroku to deploy it.

First, login to Heroku:
```
    heroku login
```

Deploy the app by creating a new domain on Heroku. Heroku generates a random name for your app.
```
    heroku create
```

Clone the repository:
```
    heroku git:remote -a name-of-the-app
```

Push master branch to Heroku:
```
    git add .
    git commit -m "Heroku"
    git push heroku master
```

Open the app in your browser to check if everything went well:
```
    heroku open
```

To see the logs when something went wrong, run the following command:
```
    heroku logs --tail
```
</details>

## User Scenario (Marijn)

This app is specifically made for Marijn Meijles. People describe him as a lovely hard-working man. And he describes himself as 
cheerful, skilled and analytical. He loves Metal music and, when he goes to a concert, he definitely can be found in the moshpits. 

Marijn has a motor disorder, this is a disorder of the nervous system that cause abnormal and involuntary movements. 
Because of this he sometimes has trouble using certain features on websites, like date pickers or drag and drop, because 
they are made for abled people.

He mostly uses his keyboard to navigate, and in the Accessibility settings of his Mac he has Sticky Keys enabled. \
When he is working on his computer he uses his left hand and therefor only the right side of his keyboard and uses the 
trackpad with his thumb. Because he only uses the right side of his keyboard, he doesn't navigate a website using `tab` key but just uses his trackpad.
And to select buttons or other options he also uses `Enter` key, the `arrows` keys, `space bar` and `Shift` key. \
Something that Marijn really hates is when designers or programmers don't think but just do things, like changing the 
convention that a button can be clicked using the `Enter` key or `space bar`.

This app is specifically made for Marijn. I redesigned the date picker from the NS travel planner to make it easier for 
him to plan a trip with the train.

Down below you can find the results of the research.

## Design Principles

Because I don't really know what it's like to have Marijn's disability, I have to do research to know what works best for him. 
I can't base my research on existing design principles because they are made for abled people, so I have to design something new. 
A good way of doing this is by following the **[4 Exclusive Design Principles](https://exclusive-design.vasilis.nl/)** by Vasilis van Gemert. 
These principles are: **Study situation**, **Ignore conventions**, **Prioritise identity** and **Add nonsense**.

The first point [study situation](https://exclusive-design.vasilis.nl/principles/study-situation/) means that you need to study the person in question and how they will use the app. In what situation is the app 
going to be used and how will it be navigated. The research about Marijn can be found here: [User Scenario (Marijn)](#User-Scenario-(Marijn)). 

The second point is [ignore conventions](https://exclusive-design.vasilis.nl/principles/ignore-conventions/). The current conventions are 
made by, and thus for, designers. Because of this not all of these conventions work for other people, especially people with disabilities.
In this case some of the conventions should be ignored because they don't work for Marijn. the tab key for example. The convention for this
is that a user should be able to tab through every item on a website, but in Marijn case this isn't an option because the tab key is on the 
left side of the keyboard and he only uses the right side. So the convention for tabbing through a website should be ignored and changed to 
meet Marijn's needs.

The third point is [prioritise identity](https://exclusive-design.vasilis.nl/principles/prioritise-identity/). Usually designers study the people
for whom they are designing something. But don't ask those people what they would like to see in the design. By including Marijn 
into my design process and see him as co-designers rather than a study object, he can help coming up with new, relavant, conventions.
In order to accomplish this I have a weekly meeting with Marijn to test with Marijn, ask questions and actively observe him during the test.

And at last, [add nonsense](https://exclusive-design.vasilis.nl/principles/add-nonsense/)! Adding nonsense to a website designed 
for someone with a disability, like Marijn, can be a useful tool to investigate the unknown. And most of all, it's fun! A good way of
doing this is by adding a concept to your prototype you wouldn't normally add. This because there is a chance that it is not practical. 
But perhaps by adding nonsense you will find something that can be used anyway and is even functional. \
Because of Marijn's disability it takes more time to navigate the web. So to let him navigate the app faster I plan to add the functionality 
that when he clicks on the `spacebar` the submit button will be focused immediately and when focused can be clicked using the `Enter` key 
to submit the form and go to the NS travel planner.
And, to make it more fun, I also want to give the legend an animation.

## Prototypes

Normally, Marijn should have come to us at the HvA to test the prototypes but, because of Corona, the school is closed and we are 
not allowed to go outside unless absolutely necessary. Therefor we can't go to Marijn nor can he come to us. 

So the only solution was to meet online! This had some challenges, because Marijn is sometimes very difficult to understand. Because during the first meeting (via Bongo), 
where we got to know Marijn, we all had to concentrate very well in order to understand him properly and even then sometimes we couldn't hear what he said. 
And we couldn't see how he was using his computer, which is very important during user tests. So the next meeting our teacher Vasilis arranged for him to go to Marijn, 
so that he could film Marijn's keyboard and we could see what Marijn was doing during the tests. That was very nice, because this way we could see how Marijn was using his computer and 
Vasilis could also repeat things that Marijn said if we didn't understand it.

Down below I will tell more about my prototypes and how the tests went.

### First Prototype

For my first prototype I redesigned the date picker so that he could set the date using the `arrow` keys.

<details>
    <summary>Prototype v1</summary>
    
![v1](https://user-images.githubusercontent.com/23479038/79966891-5edd3800-848e-11ea-9970-52744b77370b.png "Prototype V1")
</details>

#### Feedback

**Questions**


### Second Prototype

#### Feedback

### Final Prototype


## Feature Wishlist

## Sources

## Credits

- [Datepicker Design](https://codepen.io/kimmy/pen/EyzWjV)