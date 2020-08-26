const organizations = require('../../_data/organizations.json');
const siteData = require('../../_data/site.json');

/**
 * Filter date output to follow pattern MMMM D, YYYY
 *
 * @param  {object}   dateValue  Date object
 *
 * @return {string}   Formatted date string.
 */
const fullDate = (dateValue) => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const newDate = new Date(dateValue);

  return `${monthNames[newDate.getMonth()]} ${newDate.getDate()}, ${newDate.getFullYear()}`;
};

/**
 * Provide template for meeting details.
 *
 * @param  {string}   meetDate   The meet date
 * @param  {string}   venue      The venue
 * @param  {string}   after      The after party gathering place
 * @param  {string}   msgHeader  The message header (optional)
 * @param  {string}   meetTitle  The meet title (optional)
 * @param  {string}   meetUrl    The meet url (optional)
 *
 * @return {string}  Completed template
 */
module.exports = function meetupDetails(meetDate, venue, after, msgHeader, meetTitle, meetUrl) {
  const header = msgHeader || 'Meetup details';

  const svgBlock = `<svg display="none">
    <g id="alarm"><path d='M153.59,110.46A21.41,21.41,0,0,0,152.48,79h0A62.67,62.67,0,0,0,112,64l-3.27.09-.48,0C74.4,66.15,48,95.55,48.07,131c0,19,8,29.06,14.32,37.11a20.61,20.61,0,0,0,14.7,7.8c.26,0,.7.05,2,.05a19.06,19.06,0,0,0,13.75-5.89Z'/><path d='M403.79,64.11l-3.27-.1H400a62.67,62.67,0,0,0-40.52,15,21.41,21.41,0,0,0-1.11,31.44l60.77,59.65A19.06,19.06,0,0,0,432.93,176c1.28,0,1.72,0,2-.05a20.61,20.61,0,0,0,14.69-7.8c6.36-8.05,14.28-18.08,14.32-37.11C464,95.55,437.6,66.15,403.79,64.11Z'/><path d='M256.07,96c-97,0-176,78.95-176,176a175.23,175.23,0,0,0,40.81,112.56L84.76,420.69a16,16,0,1,0,22.63,22.62l36.12-36.12a175.63,175.63,0,0,0,225.12,0l36.13,36.12a16,16,0,1,0,22.63-22.62l-36.13-36.13A175.17,175.17,0,0,0,432.07,272C432.07,175,353.12,96,256.07,96Zm16,176a16,16,0,0,1-16,16h-80a16,16,0,0,1,0-32h64V160a16,16,0,0,1,32,0Z'/></g>
    <g id="calendar"><path d='M416,64H400V48.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,368,48V64H144V48.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,112,48V64H96a64,64,0,0,0-64,64V416a64,64,0,0,0,64,64H416a64,64,0,0,0,64-64V128A64,64,0,0,0,416,64ZM136,416a24,24,0,1,1,24-24A24,24,0,0,1,136,416Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,136,336Zm80,80a24,24,0,1,1,24-24A24,24,0,0,1,216,416Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,216,336Zm80,80a24,24,0,1,1,24-24A24,24,0,0,1,296,416Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,296,336Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,296,256Zm80,80a24,24,0,1,1,24-24A24,24,0,0,1,376,336Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,376,256Zm72-120v16a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V128A32.09,32.09,0,0,1,96,96H416a32.09,32.09,0,0,1,32,32Z'/></g>
    <g id="location-sharp"><path d='M256,32C167.67,32,96,96.51,96,176c0,128,160,304,160,304S416,304,416,176C416,96.51,344.33,32,256,32Zm0,224a64,64,0,1,1,64-64A64.07,64.07,0,0,1,256,256Z'/></g>
  </svg>`;

  const meetHeaderBlock = meetTitle && meetUrl
    ? `<div class="title is-size-4">
        <a href="${meetUrl}">${meetTitle}</a>
      </div>`
    : '';

  const venueOrg = venue
    ? organizations[venue]
    : {};
  const venueLocation = venueOrg.location
    ? `<em>(${venueOrg.location})</em>`
    : '';

  const afterOrg = organizations[after];
  let afterBlock = '';

  if (afterOrg) {
    const afterName = afterOrg.url
      ? `<a href="${afterOrg.url}">${afterOrg.name}</a>`
      : afterOrg.name;

    afterBlock = `<p class="has-margin-top">
      Afterwards, the discussion carries on at
      <strong>${afterName}</strong>
      (${afterOrg.location}).
    </p>`;
  }

  return `<div class="message flex-item flex-item-0">
  ${svgBlock}
  <div class="message-header">
    ${header}
  </div>

  <div class="message-body">
    ${meetHeaderBlock}

    <div>
      DATE
      <span class="icon has-text-grey-dark">
        <svg class="icon-item" viewBox="0 0 512 512"><use xlink:href="#calendar"></use></svg>
      </span>
      <time class="has-text-primary has-text-weight-bold" dateTime="${meetDate.toISOString().substring(0, 10)}">${fullDate(meetDate)}</time>
    </div>

    <div>
      TIME
      <span class="icon has-text-grey-dark">
        <svg class="icon-item" viewBox="0 0 512 512"><use xlink:href="#alarm"></use></svg>
      </span>
      <time class="has-text-primary has-text-weight-bold" dateTime="15:30">7:30PM</time> -
      <time class="has-text-primary has-text-weight-bold" dateTime="21:00">9:00PM</time>
    </div>

    <div>
      LOCATION
      <span class="icon has-text-grey-dark">
        <svg class="icon-item" viewBox="0 0 512 512"><use xlink:href="#location-sharp"></use></svg>
      </span>
      <strong class="has-text-primary">${venueOrg.name}</strong>
      ${venueLocation}
    </div>

    ${afterBlock}

    <p class="has-margin-top">
      Check back here or <a href="https://twitter.com/${siteData.author.twitter}">@${siteData.author.twitter} on Twitter</a> for updates.
    </p>
  </div>
</div>`;
};
