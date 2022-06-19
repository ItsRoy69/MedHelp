 
  var male = $(".male");
  var female = $(".female");
  var gender = "";
  var age = "";
  var goal = "";
  
  jQuery(function ($) {
    $(male).on("click", function () {
      $("#t-carousel").css({ transform: "translateY(-100%)" });
      gender = male.val();
    });
  });
  
  jQuery(function ($) {
    $(female).on("click", function () {
      $("#t-carousel").css({ transform: "translateY(-100%)" });
      gender = female.val();
    });
  });
  
  jQuery(function ($) {
    $(document).on("change", 'input:radio[id^="option"]', function () {
      $("#t-carousel").css({ transform: "translateY(-200%)" });
      age = $('input:radio[id^="option"]:checked').val();
    });
  });
  
  jQuery(function ($) {
    $(document).on("change", 'input:radio[id^="gop"]', function () {
      $("#t-carousel").css({ transform: "translateY(-300%)" });
      goal = $('input:radio[id^="gop"]:checked').val();
    });
  });
  
  jQuery(function ($) {
    $(document).on("click", ".submit", function () {
      $("#t-carousel").css({ transform: "translateY(-400%)" });
  
      $("#ques").css({ overflowY: "scroll" });
      if (gender == "female" && age == "age1" && goal == "goal2") {
        $(".ex1").text(
          "Running is just about the simplest form of exercise there is, and it's perfect for your seemingly endless energy and need for speed. You can run outdoors or indoors. Anywhere between 10 to 20 minutes a day is sufficient to reach your goal!!"
        );
        $;
      } else if (gender == "female" && age == "age1" && goal == "goal3") {
        $(".ex1").text(
          "Running is just about the simplest form of exercise there is, and it's perfect for your seemingly endless energy and need for speed. You can run outdoors or indoors. Anywhere between 5 to 10 minutes a day is sufficient to reach your goal!!"
        );
        $(".ftip1").text(
          "Add butter or oil to food. For example, at breakfast, spread a generous amount of butter or margarine on bagels, toast, English muffins, or an egg sandwich. At lunch and dinner, use butter/margarine when cooking."
        );
        $(".ftip2").text(
          "Use whole fat dairy products such as whole milk, full fat or regular cheese and yogurt, instead of skim, reduced fat, or low fat dairy products. For example, suggest that your teen put whole milk on his or her cereal or oatmeal at breakfast. At lunch, suggest using regular, full-fat cheese  in an omelet or on a sandwich or burger."
        );
        $(".ftip3").text(
          "Use heart healthy oils such as olive oil or canola oil, and add nuts or nut butters when preparing and cooking food. Experiment by adding almonds, walnuts or cashews to salads or a stir-fry, trail mix, or cottage cheese. "
        );
        $(".ftip4").text(
          "You may also wonder how much food to offer your teen at meals and snacks. Paying attention to portions can be helpful for weight gain. First, think about how much your teen eats for most of his or her meals and snacks. Slowly try to increase the overall volume of food at each meal, starting with one meal. "
        );
      } else if (gender == "male" && age == "age1" && goal == "goal1") {
        $(".exi1").attr("src", "./assets/img/run-boy.svg");
      } else if (gender == "male" && age == "age1" && goal == "goal2") {
        $(".exi1").attr("src", "./assets/img/run-boy.svg");
        $(".ex1").text(
          "Running is just about the simplest form of exercise there is, and it's perfect for your seemingly endless energy and need for speed. You can run outdoors or indoors. Anywhere between 10 to 20 minutes a day is sufficient to reach your goal!!"
        );
      } else if (gender == "male" && age == "age1" && goal == "goal3") {
        $(".exi1").attr("src", "./assets/img/run-boy.svg");
        $(".ex1").text(
          "Running is just about the simplest form of exercise there is, and it's perfect for your seemingly endless energy and need for speed. You can run outdoors or indoors. Anywhere between 5 to 10 minutes a day is sufficient to reach your goal!!"
        );
        $(".ftip1").text(
          "Add butter or oil to food. For example, at breakfast, spread a generous amount of butter or margarine on bagels, toast, English muffins, or an egg sandwich. At lunch and dinner, use butter/margarine when cooking."
        );
        $(".ftip2").text(
          "Use whole fat dairy products such as whole milk, full fat or regular cheese and yogurt, instead of skim, reduced fat, or low fat dairy products. For example, suggest that your teen put whole milk on his or her cereal or oatmeal at breakfast. At lunch, suggest using regular, full-fat cheese  in an omelet or on a sandwich or burger."
        );
        $(".ftip3").text(
          "Use heart healthy oils such as olive oil or canola oil, and add nuts or nut butters when preparing and cooking food. Experiment by adding almonds, walnuts or cashews to salads or a stir-fry, trail mix, or cottage cheese. "
        );
        $(".ftip4").text(
          "You may also wonder how much food to offer your teen at meals and snacks. Paying attention to portions can be helpful for weight gain. First, think about how much your teen eats for most of his or her meals and snacks. Slowly try to increase the overall volume of food at each meal, starting with one meal. "
        );
      }
      if (gender == "female" && age == "age2" && goal == "goal1") {
        $(".exh1").text("Squats");
        $(".ex1").text(
          "There are many variations in squatting exercise. Do the basic one to start with. Keep shoulders and chest up with back straight and feet wider apart (as of the shoulder width). Take your hips back and then bend your knees and sit as if you are sitting on chair. Slowly come back to the original position and repeat. Ensure to look straight while squatting. Do it in a controlled manner. If your back or knew starts hurting, you are not doing it properly! Take a rest and then start a fresh. Do only fewer sets of 2 to 3 with only 8 or 10 reps."
        );
        $(".exi1").attr("src", "./assets/img/squat.png");
        $(".exh2").text("Plank");
        $(".ex2").text(
          "Plank exercise puts your entire body on work. It’s most vital for abdominals. Get down on the floor on your elbows and toes. Elbows should bent and directly below your shoulders. Keep the body straight while holding on to the position."
        );
        $(".exi2").attr("src", "./assets/img/planks.png");
        $(".prod").text(
          "Productivity expert Tony Wong advises, “Use your morning to focus on yourself… Start your day out right by ignoring your emails in the morning and getting in a good breakfast, reading the news, meditating, or working out. This will ensure you’ve got the necessary fuel for a productive day.” The point is, do your most demanding tasks in your personal peak productivity time, whenever that is."
        );
      } else if (gender == "female" && age == "age2" && goal == "goal2") {
        $(".exh1").text("Jumping Jacks");
        $(".ex1").text(
          "Jumping jack gives flexibility and help you increase the stamina. Keep your feet together and stand tall and keeping hands straight at your sides. While jumping, raise your arms above your head and feet’s apart to the sides. Quickly reverse and come back to standing position with a jump. A one or two minute jumping jack exercises can loosen your muscles with more flow of oxygen into the bloodstream."
        );
        $(".exi1").attr("src", "./assets/img/jumpjack.png");
        $(".exh2").text("Leg Raise ");
        $(".ex2").text(
          "Leg raise exercises are one of the best for abdominal areas. You just need to lie on your back, place your hands beside you, palms down. Raise your legs off the ground keeping your knees locked. Hold on to the position as long as you comfortably can and then slowly come back to original position."
        );
        $(".exi2").attr("src", "./assets/img/leg.png");
        $(".prod").text(
          "Productivity expert Tony Wong advises, “Use your morning to focus on yourself… Start your day out right by ignoring your emails in the morning and getting in a good breakfast, reading the news, meditating, or working out. This will ensure you’ve got the necessary fuel for a productive day.” The point is, do your most demanding tasks in your personal peak productivity time, whenever that is."
        );
      } else if (gender == "female" && age == "age2" && goal == "goal3") {
        $(".exh1").text("Deadlift");
        $(".ex1").text(
          "This exercise improves your entire lower body along with the core, and there are so many variations that you can do. They are amazing for your glutes, especially your hamstrings. You can do this by using kettlebells, barbells, dumbbells, and even with a resistance band."
        );
        $(".exi1").attr("src", "./assets/img/deadlift.png");
        $(".exh2").text("Incline Dumbbell Press");
        $(".ex2").text(
          "The Incline Dumbbell Bench Press targets the shoulder, arms, and especially the upper part of the chest. With the dumbbells, you can specifically focus on the muscles you want; because the dumbbells allow a full range of motion."
        );
        $(".exi2").attr("src", "./assets/img/incline.png");
        $(".ftip1").text(
          "Add butter or oil to food. For example, at breakfast, spread a generous amount of butter or margarine on bagels, toast, English muffins, or an egg sandwich. At lunch and dinner, use butter/margarine when cooking."
        );
        $(".ftip2").text(
          "Use whole fat dairy products such as whole milk, full fat or regular cheese and yogurt, instead of skim, reduced fat, or low fat dairy products. For example, suggest that your teen put whole milk on his or her cereal or oatmeal at breakfast. At lunch, suggest using regular, full-fat cheese  in an omelet or on a sandwich or burger."
        );
        $(".ftip3").text(
          "Use heart healthy oils such as olive oil or canola oil, and add nuts or nut butters when preparing and cooking food. Experiment by adding almonds, walnuts or cashews to salads or a stir-fry, trail mix, or cottage cheese. "
        );
        $(".ftip4").text(
          "You may also wonder how much food to offer your teen at meals and snacks. Paying attention to portions can be helpful for weight gain. First, think about how much your teen eats for most of his or her meals and snacks. Slowly try to increase the overall volume of food at each meal, starting with one meal. "
        );
        $(".prod").text(
          "Productivity expert Tony Wong advises, “Use your morning to focus on yourself… Start your day out right by ignoring your emails in the morning and getting in a good breakfast, reading the news, meditating, or working out. This will ensure you’ve got the necessary fuel for a productive day.” The point is, do your most demanding tasks in your personal peak productivity time, whenever that is."
        );
      } else if (gender == "male" && age == "age2" && goal == "goal1") {
        $(".exh1").text("Cross Crunches");
        $(".ex1").text(
          " Lie flat on your back. Bend your knees with feet flat on the floor. Place both the hands loosely behind your head. Now, bring your right shoulder and elbow across your body and at the same time bring up your left knee towards your left shoulder. Try to touch your knee with elbow. Go back to the original position and repeat the same with the left elbow."
        );        $(".exi1").attr("src", "./assets/img/crunch.png");
        $(".exh2").text("Push-ups");
        $(".ex2").text(
          "Get down on the ground setting your hands shoulder-width apart. Ensure your body forms a straight line. Begin to lower your body keeping elbows close to your body. Push back to starting high plank position."
        );
        $(".exi2").attr("src", "./assets/img/pushup.png");
        $(".prod").text(
          "Productivity expert Tony Wong advises, “Use your morning to focus on yourself… Start your day out right by ignoring your emails in the morning and getting in a good breakfast, reading the news, meditating, or working out. This will ensure you’ve got the necessary fuel for a productive day.” The point is, do your most demanding tasks in your personal peak productivity time, whenever that is."
        );
      } else if (gender == "male" && age == "age2" && goal == "goal2") {
        $(".exh1").text("Lunges");
        $(".ex1").text(
          " Lower your hip until both keens bent in 90 degree angle. Step forward with one leg while keeping your upper body straight and relaxed. Come back to original position keeping the weight in your heels."
        );
        $(".exi1").attr("src", "./assets/img/lunges.png");
        $(".exh2").text(" Side Plank");
        $(".ex2").text(
          "Start on your side with feet together while keeping forearm below your shoulder. Now slowly raise your hip until your body form straight line from head to feet. Hold on to the position and repeat on the other side too!"
        );
        $(".exi2").attr("src", "./assets/img/side.png");
        $(".prod").text(
          "Productivity expert Tony Wong advises, “Use your morning to focus on yourself… Start your day out right by ignoring your emails in the morning and getting in a good breakfast, reading the news, meditating, or working out. This will ensure you’ve got the necessary fuel for a productive day.” The point is, do your most demanding tasks in your personal peak productivity time, whenever that is."
        );
      } else if (gender == "male" && age == "age2" && goal == "goal3") {
        $(".exh1").text("Bench Dips ");
        $(".ex1").text(
          "Bench Dips are simple yet useful exercises to gain body weight.  This exercise mainly targets the triceps but it also focuses on your chest and the front part of your shoulder."
        );
        $(".exi1").attr("src", "./assets/img/bench.png");
        $(".exh2").text("Pull-Ups ");
        $(".ex2").text(
          "Pull-ups are one the most effective exercises for gaining weight. Pull-ups help in getting chiseled shoulders and ripped arms. Pull-ups focus on your biceps and latissimus dorsi primarily. Pull-up is a high resistance exercise that builds more muscles. More muscles mean more bodyweight."
        );
        $(".exi2").attr("src", "./assets/img/pullup.png");
        $(".ftip1").text(
          "Add butter or oil to food. For example, at breakfast, spread a generous amount of butter or margarine on bagels, toast, English muffins, or an egg sandwich. At lunch and dinner, use butter/margarine when cooking."
        );
        $(".ftip2").text(
          "Use whole fat dairy products such as whole milk, full fat or regular cheese and yogurt, instead of skim, reduced fat, or low fat dairy products. For example, suggest that your teen put whole milk on his or her cereal or oatmeal at breakfast. At lunch, suggest using regular, full-fat cheese  in an omelet or on a sandwich or burger."
        );
        $(".ftip3").text(
          "Use heart healthy oils such as olive oil or canola oil, and add nuts or nut butters when preparing and cooking food. Experiment by adding almonds, walnuts or cashews to salads or a stir-fry, trail mix, or cottage cheese. "
        );
        $(".ftip4").text(
          "You may also wonder how much food to offer your teen at meals and snacks. Paying attention to portions can be helpful for weight gain. First, think about how much your teen eats for most of his or her meals and snacks. Slowly try to increase the overall volume of food at each meal, starting with one meal. "
        );
        $(".prod").text(
          "Productivity expert Tony Wong advises, “Use your morning to focus on yourself… Start your day out right by ignoring your emails in the morning and getting in a good breakfast, reading the news, meditating, or working out. This will ensure you’ve got the necessary fuel for a productive day.” The point is, do your most demanding tasks in your personal peak productivity time, whenever that is."
        );
      }
      if (gender == "female" && age == "age3" && goal == "goal1") {
        $(".exh1").text("Chair yoga");
        $(".ex1").text(
          "Chair yoga is a low-impact form of exercise that improves muscle strength, mobility, balance and flexibility, all of which are crucial health aspects for seniors. Chair yoga is an accessible form of yoga that provides less stress on muscles, joints, and bones than more conventional forms of yoga. As an added bonus, chair yoga has been shown to improve mental health in older adults. Regular chair yoga participants have better quality sleep, lower instances of depression, and report a general sense of well-being."
        );
        $(".exi1").attr("src", "./assets/img/cyoga.png");
        $(".exh2").text("Resistance band workouts");
        $(".ex2").text(
          "Resistance bands are stretchy strips of rubber that add resistance to workouts with reduced stress on your body. Resistance band workouts are user-friendly, and accessible for beginners. This form of exercise is growing more popular among seniors because of the relatively cheap up-front costs of materials, which makes resistance band workouts ideal for at-home exercise. Additionally, these exercises are ideal for strengthening your core, which improves posture, mobility, and balance."
        );
        $(".exi2").attr("src", "./assets/img/resist.png");
        $(".prod").text(
          "Productivity expert Tony Wong advises, “Use your morning to focus on yourself… Start your day out right by ignoring your emails in the morning and getting in a good breakfast, reading the news, meditating, or working out. This will ensure you’ve got the necessary fuel for a productive day.” The point is, do your most demanding tasks in your personal peak productivity time, whenever that is."
        );
      } else if (gender == "female" && age == "age3" && goal == "goal2") {
        $(".exh1").text("Walking");
        $(".ex1").text(
          "One of the least stressful and accessible forms of exercise is walking. For some seniors, walking is a bigger challenge than others, so distance and step goals differ from person to person. For the general population, 10,000 steps per day is advised for a healthy lifestyle, but those with difficulty walking or joint pain may settle for a smaller number as a goal."
        );
        $(".exi1").attr("src", "./assets/img/walking.png");
        $(".exh2").text("Resistance band workouts");
        $(".ex2").text(
          "Resistance bands are stretchy strips of rubber that add resistance to workouts with reduced stress on your body. Resistance band workouts are user-friendly, and accessible for beginners. This form of exercise is growing more popular among seniors because of the relatively cheap up-front costs of materials, which makes resistance band workouts ideal for at-home exercise. Additionally, these exercises are ideal for strengthening your core, which improves posture, mobility, and balance."
        );
        $(".exi2").attr("src", "./assets/img/resist.png");
        $(".prod").text(
          "Productivity expert Tony Wong advises, “Use your morning to focus on yourself… Start your day out right by ignoring your emails in the morning and getting in a good breakfast, reading the news, meditating, or working out. This will ensure you’ve got the necessary fuel for a productive day.” The point is, do your most demanding tasks in your personal peak productivity time, whenever that is."
        );
      } else if (gender == "female" && age == "age3" && goal == "goal3") {
        $(".exh1").text("Walking");
        $(".ex1").text(
          "One of the least stressful and accessible forms of exercise is walking. For some seniors, walking is a bigger challenge than others, so distance and step goals differ from person to person. For the general population, 10,000 steps per day is advised for a healthy lifestyle, but those with difficulty walking or joint pain may settle for a smaller number as a goal."
        );
        $(".exi1").attr("src", "./assets/img/walking.png");
        $(".exh2").text("Resistance band workouts");
        $(".ex2").text(
          "Resistance bands are stretchy strips of rubber that add resistance to workouts with reduced stress on your body. Resistance band workouts are user-friendly, and accessible for beginners. This form of exercise is growing more popular among seniors because of the relatively cheap up-front costs of materials, which makes resistance band workouts ideal for at-home exercise. Additionally, these exercises are ideal for strengthening your core, which improves posture, mobility, and balance."
        );
        $(".exi2").attr("src", "./assets/img/resist.png");
        $(".ftip1").text(
          "Eat plenty of high-quality lean protein with meals and snacks. Organic, grass-fed, full-fat cottage cheese is light but packs in the protein, and can be added as a side to meals or as part of a snack."
        );
        $(".ftip2").text(
          "Foods high in calories and fat are the best food options to help seniors gain weight. Avocados, full-fat dairy, and nuts are great foods that can add calories and help with weight gain. "
        );
        $(".ftip3").text(
          "Be sure to include a good source of protein and healthy fat at meals.  Liquids should be consumed sparingly with meals to prevent false feelings of fullness."
        );
        $(".ftip4").text(
          "The best food options to help seniors gain weight are your high-calorie foods such as healthy fats found in avocados, nuts, seeds, cold-pressed oils. Additionally, increasing calories by adding extra lean protein, additional portions of whole grains, or dairy products."
        );
        $(".prod").text(
          "Productivity expert Tony Wong advises, “Use your morning to focus on yourself… Start your day out right by ignoring your emails in the morning and getting in a good breakfast, reading the news, meditating, or working out. This will ensure you’ve got the necessary fuel for a productive day.” The point is, do your most demanding tasks in your personal peak productivity time, whenever that is."
        );
      } else if (gender == "male" && age == "age3" && goal == "goal1") {
        $(".exh1").text("Chair yoga");
        $(".ex1").text(
          "Chair yoga is a low-impact form of exercise that improves muscle strength, mobility, balance and flexibility, all of which are crucial health aspects for seniors. Chair yoga is an accessible form of yoga that provides less stress on muscles, joints, and bones than more conventional forms of yoga. As an added bonus, chair yoga has been shown to improve mental health in older adults. Regular chair yoga participants have better quality sleep, lower instances of depression, and report a general sense of well-being."
        );
        $(".exi1").attr("src", "./assets/img/myoga.png");
        $(".exh2").text("Resistance band workouts");
        $(".ex2").text(
          "Resistance bands are stretchy strips of rubber that add resistance to workouts with reduced stress on your body. Resistance band workouts are user-friendly, and accessible for beginners. This form of exercise is growing more popular among seniors because of the relatively cheap up-front costs of materials, which makes resistance band workouts ideal for at-home exercise. Additionally, these exercises are ideal for strengthening your core, which improves posture, mobility, and balance."
        );
        $(".exi2").attr("src", "./assets/img/mresist.png");
        $(".prod").text(
          "Productivity expert Tony Wong advises, “Use your morning to focus on yourself… Start your day out right by ignoring your emails in the morning and getting in a good breakfast, reading the news, meditating, or working out. This will ensure you’ve got the necessary fuel for a productive day.” The point is, do your most demanding tasks in your personal peak productivity time, whenever that is."
        );
      } else if (gender == "male" && age == "age3" && goal == "goal2") {
        $(".exh1").text("Walking");
        $(".ex1").text(
          "One of the least stressful and accessible forms of exercise is walking. For some seniors, walking is a bigger challenge than others, so distance and step goals differ from person to person. For the general population, 10,000 steps per day is advised for a healthy lifestyle, but those with difficulty walking or joint pain may settle for a smaller number as a goal."
        );
        $(".exi1").attr("src", "./assets/img/mwalking.png");
        $(".exh2").text("Resistance band workouts");
        $(".ex2").text(
          "Resistance bands are stretchy strips of rubber that add resistance to workouts with reduced stress on your body. Resistance band workouts are user-friendly, and accessible for beginners. This form of exercise is growing more popular among seniors because of the relatively cheap up-front costs of materials, which makes resistance band workouts ideal for at-home exercise. Additionally, these exercises are ideal for strengthening your core, which improves posture, mobility, and balance."
        );
        $(".exi2").attr("src", "./assets/img/mresist.png");
        $(".prod").text(
          "Productivity expert Tony Wong advises, “Use your morning to focus on yourself… Start your day out right by ignoring your emails in the morning and getting in a good breakfast, reading the news, meditating, or working out. This will ensure you’ve got the necessary fuel for a productive day.” The point is, do your most demanding tasks in your personal peak productivity time, whenever that is."
        );
      } else if (gender == "male" && age == "age3" && goal == "goal3") {
        $(".exh1").text("Walking");
        $(".ex1").text(
          "One of the least stressful and accessible forms of exercise is walking. For some seniors, walking is a bigger challenge than others, so distance and step goals differ from person to person. For the general population, 10,000 steps per day is advised for a healthy lifestyle, but those with difficulty walking or joint pain may settle for a smaller number as a goal."
        );
        $(".exi1").attr("src", "./assets/img/mwalking.png");
        $(".exh2").text("Resistance band workouts");
        $(".ex2").text(
          "Resistance bands are stretchy strips of rubber that add resistance to workouts with reduced stress on your body. Resistance band workouts are user-friendly, and accessible for beginners. This form of exercise is growing more popular among seniors because of the relatively cheap up-front costs of materials, which makes resistance band workouts ideal for at-home exercise. Additionally, these exercises are ideal for strengthening your core, which improves posture, mobility, and balance."
        );
        $(".exi2").attr("src", "./assets/img/mresist.png");
        $(".ftip1").text(
          "Eat plenty of high-quality lean protein with meals and snacks. Organic, grass-fed, full-fat cottage cheese is light but packs in the protein, and can be added as a side to meals or as part of a snack."
        );
        $(".ftip2").text(
          "Foods high in calories and fat are the best food options to help seniors gain weight. Avocados, full-fat dairy, and nuts are great foods that can add calories and help with weight gain. "
        );
        $(".ftip3").text(
          "Be sure to include a good source of protein and healthy fat at meals.  Liquids should be consumed sparingly with meals to prevent false feelings of fullness."
        );
        $(".ftip4").text(
          "The best food options to help seniors gain weight are your high-calorie foods such as healthy fats found in avocados, nuts, seeds, cold-pressed oils. Additionally, increasing calories by adding extra lean protein, additional portions of whole grains, or dairy products."
        );
        $(".prod").text(
          "Productivity expert Tony Wong advises, “Use your morning to focus on yourself… Start your day out right by ignoring your emails in the morning and getting in a good breakfast, reading the news, meditating, or working out. This will ensure you’ve got the necessary fuel for a productive day.” The point is, do your most demanding tasks in your personal peak productivity time, whenever that is."
        );
      }
    });
  });
  
  $("#reload").click(function () {
    location.reload();
  });
  
