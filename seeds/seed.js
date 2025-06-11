const fs = require('fs');
const path = require('path');
const sequelize = require('../config/connection');
const { User, JobPost, Events } = require('../models');

const userData = require('./userData.json');
const jobData = require('./jobData.json');
const eventsData = require('./eventsData.json');

const seedDatabase = async () => {
  console.log('Connecting to DB...');
  await sequelize.authenticate();

  console.log('Connected successfully.');

  console.log('Syncing models...');
  await sequelize.sync({ force: true });
  console.log('Models synced.');

  const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

  for (const job of jobData) {
      await JobPost.create({ ...job });
    }

  for (const event of eventsData) {
      await Events.create({ ...event });
    }

  process.exit(0);
};

seedDatabase();
