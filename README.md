

# TestimonialGen 

![GitHub top language](https://img.shields.io/github/languages/top/soyo-kaze/TestimonialGen)![GitHub](https://img.shields.io/github/license/soyo-kaze/TestimonialGen)![GitHub Repo stars](https://img.shields.io/github/stars/soyo-kaze/TestimonialGen)![GitHub commit activity](https://img.shields.io/github/commit-activity/w/soyo-kaze/TestimonialGen)

Dynamic Digital graphic testimony Generator in NextJs.

## Tech Stack

- NextJS
- ReactJS
- TailwindCSS
- Canvas API

## Why?

It all start with an email from our college's placement cell - [Training and Placement Cell BKBIET](https://www.linkedin.com/in/ACoAADk3RHwBcvB_AG9xGOTRHzVjPy-GAMQawGQ). So I though why not create an web app that automates the testimony generation.



## About

<figure style="display:flex;justify-content:center;width:100%;flex-direction:column"><img src=".\Readme assets\template(2).png" alt="Trulli" /><figcaption align = "center" style="font-size:12px"><b>Fig.1 -</b> <cite >Testimony Template example</cite></figcaption></figure>

`Instead of editing the template in photoshop or any other editing software one can simply fill a form and ***voila!*** you get your digital testimony ready to download in seconds.`  

- ### Step 1: 

  - Visit the site: https://testimonial-gen.vercel.app/

    <img src=".\Readme assets\Screenshot 2022-01-26 at 13-02-36 TestimonialGen.png"/>

- ### Step 2: 
  - Click on create now:

  - Fill the form.
  <img src=".\Readme assets\Screenshot 2022-01-26 at 13-04-42 Form.png"/>

- ### Step 3:

  - Click Generate and **done**.

<img src=".\Readme assets\Screenshot 2022-01-26 at 13-05-45 https testimonial-gen vercel app.png"/>


## Approach

Creating dynamic templates in html/css/js is easy but you can't download it as an image or treat them like the same. I wanted something that can be used for creating graphics and can be treated as an image so the user can be able to download it once the image generation is done. 

- **So how I did it and what I used?** 

  - While reading [Eloquent Javascript](https://eloquentjavascript.net/) I go to know about a graphic web API (in-browser features that provide some extra functionalities are sometimes referred as APIs)  [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).

    ```html
    <canvas id="canvas"></canvas>
    ```

  - The **Canvas API** provides a means for drawing graphics via [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and the [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) element. Among other things, it can be used for animation, game  graphics, data visualization, photo manipulation, and real-time video  processing. (credit: [MDN web docs](https://developer.mozilla.org/en-US/))

  - Using this Canvas API and React context API for state management I rendered all the info - gathered from the form the user filled - onto the image rendered on a canvas component, **And Done!! dynamically generated graphic Achieved!** 👍.
----

> **There you go, your testimony is generate in matter of seconds isn't it great?
If you liked it do give a star✨, it cheers me up. 😃** 
