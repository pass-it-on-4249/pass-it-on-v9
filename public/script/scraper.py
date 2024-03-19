import os
import requests
import json
from bs4 import BeautifulSoup
from urllib.parse import urljoin

def scrape_items(url_list, image_folder, csv_filename):

    scraped_data_all_urls = []
    for url in url_list:
        response = requests.get(url)

        soup = BeautifulSoup(response.content, 'html.parser')

        # Find the table containing the items
        table = soup.find('table', class_='tbl_form1')

        scraped_data = []

        if not os.path.exists(image_folder):
            os.makedirs(image_folder)

        # Find all even and odd rows, which represent items
        even_rows = table.find_all('tr', class_='lineEven')
        odd_rows = table.find_all('tr', class_='lineOdd')

        all_rows = even_rows + odd_rows

        for row in all_rows:
            # Extract data for each item
            cells = row.find_all('td')

            item_id = cells[0].text.strip()
            title = cells[1].find('b').text.strip()
            description = cells[1].find('div', class_='item_desc').text.strip()
            location = cells[2].find('b').text.strip()
            locations = [loc.strip() for loc in location.split(',')]
            delivery = False
            if (len(locations) >= 1 and locations[0] != ""):
                delivery = True
            #image_links = [urljoin("https://www.passiton.org.sg", a['href']) for a in cells[3].find_all('a')]
            #validity_info = cells[4].text.strip()

            # Store the scraped data
            item_data = {
                'id': item_id,
                'image': "script/scraped_data/" + item_id + "_0.jpg",
                'title': title,
                'description': description,
                'location': locations,
                'delivery': delivery
                #'image_links': image_links
                #'validity_info': validity_info
            }

            # for idx, image_link in enumerate(image_links):
            #     image_response = requests.get(image_link)
            #     image_soup = BeautifulSoup(image_response.content, 'html.parser')
            #     actual_image_link = urljoin("https://www.passiton.org.sg", image_soup.find('img', id='icon_')['src'])
            #     image_filename = f"{item_id}_{idx}.jpg"  # Customize the filename if needed
            #     image_path = os.path.join(image_folder, image_filename)
            #     image_data = requests.get(actual_image_link).content
            #     with open(image_path, 'wb') as image_file:
            #         image_file.write(image_data)
            #         image_file.close()

            scraped_data.append(item_data)

        scraped_data_all_urls.extend(scraped_data)

    # Save the scraped data as a JSON file
    json_path = os.path.join(os.getcwd(), json_filename)
    with open(json_path, 'w', encoding='utf-8') as jsonfile:
        json.dump(scraped_data_all_urls, jsonfile, ensure_ascii=False, indent=4)
    
    return scraped_data_all_urls

url_list = ["https://www.passiton.org.sg/item-list", "https://www.passiton.org.sg/item-list?&pg=2", "https://www.passiton.org.sg/item-list?&pg=3", "https://www.passiton.org.sg/item-list?&pg=4"]
image_folder = 'scraped_images'
json_filename = 'scraped_data.json'
scraped_items = scrape_items(url_list, image_folder, json_filename)
for item in scraped_items:
   print(item)