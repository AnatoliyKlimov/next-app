import React from "react";
import { Button, Htag, Paragraph, Tag, Rating } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='right'> Тоже Кнопка</Button>
      <Paragraph size='s'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nesciunt aliquam provident tenetur itaque debitis saepe mollitia qui. Labore, illo. Earum, magni. Distinctio, nobis eius. Saepe repudiandae culpa neque quasi.</Paragraph>
      <Paragraph size='m'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nesciunt aliquam provident tenetur itaque debitis saepe mollitia qui. Labore, illo. Earum, magni. Distinctio, nobis eius. Saepe repudiandae culpa neque quasi.</Paragraph>
      <Paragraph size='l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nesciunt aliquam provident tenetur itaque debitis saepe mollitia qui. Labore, illo. Earum, magni. Distinctio, nobis eius. Saepe repudiandae culpa neque quasi.</Paragraph>
      <Tag size='m' color='ghost'>Прозрачный</Tag>
      <Tag color='red'>Красный</Tag>
      <Tag size='m' color='primary'>Фиолетовый</Tag>
      <Rating rating={4}/>
    </>
  );
}