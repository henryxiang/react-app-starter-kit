import React from 'react';
import { APP_NAME } from '../constants';
import lightBulb from '../media/light-bulb.jpg';

export default () => (
  <div className="container-fluid bg-light">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="/#">{APP_NAME}</a>
      </li>
      <li className="breadcrumb-item active">Information</li>
    </ol>
    <div className="container">
      <img src={lightBulb} alt="light bulb" width="35%" align="left" style={{ marginRight: '10px' }} />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore ipsa corporis harum enim, cupiditate, 
        tempora iure dolorem aliquid aut unde quaerat, sit consequuntur qui vero sapiente! Debitis illum 
        distinctio ipsum voluptas obcaecati perspiciatis, adipisci in, magni quo voluptate officia consectetur 
        maxime laboriosam autem. Illum, vitae? Quibusdam ex nemo tenetur veniam dignissimos porro obcaecati 
        cupiditate suscipit non aliquid exercitationem harum autem ipsum delectus earum repudiandae aspernatur, 
        reprehenderit possimus mollitia! Molestias dignissimos aspernatur earum architecto blanditiis fugit 
        praesentium dolor necessitatibus quo dolorem, iste qui voluptates repellat, numquam id alias facilis ex? 
        Molestias, pariatur? Quidem adipisci hic nostrum quia? Facere nihil labore qui voluptates, fuga 
        repudiandae nesciunt hic, quos, sunt nobis odio sit placeat necessitatibus sequi laboriosam. Minima, 
        quaerat omnis asperiores quisquam, fuga esse totam distinctio iure ratione explicabo architecto mollitia 
        quam nostrum quo porro laudantium, dolore dignissimos debitis et autem quasi sapiente? Dolorem magni 
        libero placeat architecto earum harum repudiandae voluptatem, omnis beatae veniam dolore quaerat 
        provident voluptas corrupti aspernatur eaque saepe cum commodi nostrum id nemo reprehenderit eum? 
        Quis, at minima beatae porro debitis nemo earum neque, velit magni dolorum quos quibusdam impedit 
        incidunt nobis commodi hic eveniet! Quisquam velit minus commodi eos officia nihil, facilis expedita, 
        accusamus a cum at unde quas tempore perferendis quasi voluptas dolor impedit. Ab quis, consectetur 
        iure officia, molestiae ad tempora deserunt earum debitis doloribus, soluta praesentium maxime? 
        Officiis consectetur voluptates fuga nobis perspiciatis minima laudantium asperiores facere minus id? 
        Maiores pariatur illum facere tenetur molestiae nulla unde neque, rem eligendi suscipit doloremque, 
        earum optio?
      </p>
    </div>
  </div>
)