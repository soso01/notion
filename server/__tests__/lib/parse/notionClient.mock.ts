import { NotionAPI } from "notion-client";
import { INotionPage } from "@/types/models";

export const mockNotion = new NotionAPI();
mockNotion.getPage = jest
  .fn()
  .mockImplementation((pageId: string) => notionDB[pageId]);

export const notionDB: { [key in string]: INotionPage } = {
  "ca74dddb-66fe-4c12-81fa-c1c0518ee320": {
    block: {
      "ca74dddb-66fe-4c12-81fa-c1c0518ee320": {
        role: "reader",
        value: {
          id: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
          version: 63,
          type: "page",
          properties: { title: [["테스트"]] },
          content: [
            "70e8d411-eb00-4bbc-8afc-26fcd8e5ed47",
            "dcd2d38f-57f9-473d-9a8a-84af630634c9",
            "10b1ea52-a6bc-4295-895c-f4078b7a4aed",
            "7d98799c-f012-4e32-83fa-ccc38c5f4bfa",
            "db21e8b1-09a0-4273-b74c-ee12690711ab",
            "de7f8570-4af2-4e58-ab2b-d917c932e69f",
            "b9e5eefd-a49e-41ee-852d-7abfad299f83",
            "b0866012-b066-4be9-85c4-5a61270d3814",
            "67406e55-7263-4871-aafe-c73899595840",
            "1fa5b709-cd2e-49ec-8690-ce38605aef85",
            "e8500b91-eef2-4945-afb2-94c8104d2c2d",
            "89ca8ec0-1af1-47e6-8c50-74b3c99f0e1d",
          ],
          format: {
            page_icon: "🖍️",
            page_cover: "/images/page-cover/woodcuts_1.jpg",
            page_cover_position: 0.1,
          },
          permissions: [
            {
              role: "editor",
              type: "user_permission",
              user_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
            },
            {
              role: "reader",
              type: "public_permission",
              added_timestamp: 1640673945641,
            },
          ],
          created_time: 1636536420000,
          last_edited_time: 1640675280000,
          parent_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
          parent_table: "space",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      "70e8d411-eb00-4bbc-8afc-26fcd8e5ed47": {
        role: "reader",
        value: {
          id: "70e8d411-eb00-4bbc-8afc-26fcd8e5ed47",
          version: 25,
          type: "text",
          properties: { title: [["테스트1"]] },
          created_time: 1639816860000,
          last_edited_time: 1639816860000,
          parent_id: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
          parent_table: "block",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      "dcd2d38f-57f9-473d-9a8a-84af630634c9": {
        role: "reader",
        value: {
          id: "dcd2d38f-57f9-473d-9a8a-84af630634c9",
          version: 6,
          type: "text",
          created_time: 1640675220000,
          last_edited_time: 1640675220000,
          parent_id: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
          parent_table: "block",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      "10b1ea52-a6bc-4295-895c-f4078b7a4aed": {
        role: "reader",
        value: {
          id: "10b1ea52-a6bc-4295-895c-f4078b7a4aed",
          version: 10,
          type: "image",
          properties: {
            size: [["32.2KB"]],
            title: [["1.jpeg"]],
            source: [
              [
                "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e4cbe811-0d3b-4293-9892-1b11007c7257/1.jpeg",
              ],
            ],
          },
          format: {
            block_width: 939,
            display_source:
              "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e4cbe811-0d3b-4293-9892-1b11007c7257/1.jpeg",
            block_full_width: false,
            block_page_width: true,
            block_aspect_ratio: 0.9989350372736954,
            block_preserve_scale: true,
          },
          created_time: 1640675237847,
          last_edited_time: 1640675280000,
          parent_id: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
          parent_table: "block",
          alive: true,
          file_ids: ["e4cbe811-0d3b-4293-9892-1b11007c7257"],
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      "7d98799c-f012-4e32-83fa-ccc38c5f4bfa": {
        role: "reader",
        value: {
          id: "7d98799c-f012-4e32-83fa-ccc38c5f4bfa",
          version: 6,
          type: "text",
          created_time: 1640608440000,
          last_edited_time: 1640608440000,
          parent_id: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
          parent_table: "block",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      "db21e8b1-09a0-4273-b74c-ee12690711ab": {
        role: "reader",
        value: {
          id: "db21e8b1-09a0-4273-b74c-ee12690711ab",
          version: 6,
          type: "image",
          properties: {
            source: [
              [
                "https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
              ],
            ],
          },
          format: {
            display_source:
              "https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
          },
          created_time: 1640608464046,
          last_edited_time: 1640608440000,
          parent_id: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
          parent_table: "block",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      "de7f8570-4af2-4e58-ab2b-d917c932e69f": {
        role: "reader",
        value: {
          id: "de7f8570-4af2-4e58-ab2b-d917c932e69f",
          version: 6,
          type: "text",
          created_time: 1639819320000,
          last_edited_time: 1639819320000,
          parent_id: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
          parent_table: "block",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      "b9e5eefd-a49e-41ee-852d-7abfad299f83": {
        role: "reader",
        value: {
          id: "b9e5eefd-a49e-41ee-852d-7abfad299f83",
          version: 17,
          type: "page",
          properties: { title: [["페이지"]] },
          content: ["541bef22-6632-40bb-8cfb-d967c3f71386"],
          created_time: 1639819344390,
          last_edited_time: 1639819320000,
          parent_id: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
          parent_table: "block",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      "b0866012-b066-4be9-85c4-5a61270d3814": {
        role: "reader",
        value: {
          id: "b0866012-b066-4be9-85c4-5a61270d3814",
          version: 6,
          type: "text",
          created_time: 1639816860000,
          last_edited_time: 1639816860000,
          parent_id: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
          parent_table: "block",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      "67406e55-7263-4871-aafe-c73899595840": {
        role: "reader",
        value: {
          id: "67406e55-7263-4871-aafe-c73899595840",
          version: 16,
          type: "text",
          properties: { title: [["2테스트"]] },
          created_time: 1639816860000,
          last_edited_time: 1639816860000,
          parent_id: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
          parent_table: "block",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      "1fa5b709-cd2e-49ec-8690-ce38605aef85": {
        role: "reader",
        value: {
          id: "1fa5b709-cd2e-49ec-8690-ce38605aef85",
          version: 6,
          type: "text",
          created_time: 1639816860000,
          last_edited_time: 1639816860000,
          parent_id: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
          parent_table: "block",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      "e8500b91-eef2-4945-afb2-94c8104d2c2d": {
        role: "reader",
        value: {
          id: "e8500b91-eef2-4945-afb2-94c8104d2c2d",
          version: 3,
          type: "collection_view",
          view_ids: ["b1a73e3d-9d5a-42e1-aee8-8d6a8f006a38"],
          collection_id: "cd54465f-8ae3-4574-908f-bf6447c7713a",
          format: {
            collection_pointer: {
              id: "cd54465f-8ae3-4574-908f-bf6447c7713a",
              table: "collection",
              spaceId: "674b61d7-f03f-4c4a-aa2c-8577800db349",
            },
          },
          created_time: 1639816895526,
          last_edited_time: 1639816860000,
          parent_id: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
          parent_table: "block",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      "89ca8ec0-1af1-47e6-8c50-74b3c99f0e1d": {
        role: "reader",
        value: {
          id: "89ca8ec0-1af1-47e6-8c50-74b3c99f0e1d",
          version: 3,
          type: "text",
          created_time: 1639816860000,
          last_edited_time: 1639816860000,
          parent_id: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
          parent_table: "block",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      "273be2a5-2583-4c00-8925-f344d1103f0e": {
        role: "reader",
        value: {
          id: "273be2a5-2583-4c00-8925-f344d1103f0e",
          version: 2,
          type: "page",
          properties: { title: [["페이지 1"]] },
          created_time: 1639816895527,
          last_edited_time: 1639816860000,
          parent_id: "cd54465f-8ae3-4574-908f-bf6447c7713a",
          parent_table: "collection",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      "3aca7339-6dfc-46ea-849b-f3b6bfc974bb": {
        role: "reader",
        value: {
          id: "3aca7339-6dfc-46ea-849b-f3b6bfc974bb",
          version: 2,
          type: "page",
          properties: { title: [["페이지 2"]] },
          created_time: 1639816895527,
          last_edited_time: 1639816860000,
          parent_id: "cd54465f-8ae3-4574-908f-bf6447c7713a",
          parent_table: "collection",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      "896636bc-3530-420b-ba5a-d83ea3ed6dde": {
        role: "reader",
        value: {
          id: "896636bc-3530-420b-ba5a-d83ea3ed6dde",
          version: 2,
          type: "page",
          properties: { title: [["페이지 3"]] },
          created_time: 1639816895527,
          last_edited_time: 1639816860000,
          parent_id: "cd54465f-8ae3-4574-908f-bf6447c7713a",
          parent_table: "collection",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
    },
    space: {},
    collection_view: {
      "b1a73e3d-9d5a-42e1-aee8-8d6a8f006a38": {
        role: "reader",
        value: {
          id: "b1a73e3d-9d5a-42e1-aee8-8d6a8f006a38",
          version: 1,
          type: "list",
          name: "리스트 보기",
          format: {
            list_properties: [{ visible: true, property: "f<N{" }],
          },
          parent_id: "e8500b91-eef2-4945-afb2-94c8104d2c2d",
          parent_table: "block",
          alive: true,
          page_sort: [
            "273be2a5-2583-4c00-8925-f344d1103f0e",
            "3aca7339-6dfc-46ea-849b-f3b6bfc974bb",
            "896636bc-3530-420b-ba5a-d83ea3ed6dde",
          ],
          query2: { aggregations: [{ aggregator: "count" }] },
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
    },
    collection: {
      "cd54465f-8ae3-4574-908f-bf6447c7713a": {
        role: "reader",
        value: {
          id: "cd54465f-8ae3-4574-908f-bf6447c7713a",
          version: 14,
          name: [["테스트"]],
          schema: {
            "f<N{": { name: "태그", type: "multi_select" },
            "ti<]": { name: "생성일", type: "created_time" },
            title: { name: "이름", type: "title" },
          },
          format: {
            collection_page_properties: [
              { visible: true, property: "ti<]" },
              { visible: true, property: "f<N{" },
            ],
          },
          parent_id: "e8500b91-eef2-4945-afb2-94c8104d2c2d",
          parent_table: "block",
          alive: true,
          migrated: true,
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
    },
    notion_user: {},
    collection_query: {
      "cd54465f-8ae3-4574-908f-bf6447c7713a": {
        "b1a73e3d-9d5a-42e1-aee8-8d6a8f006a38": {
          type: "results",
          blockIds: [
            "273be2a5-2583-4c00-8925-f344d1103f0e",
            "3aca7339-6dfc-46ea-849b-f3b6bfc974bb",
            "896636bc-3530-420b-ba5a-d83ea3ed6dde",
          ],
          hasMore: false,
        },
      },
    },
    signed_urls: {
      "ca74dddb-66fe-4c12-81fa-c1c0518ee320":
        "/images/page-cover/woodcuts_1.jpg",
      "10b1ea52-a6bc-4295-895c-f4078b7a4aed":
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e4cbe811-0d3b-4293-9892-1b11007c7257/1.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211228T072711Z&X-Amz-Expires=86400&X-Amz-Signature=7cdb141fab01bfc27d8e46232b2a729a760bd240ff2d8b794e7a859503d0fb19&X-Amz-SignedHeaders=host&x-id=GetObject",
    },
  },
  "896636bc-3530-420b-ba5a-d83ea3ed6dde": {
    block: {
      "896636bc-3530-420b-ba5a-d83ea3ed6dde": {
        role: "reader",
        value: {
          id: "896636bc-3530-420b-ba5a-d83ea3ed6dde",
          version: 2,
          type: "page",
          properties: { title: [["페이지 3"]] },
          created_time: 1639816895527,
          last_edited_time: 1639816860000,
          parent_id: "cd54465f-8ae3-4574-908f-bf6447c7713a",
          parent_table: "collection",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      "e8500b91-eef2-4945-afb2-94c8104d2c2d": {
        role: "reader",
        value: {
          id: "e8500b91-eef2-4945-afb2-94c8104d2c2d",
          version: 3,
          type: "collection_view",
          view_ids: ["b1a73e3d-9d5a-42e1-aee8-8d6a8f006a38"],
          collection_id: "cd54465f-8ae3-4574-908f-bf6447c7713a",
          format: {
            collection_pointer: {
              id: "cd54465f-8ae3-4574-908f-bf6447c7713a",
              table: "collection",
              spaceId: "674b61d7-f03f-4c4a-aa2c-8577800db349",
            },
          },
          created_time: 1639816895526,
          last_edited_time: 1639816860000,
          parent_id: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
          parent_table: "block",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      "ca74dddb-66fe-4c12-81fa-c1c0518ee320": {
        role: "reader",
        value: {
          id: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
          version: 63,
          type: "page",
          properties: { title: [["테스트"]] },
          content: [
            "70e8d411-eb00-4bbc-8afc-26fcd8e5ed47",
            "dcd2d38f-57f9-473d-9a8a-84af630634c9",
            "10b1ea52-a6bc-4295-895c-f4078b7a4aed",
            "7d98799c-f012-4e32-83fa-ccc38c5f4bfa",
            "db21e8b1-09a0-4273-b74c-ee12690711ab",
            "de7f8570-4af2-4e58-ab2b-d917c932e69f",
            "b9e5eefd-a49e-41ee-852d-7abfad299f83",
            "b0866012-b066-4be9-85c4-5a61270d3814",
            "67406e55-7263-4871-aafe-c73899595840",
            "1fa5b709-cd2e-49ec-8690-ce38605aef85",
            "e8500b91-eef2-4945-afb2-94c8104d2c2d",
            "89ca8ec0-1af1-47e6-8c50-74b3c99f0e1d",
          ],
          format: {
            page_icon: "🖍️",
            page_cover: "/images/page-cover/woodcuts_1.jpg",
            page_cover_position: 0.1,
          },
          permissions: [
            {
              role: "editor",
              type: "user_permission",
              user_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
            },
            {
              role: "reader",
              type: "public_permission",
              added_timestamp: 1640673945641,
            },
          ],
          created_time: 1636536420000,
          last_edited_time: 1640675280000,
          parent_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
          parent_table: "space",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
    },
    collection: {
      "cd54465f-8ae3-4574-908f-bf6447c7713a": {
        role: "reader",
        value: {
          id: "cd54465f-8ae3-4574-908f-bf6447c7713a",
          version: 14,
          name: [["테스트"]],
          schema: {
            "f<N{": { name: "태그", type: "multi_select" },
            "ti<]": { name: "생성일", type: "created_time" },
            title: { name: "이름", type: "title" },
          },
          format: {
            collection_page_properties: [
              { visible: true, property: "ti<]" },
              { visible: true, property: "f<N{" },
            ],
          },
          parent_id: "e8500b91-eef2-4945-afb2-94c8104d2c2d",
          parent_table: "block",
          alive: true,
          migrated: true,
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
    },
    collection_view: {
      "b1a73e3d-9d5a-42e1-aee8-8d6a8f006a38": {
        role: "reader",
        value: {
          id: "b1a73e3d-9d5a-42e1-aee8-8d6a8f006a38",
          version: 1,
          type: "list",
          name: "리스트 보기",
          format: {
            list_properties: [{ visible: true, property: "f<N{" }],
          },
          parent_id: "e8500b91-eef2-4945-afb2-94c8104d2c2d",
          parent_table: "block",
          alive: true,
          page_sort: [
            "273be2a5-2583-4c00-8925-f344d1103f0e",
            "3aca7339-6dfc-46ea-849b-f3b6bfc974bb",
            "896636bc-3530-420b-ba5a-d83ea3ed6dde",
          ],
          query2: { aggregations: [{ aggregator: "count" }] },
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
    },
    space: {},
    notion_user: {},
    collection_query: {},
    signed_urls: {},
  },
  "b9e5eefd-a49e-41ee-852d-7abfad299f83": {
    block: {
      "b9e5eefd-a49e-41ee-852d-7abfad299f83": {
        role: "reader",
        value: {
          id: "b9e5eefd-a49e-41ee-852d-7abfad299f83",
          version: 17,
          type: "page",
          properties: { title: [["페이지"]] },
          content: ["541bef22-6632-40bb-8cfb-d967c3f71386"],
          created_time: 1639819344390,
          last_edited_time: 1639819320000,
          parent_id: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
          parent_table: "block",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      "ca74dddb-66fe-4c12-81fa-c1c0518ee320": {
        role: "reader",
        value: {
          id: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
          version: 63,
          type: "page",
          properties: { title: [["테스트"]] },
          content: [
            "70e8d411-eb00-4bbc-8afc-26fcd8e5ed47",
            "dcd2d38f-57f9-473d-9a8a-84af630634c9",
            "10b1ea52-a6bc-4295-895c-f4078b7a4aed",
            "7d98799c-f012-4e32-83fa-ccc38c5f4bfa",
            "db21e8b1-09a0-4273-b74c-ee12690711ab",
            "de7f8570-4af2-4e58-ab2b-d917c932e69f",
            "b9e5eefd-a49e-41ee-852d-7abfad299f83",
            "b0866012-b066-4be9-85c4-5a61270d3814",
            "67406e55-7263-4871-aafe-c73899595840",
            "1fa5b709-cd2e-49ec-8690-ce38605aef85",
            "e8500b91-eef2-4945-afb2-94c8104d2c2d",
            "89ca8ec0-1af1-47e6-8c50-74b3c99f0e1d",
          ],
          format: {
            page_icon: "🖍️",
            page_cover: "/images/page-cover/woodcuts_1.jpg",
            page_cover_position: 0.1,
          },
          permissions: [
            {
              role: "editor",
              type: "user_permission",
              user_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
            },
            {
              role: "reader",
              type: "public_permission",
              added_timestamp: 1640673945641,
            },
          ],
          created_time: 1636536420000,
          last_edited_time: 1640675280000,
          parent_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
          parent_table: "space",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      "541bef22-6632-40bb-8cfb-d967c3f71386": {
        role: "reader",
        value: {
          id: "541bef22-6632-40bb-8cfb-d967c3f71386",
          version: 5,
          type: "text",
          properties: { title: [["ㅎㅇ"]] },
          created_time: 1639819320000,
          last_edited_time: 1639819320000,
          parent_id: "b9e5eefd-a49e-41ee-852d-7abfad299f83",
          parent_table: "block",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
    },
    space: {},
    collection: {},
    collection_view: {},
    notion_user: {},
    collection_query: {},
    signed_urls: {},
  },
  "3aca7339-6dfc-46ea-849b-f3b6bfc974bb": {
    block: {
      "3aca7339-6dfc-46ea-849b-f3b6bfc974bb": {
        role: "reader",
        value: {
          id: "3aca7339-6dfc-46ea-849b-f3b6bfc974bb",
          version: 2,
          type: "page",
          properties: { title: [["페이지 2"]] },
          created_time: 1639816895527,
          last_edited_time: 1639816860000,
          parent_id: "cd54465f-8ae3-4574-908f-bf6447c7713a",
          parent_table: "collection",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      "e8500b91-eef2-4945-afb2-94c8104d2c2d": {
        role: "reader",
        value: {
          id: "e8500b91-eef2-4945-afb2-94c8104d2c2d",
          version: 3,
          type: "collection_view",
          view_ids: ["b1a73e3d-9d5a-42e1-aee8-8d6a8f006a38"],
          collection_id: "cd54465f-8ae3-4574-908f-bf6447c7713a",
          format: {
            collection_pointer: {
              id: "cd54465f-8ae3-4574-908f-bf6447c7713a",
              table: "collection",
              spaceId: "674b61d7-f03f-4c4a-aa2c-8577800db349",
            },
          },
          created_time: 1639816895526,
          last_edited_time: 1639816860000,
          parent_id: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
          parent_table: "block",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      "ca74dddb-66fe-4c12-81fa-c1c0518ee320": {
        role: "reader",
        value: {
          id: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
          version: 63,
          type: "page",
          properties: { title: [["테스트"]] },
          content: [
            "70e8d411-eb00-4bbc-8afc-26fcd8e5ed47",
            "dcd2d38f-57f9-473d-9a8a-84af630634c9",
            "10b1ea52-a6bc-4295-895c-f4078b7a4aed",
            "7d98799c-f012-4e32-83fa-ccc38c5f4bfa",
            "db21e8b1-09a0-4273-b74c-ee12690711ab",
            "de7f8570-4af2-4e58-ab2b-d917c932e69f",
            "b9e5eefd-a49e-41ee-852d-7abfad299f83",
            "b0866012-b066-4be9-85c4-5a61270d3814",
            "67406e55-7263-4871-aafe-c73899595840",
            "1fa5b709-cd2e-49ec-8690-ce38605aef85",
            "e8500b91-eef2-4945-afb2-94c8104d2c2d",
            "89ca8ec0-1af1-47e6-8c50-74b3c99f0e1d",
          ],
          format: {
            page_icon: "🖍️",
            page_cover: "/images/page-cover/woodcuts_1.jpg",
            page_cover_position: 0.1,
          },
          permissions: [
            {
              role: "editor",
              type: "user_permission",
              user_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
            },
            {
              role: "reader",
              type: "public_permission",
              added_timestamp: 1640673945641,
            },
          ],
          created_time: 1636536420000,
          last_edited_time: 1640675280000,
          parent_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
          parent_table: "space",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
    },
    collection: {
      "cd54465f-8ae3-4574-908f-bf6447c7713a": {
        role: "reader",
        value: {
          id: "cd54465f-8ae3-4574-908f-bf6447c7713a",
          version: 14,
          name: [["테스트"]],
          schema: {
            "f<N{": { name: "태그", type: "multi_select" },
            "ti<]": { name: "생성일", type: "created_time" },
            title: { name: "이름", type: "title" },
          },
          format: {
            collection_page_properties: [
              { visible: true, property: "ti<]" },
              { visible: true, property: "f<N{" },
            ],
          },
          parent_id: "e8500b91-eef2-4945-afb2-94c8104d2c2d",
          parent_table: "block",
          alive: true,
          migrated: true,
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
    },
    collection_view: {
      "b1a73e3d-9d5a-42e1-aee8-8d6a8f006a38": {
        role: "reader",
        value: {
          id: "b1a73e3d-9d5a-42e1-aee8-8d6a8f006a38",
          version: 1,
          type: "list",
          name: "리스트 보기",
          format: {
            list_properties: [{ visible: true, property: "f<N{" }],
          },
          parent_id: "e8500b91-eef2-4945-afb2-94c8104d2c2d",
          parent_table: "block",
          alive: true,
          page_sort: [
            "273be2a5-2583-4c00-8925-f344d1103f0e",
            "3aca7339-6dfc-46ea-849b-f3b6bfc974bb",
            "896636bc-3530-420b-ba5a-d83ea3ed6dde",
          ],
          query2: { aggregations: [{ aggregator: "count" }] },
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
    },
    space: {},
    notion_user: {},
    collection_query: {},
    signed_urls: {},
  },
  "273be2a5-2583-4c00-8925-f344d1103f0e": {
    block: {
      "273be2a5-2583-4c00-8925-f344d1103f0e": {
        role: "reader",
        value: {
          id: "273be2a5-2583-4c00-8925-f344d1103f0e",
          version: 2,
          type: "page",
          properties: { title: [["페이지 1"]] },
          created_time: 1639816895527,
          last_edited_time: 1639816860000,
          parent_id: "cd54465f-8ae3-4574-908f-bf6447c7713a",
          parent_table: "collection",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      "e8500b91-eef2-4945-afb2-94c8104d2c2d": {
        role: "reader",
        value: {
          id: "e8500b91-eef2-4945-afb2-94c8104d2c2d",
          version: 3,
          type: "collection_view",
          view_ids: ["b1a73e3d-9d5a-42e1-aee8-8d6a8f006a38"],
          collection_id: "cd54465f-8ae3-4574-908f-bf6447c7713a",
          format: {
            collection_pointer: {
              id: "cd54465f-8ae3-4574-908f-bf6447c7713a",
              table: "collection",
              spaceId: "674b61d7-f03f-4c4a-aa2c-8577800db349",
            },
          },
          created_time: 1639816895526,
          last_edited_time: 1639816860000,
          parent_id: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
          parent_table: "block",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      "ca74dddb-66fe-4c12-81fa-c1c0518ee320": {
        role: "reader",
        value: {
          id: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
          version: 63,
          type: "page",
          properties: { title: [["테스트"]] },
          content: [
            "70e8d411-eb00-4bbc-8afc-26fcd8e5ed47",
            "dcd2d38f-57f9-473d-9a8a-84af630634c9",
            "10b1ea52-a6bc-4295-895c-f4078b7a4aed",
            "7d98799c-f012-4e32-83fa-ccc38c5f4bfa",
            "db21e8b1-09a0-4273-b74c-ee12690711ab",
            "de7f8570-4af2-4e58-ab2b-d917c932e69f",
            "b9e5eefd-a49e-41ee-852d-7abfad299f83",
            "b0866012-b066-4be9-85c4-5a61270d3814",
            "67406e55-7263-4871-aafe-c73899595840",
            "1fa5b709-cd2e-49ec-8690-ce38605aef85",
            "e8500b91-eef2-4945-afb2-94c8104d2c2d",
            "89ca8ec0-1af1-47e6-8c50-74b3c99f0e1d",
          ],
          format: {
            page_icon: "🖍️",
            page_cover: "/images/page-cover/woodcuts_1.jpg",
            page_cover_position: 0.1,
          },
          permissions: [
            {
              role: "editor",
              type: "user_permission",
              user_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
            },
            {
              role: "reader",
              type: "public_permission",
              added_timestamp: 1640673945641,
            },
          ],
          created_time: 1636536420000,
          last_edited_time: 1640675280000,
          parent_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
          parent_table: "space",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
    },
    collection: {
      "cd54465f-8ae3-4574-908f-bf6447c7713a": {
        role: "reader",
        value: {
          id: "cd54465f-8ae3-4574-908f-bf6447c7713a",
          version: 14,
          name: [["테스트"]],
          schema: {
            "f<N{": { name: "태그", type: "multi_select" },
            "ti<]": { name: "생성일", type: "created_time" },
            title: { name: "이름", type: "title" },
          },
          format: {
            collection_page_properties: [
              { visible: true, property: "ti<]" },
              { visible: true, property: "f<N{" },
            ],
          },
          parent_id: "e8500b91-eef2-4945-afb2-94c8104d2c2d",
          parent_table: "block",
          alive: true,
          migrated: true,
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
    },
    collection_view: {
      "b1a73e3d-9d5a-42e1-aee8-8d6a8f006a38": {
        role: "reader",
        value: {
          id: "b1a73e3d-9d5a-42e1-aee8-8d6a8f006a38",
          version: 1,
          type: "list",
          name: "리스트 보기",
          format: {
            list_properties: [{ visible: true, property: "f<N{" }],
          },
          parent_id: "e8500b91-eef2-4945-afb2-94c8104d2c2d",
          parent_table: "block",
          alive: true,
          page_sort: [
            "273be2a5-2583-4c00-8925-f344d1103f0e",
            "3aca7339-6dfc-46ea-849b-f3b6bfc974bb",
            "896636bc-3530-420b-ba5a-d83ea3ed6dde",
          ],
          query2: { aggregations: [{ aggregator: "count" }] },
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
    },
    space: {},
    notion_user: {},
    collection_query: {},
    signed_urls: {},
  },
};
