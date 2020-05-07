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

![App Home](https://user-images.githubusercontent.com/23479038/80110186-b1961d00-857e-11ea-90ff-08b1e0b1e342.png "Marijn's Reisplanner")

## Description

This is a travel planner for the NS specifically designed for Marijn. Marijn is motor impaired and sometimes has trouble navigating websites.
When he needs to use the train he must indicate this at least an hour in advance so that he can be helped with boarding.

The core functionality of this app is a date picker to see which trains he can take to go to his work or home. Normally, you need to 
type the departure and destination location and select a date and time of when you are leaving or need to be at your destination.
But to make it more accessible for Marijn, he can just click on some buttons using his trackpad or keyboard to see which trains he can take to go 
to his work or home. For more information about Marijn see: [User Scenario (Marijn)](#User-Scenario-(Marijn)).

## Table of Contents

* [How To Install](#How-To-Install)
  * [Development](#Development)
  * [Production](#Production)
* [User Scenario (Marijn)](#User-Scenario-(Marijn))
* [Design Principles](#Design-Principles)
* [User Tests](#User-Tests)
  * [First User Test](#First-User-Test)
    * [Feedback](#Feedback)
  * [Second User Test](#Second-User-Test)
    * [Feedback](#Feedback)
* [Final Prototype](#Final-Prototype)
  * [End Result](#End-Result)
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
trackpad with his thumb. Because he only uses the right side of his keyboard, he doesn't navigate a website using the `tab` key, but just uses his trackpad.
And to select buttons or other options he also uses, besides the trackpad, the `Enter` key, the `arrows` keys, `space bar` and `Shift` key. \
Something that Marijn really hates is when designers or programmers don't think but just do things, like changing the 
convention that a button can be clicked using the `Enter` key or `space bar`.

This app is specifically made for Marijn. I redesigned the date picker from the [NS travel planner](https://www.ns.nl/) to make it easier for 
him to plan a trip with the train.

Down below you can find the results of the research.

## Design Principles

Because I don't really know what it's like to have Marijn's disability, I have to do research to know what works best for him. 
I can't base my research on existing design principles because they are made for abled people, so I have to design something new. 
A good way of doing this is by following the **[4 Exclusive Design Principles](https://exclusive-design.vasilis.nl/)** by Vasilis van Gemert. 
These principles are: **Study situation**, **Ignore conventions**, **Prioritise identity** and **Add nonsense**.

The first point [study situation](https://exclusive-design.vasilis.nl/principles/study-situation/) means that you need to study the 
person in question and how they will use the app (situation, nevigation, etc). \
The research about Marijn can be found here: [User Scenario (Marijn)](#User-Scenario-(Marijn)). 

The second point is [ignore conventions](https://exclusive-design.vasilis.nl/principles/ignore-conventions/). The current conventions are 
made by, and thus for, designers. Because of this not all of these conventions work for other people, especially people with disabilities.
In Marijn's case some of the conventions should be ignored because they don't work for him, like the `tab` key for example. The convention for this
is that a user should be able to tab through every item on a website, but in Marijn's case this isn't an option because the `tab` key is on the 
left side of the keyboard and he only uses the right side. So the convention for tabbing through a website should be ignored and changed to 
meet Marijn's needs, using other key bindings.

The third point is [prioritise identity](https://exclusive-design.vasilis.nl/principles/prioritise-identity/). Usually designers study the people
for whom they are designing something but don't ask those people what they would like to see in the design. By including Marijn 
into my design process and see him as co-designers rather than a study object, he can help coming up with new, relevant, conventions.
In order to accomplish this I have a weekly meeting with Marijn to test a prototype, ask questions and observe him during the test. 
The findings and feedback from the user tests can be found here: [User Tests](#User-Tests). \
Beside all the key bindings I also kept the interests Marijn told me in mind during the design process, so that I could incorporate them 
into the design as well. One example is the custom NS logo in which his name is incorporated.

And at last, [add nonsense](https://exclusive-design.vasilis.nl/principles/add-nonsense/)! Adding nonsense to a website designed 
for someone with a disability, like Marijn, can be a useful tool to investigate the unknown. And most of all, it's fun! \
A good way of doing this is by adding a concept to your prototype you wouldn't normally add. This because there is a chance that it is not practical. 
But perhaps by adding nonsense you will find something that can be used anyway and is even functional. \
To make the app more fun, I changed for example the cursor to a hand that makes the `rock` gesture, made it change a bit on hover and gave the legend an animation. 

## User Tests

Normally, Marijn would have come to us at the HvA for the user tests but, because of Corona, the school is currently closed and we are 
not allowed to go outside unless absolutely necessary. Therefor we can't go to Marijn nor can he come to us at another location.

So the only solution was to meet online! This had some challenges, because Marijn is sometimes very difficult to understand. During the first meeting (via Bongo), 
where we got to know Marijn, we all had to concentrate very well in order to understand him properly and even then sometimes we couldn't hear what he said. 
But the most important part was that we couldn't see how he was using his computer, which is very important during user tests. So the next meeting our teacher Vasilis arranged for him to go to Marijn, 
so that he could film Marijn's keyboard and we could see what Marijn was doing during the tests. That was very nice and helpful, because this way we could see how Marijn was using his computer and 
Vasilis could also repeat things that Marijn said if we didn't understand it.

In this chapter I will discuss all the user tests I did with Marijn.

### First User Test

For my first user test I made a prototype where I redesigned the date picker so that he could set the date using the up and down `arrow` keys and go to the next input field using the `/` key and to the previous input field using the keys `Shift` + `/`. I chose these key bindings, 
because they are on the right side of the keyboard and are next to each other so therefor he wouldn't have to move his hand very far.

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

After I told Marijn what the key bindings were he said that they were okay.
During the test I could really notice that Marijn is a developer himself because he immediately tested the edge cases for bugs like negative or decimal numbers, and that was possible. Same goes for leaving the input field empty.

**Improvements**

Here are the some points of improvement that I got from my own test (observing via webcam and feedback) and from feedback Marijn gave to others.

- Add a legend.
- Use the keys `H`, `J`, `K` and `L`.
- Everything can be normal sized, do no use large input field.
- Change the overall color pallet to something "punk", or something that is darker. He likes the music genre: "metal", 
where dark color are a common theme, so that's something to be aware of.
- He was very happy with metal/punk-related styling so I it would be nice to add something like that as well.
- A button "in 1 hour" is very useful. 
- Think about which keys can be a part of the Sticky Keys.
- A switch between home and work would be nice.
- Idea: one button to select that you want to `go from home to work in one hour`.

### Second User Test

After the first user test I came up with the idea to redesign the date picker used in the NS travel planner. This so that planning 
a trip from home to work and back with the train becomes a lot more pleasant for him. So I decided to delete everything I made 
for my first prototype and just start from the beginning.

Besides having a story one big issue during the last test was that there wasn't a legend. So I created one that looks exactly like the one in his Mac.

![Legend Second Prototype](https://user-images.githubusercontent.com/23479038/80018283-13e71300-84d6-11ea-8c6c-e8ab121bbe85.png "Legend Key Bindings Keyboard")

I also added some extra key bindings: the `J`, `K` and `L` keys along with the arrow keys, `spacebar` and the `Enter` key. 
And added a custom Google Font and a background image of people at a concert making the `rock` gesture, to make it more "punk" and incorporate 
his love for metal music and concerts.

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

## Final Prototype

After the final user test with Marijn I made my final prototype. In this prototype I had to change a few things that came up during 
the user test.

In this prototype I changed some of the key bindings since some of them were confusing for Marijn. Like using the `J` key for switching between home and work.
So I changed all the key bindings to the following key bindings:
- `spacebar` and `Enter` key: to switch between home and work, or to click/activate a button.
- `O` key: to change the focus to the switch button (this was the `J` key in my previous prototype).
- `P` key: to change the focus to the submit button (this was the `spacebar` in my previous prototype).
- `left arrow`: go to the previous focusable element.
- `right arrow`: go to the next focusable element.
- `H` key: imitating the left arrow key (this was the `K` key in my previous prototype).
- `L` key: imitating the right arrow key.

I also made sure that the switch between home and work is focused on page load, to let Marijn switch between home and work immediately when pressing the 
`spacebar` or `Enter` key. 
And added a hide key (`I`) for the legend and made a refresh key so that he can refresh the page by only pressing the `R` key.

![Legend Final Prototype](https://user-images.githubusercontent.com/23479038/80109979-772c8000-857e-11ea-9cc7-b2065c8954fc.png "Legend Key Bindings Keyboard Final Prototype")

Besides the key bindings I also added more options to the home and work select boxes, so that I could also use the app when travelling to or from other stations.
The cities/places I added for now are:
- Schiphol
- Almere
- Breda
- Den Haag
- Emmen
- Enkhuizen
- Groningen
- Haarlem
- Hoorn
- Maastricht
- Nijmegen
- Rotterdam
- Tilburg
- Zaandam
- Zwolle

I also fixed the bug Marijn found during the last user test which was that he could also select to travel from home to home which 
gives an error in the NS travel planner.
So I made sure that this isn't possible anymore, and when Marijn selects the same values in the select boxes an error will be shown 
and the value of the last changed select box will change back to the default value (home or work).

<details>
    <summary>Error Message</summary>
    
![Error Message](https://user-images.githubusercontent.com/23479038/80120156-e314e580-858a-11ea-86d1-51255bfa8c00.png "Error Message")
</details>

And I changed the default time to be in an hour instead of the current time.

And finally, for the fun, I also added a custom cursor with the `rock` gesture, which changes a little bit when hovering over buttons and select boxes.

<details>
    <summary>Cursor Default</summary>
    
![Cursor Default](https://user-images.githubusercontent.com/23479038/80109172-78a97880-857d-11ea-9b1a-dfecea1a26b1.png "Default Cursor")
</details>
<details>
    <summary>Cursor Hover</summary>
  
![Cursor Hover](https://user-images.githubusercontent.com/23479038/80109177-79420f00-857d-11ea-96d9-f03e5dbb67c9.png "Cursor Hover")
</details>

### End Result
    
![Final Prototype](https://user-images.githubusercontent.com/23479038/80110186-b1961d00-857e-11ea-90ff-08b1e0b1e342.png "Final Prototype")

<details>
    <summary>Hidden Legend</summary>
    
![Final Prototype - Hidden Legend](https://user-images.githubusercontent.com/23479038/80110173-ad69ff80-857e-11ea-9aa1-11dc30a1a7c0.png "Final Prototype - Hidden Legend")
</details>

## Sources

The sources I used during this project are:
- [4 Exclusive Design Principles by Vasilis van Gemert](https://exclusive-design.vasilis.nl/)
- StackOverflow
  - [Get Current Time](https://stackoverflow.com/questions/10599148/how-do-i-get-the-current-time-only-in-javascript)
  - [Change Select Value On Click](https://stackoverflow.com/questions/5853492/change-select-value-on-click-with-javascript)
  - [Get Selected Value Text From Select On Change](https://stackoverflow.com/questions/5416767/get-selected-value-text-from-select-on-change)
- [Freepik](https://www.freepik.com/)
- [Codepen](https://codepen.io/)

## Credits

- [Datepicker Design](https://codepen.io/kimmy/pen/EyzWjV)
- [NS Colors](https://www.ns.nl/reisplanner/#/)
- [Material Colors](https://material.io/resources/color/#!/?view.left=0&view.right=0)
