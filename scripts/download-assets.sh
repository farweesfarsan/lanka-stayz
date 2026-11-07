#!/usr/bin/env bash
# Figma asset URLs expire after 7 days – run this from the project root right away.
set -e
mkdir -p public/images
dl() { curl -fL "$2" -o "public/images/$1"; }
dl hero.png          "https://www.figma.com/api/mcp/asset/31aedcb4-50dc-4b49-9ceb-6a564703fc3c.png"
dl stay-1.png        "https://www.figma.com/api/mcp/asset/5ac9633d-26a9-40c7-b096-44f2279ef32a.png"
dl stay-2.png        "https://www.figma.com/api/mcp/asset/9407244f-f498-46bc-af09-ee8fda870a0a.png"
dl stay-3.png        "https://www.figma.com/api/mcp/asset/a74b39e1-5ef7-4c5e-9c36-516c6b636810.png"
dl stay-4.png        "https://www.figma.com/api/mcp/asset/c97a1253-a69b-44d0-bc61-81bb19930a67.png"
dl stay-5.png        "https://www.figma.com/api/mcp/asset/179cba30-278b-4c9b-abd8-80f1073d831d.png"
dl stay-6.png        "https://www.figma.com/api/mcp/asset/fa98a8f2-7ec3-43a7-9415-f3610aeaa429.png"
dl dest-galle.png    "https://www.figma.com/api/mcp/asset/da24bc7d-4ddf-4e4a-95b6-22130ad7d9fd.png"
dl dest-ella.png     "https://www.figma.com/api/mcp/asset/0971faf6-24ba-44b1-9697-12c49898b8c6.png"
dl dest-kandy.png    "https://www.figma.com/api/mcp/asset/55af2373-2b6f-440f-b8ac-6dd3bf1b09d5.png"
dl dest-mirissa.png  "https://www.figma.com/api/mcp/asset/fbd64a7a-bc18-4295-856f-1cae9f153533.png"
dl about.png         "https://www.figma.com/api/mcp/asset/24244245-01b4-4c21-9818-48fce01feee6.png"
dl list-1.png        "https://www.figma.com/api/mcp/asset/4ef2a7df-6ff9-4b72-952f-74c4e7f891f9.png"
dl list-2.png        "https://www.figma.com/api/mcp/asset/4f612492-fda4-485d-b5fe-289b10edd4fd.png"
dl list-3.png        "https://www.figma.com/api/mcp/asset/0c263c29-2e69-4bc6-b0fa-9a764a9495f8.png"
dl list-4.png        "https://www.figma.com/api/mcp/asset/c2eec44a-6236-45a8-a99a-be2d3e40329d.png"
dl list-5.png        "https://www.figma.com/api/mcp/asset/1d4f1d55-050b-474b-a812-98c37bbbcd67.png"
dl list-6.png        "https://www.figma.com/api/mcp/asset/b57e5b37-f1c0-46eb-8d8e-30b1266626fc.png"
dl prop-hero.png     "https://www.figma.com/api/mcp/asset/cf36049f-9053-43f8-a466-ab8fa6666d59.png"
dl prop-bedroom.png  "https://www.figma.com/api/mcp/asset/ffd364d7-5085-4dd7-8748-3df4e10718b0.png"
dl prop-pool.png     "https://www.figma.com/api/mcp/asset/ec36866b-6c24-4720-b750-8c2011128286.png"
echo "Done."
