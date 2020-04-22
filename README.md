# Web Design @cmda-minor-web 1920

<p align="center">
  <a href="https://marijns-ns-reisplanner.herokuapp.com/">
    <img src="https://img.shields.io/badge/demo-LIVE-brightgreen.svg?style=flat-square" alt="Demo">
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://github.com/MarjoleinAardewijn/web-design-1920/blob/master/LICENSE.md">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="License">
  </a>
</p>

![App Home](https://user-images.githubusercontent.com/23479038/80017701-48a69a80-84d5-11ea-9a80-75161a428bb1.png "Marijn's Reisplanner")

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

In this chapter I will tell more about my prototypes and how the tests went.

### First Prototype

For my first prototype I redesigned the date picker so that he could set the date using the up and down `arrow` keys and go to the next input field using the `/` key and to the previous input field using the keys `Shift` + `/`. I chose these keybindings, 
because they are on the right side of the keyboard and are next to each other so therefor he wouldn't have to move him hand very far.

I chose to make the input field extra large, because I saw during the first meeting that I sometimes still uses his mouse to select an input field. So I wanted to test if bigger input field would be easier for him to use.

<details>
    <summary>First Prototype</summary>
    
![v1](https://user-images.githubusercontent.com/23479038/79966891-5edd3800-848e-11ea-9970-52744b77370b.png "Prototype Version 1")
</details>

#### Feedback

**Questions**

- Are the key bindings used easy to use?
  - There is no legend. So I don't know what the keybinding are. And I can't go to the next field using the left and right `arrow` keys.
- Is everything clear?
  - yes, but I have no problem reading, so it can be a bit smaller. If I now click on the numbers, the number is selected and I can't use the arrow keys anymore to change it, which is very difficult.
- Are there still areas for improvement?
  - There is no story, it's just a date picker. And I would like to see other colors, more punk!

After I told Marijn what the keybinding were he said that they were okay.
During the test you could really notice that Marijn is a developer himself because he immediately tested the edge cases like negative or decimal numbers, and that was possible. Same goes for leaving the input field empty.

**Improvements**

Here are some points of improvement listed which I found during my own observations via the webcam, from the feedback from Marijn and from the feedback from Marijn to others. 
These are the some points of improvement that I got from my own test (observing via webcam and feedback) and from feedback he gave to others.

- Add a legend.
- Use the keys `H`, `J`, `K` and `L`.
- Everything can be normal sized, do no use large input field.
- Change the overall color pallet to something "punk", or something that is darker. He likes the music genre: "metal", where dark color are a common theme, so that's something to be aware of.
- He was very happy with metal/punk-related styling so I it would be nice to add something like that as well.
- A button "in 1 hour" is very useful. 
- Think about which keys can be a part of the Sticky Keys.
- A switch between home and work would be nice.
- Idea: one button to select that you want to `go from home to work in one hour`.

### Second Prototype

After the first user test I came up with the idea to redesign the date picker used in the NS travel planner. This so that planning 
a trip from home to work and back with the train becomes a lot more pleasant for him. So I decided to delete the date picker I made 
for my first prototype and just start from the beginning.

Besides having a story one big issue during the last test was that there wasn't a legend. So I created one that looks exactly like the one in his Mac.

![Legend Second Prototype](https://user-images.githubusercontent.com/23479038/80018283-13e71300-84d6-11ea-8c6c-e8ab121bbe85.png "Legend Key Bindings Keyboard")

I also added some key bindings to the key bindings I already configured the last time, which were only the `/` key and the `Shift` key. I used the `J`, `K` and `L` keys along with the arrow keys, `spacebar` and the `Enter` key.

<details>
    <summary>Second Prototype</summary>
    
![v2](https://user-images.githubusercontent.com/23479038/80017701-48a69a80-84d5-11ea-9a80-75161a428bb1.png "Prototype Version 2")
</details>

#### Feedback

**Questions**

- What do you think of the design?
  - Looks good!
- Are the key bindings useful?
  - The `J` isn't very useful, because that one is part of the `H`,`J`, `K` and `L` keys who represent the `arrow` keys. And the behaviour 
  of the `J` key is completely different compared to the behaviour expected for `arrow` keys.
  Also I would like to see that the switch button is already focus on page load, so that I can immediately switch between "Home" 
  and "Work" using the `spacebar` (instead of the `Enter` key).
- Is it helpful that you can also choose to plan a trip in 2 hours?
  - Yes, that is very helpful.
- Are there things you could like to add to the app?
  - Yes, the option to also choose another city to go to, not only "Home" and "Work".

During the test Marijn also found a bug when he submits the form when the value of the departure station is the same as the value of 
the arrival station. On the NS site, this gives an error since you can't select the same stations. So this is something I need to fix.

I also had the functionality that when he didn't choose a time the current time would be used. This with the idea of when he is 
at the train station and for example wants to check at which boarding platform he needs to be he can check it via the app.
But this wasn't very helpful for him, because he wouldn't use that. He would like the default time to be the current time plus one hour.

**Improvements**

Here are some points of improvement listed which I found during my own observations via the webcam, from the feedback from Marijn and from the feedback from Marijn to others. 
These are the some points of improvement that I got from my own test (observing via webcam and feedback) and from feedback he gave to others.

- Don't use the keys `H`,`J`, `K` and `L` for other behaviours than the arrow key behaviours.
- Add the option to also choose another city to travel to or from.
- Make the switch button focused on page load and clickable with the `spacebar`.
- Set the default time to be in an hour.
- Fix bugs with the select boxes.

### Final Prototype

![Legend Final Prototype](https://user-images.githubusercontent.com/23479038/80019762-4bef5580-84d8-11ea-8156-98fe136e5ba1.png "Legend Key Bindings Keyboard Final Prototype")

<details>
    <summary>Final Prototype</summary>
    
![Final Prototype](https://user-images.githubusercontent.com/23479038/80019982-9d97e000-84d8-11ea-8c2a-32376a6c424e.png "Final Prototype")
</details>

## Feature Wishlist

## Sources

## Credits

- [Datepicker Design](https://codepen.io/kimmy/pen/EyzWjV)