// Your "Library" tab should look like this

/**
 * Main control panel for scenario creator convenience
 * Settings defined here will override their counterparts elsewhere
 * Most AC and Inner Self settings are included
 * Safe to delete
 */
globalThis.MainSettings = (class MainSettings {

    //—————————————————————————————————————————————————————————————————————————————————

    /**
     * Inner Self v1.0.2
     * Made by LewdLeah on January 3, 2026
     * Gives story characters the ability to learn, plan, and adapt over time
     * Inner Self is free and open-source for anyone! ❤️
     */
    static InnerSelf = {
        // Default settings for scenario creators to modify:

        // List the first name of every scenario NPC whose brain should be simulated by Inner Self:
        IMPORTANT_SCENARIO_CHARACTERS: ""
        // (write a comma separated list of names inside the "" like so: "Leah, Lily, Lydia")
        ,
        // Is Inner Self already enabled when the adventure begins?
        IS_INNER_SELF_ENABLED_BY_DEFAULT: true
        // (true or false)
        ,
        // Is the player character's first name known in advance? Ignore this setting if unsure
        PREDETERMINED_PLAYER_CHARACTER_NAME: ""
        // (any name inside the "" or leave empty)
        ,
        // Is the adventure intended for 1st, 2nd, or 3rd person gameplay?
        FIRST_SECOND_OR_THIRD_PERSON_POV: 2
        // (1, 2, or 3)
        ,
        // What (maximum) percentage of "Recent Story" context should be repurposed for NPC brains?
        PERCENTAGE_OF_RECENT_STORY_USED_FOR_BRAINS: 30
        // (1 to 95)
        ,
        // How many actions back should Inner Self look for character name triggers?
        NUMBER_OF_ACTIONS_TO_LOOK_BACK_FOR_TRIGGERS: 5
        // (1 to 250)
        ,
        // Symbol used to visually display which NPC brain is currently triggered?
        ACTIVE_CHARACTERS_VISUAL_INDICATOR_SYMBOL: "🎭"
        // (any text/emoji inside the "" or leave empty)
        ,
        // When possible, what percentage of turns should involve an attempt to form a new thought?
        THOUGHT_FORMATION_CHANCE_PER_TURN: 60
        // (0 to 100)
        ,
        // Is the thought formation chance reduced by half during Do/Say/Story turns?
        IS_THOUGHT_CHANCE_HALF_FOR_DO_SAY_STORY: true
        // (true or false)
        ,
        // Is valid JSON shown and expected in brain card notes? Otherwise use a human-readable format
        IS_JSON_FORMAT_USED_FOR_BRAIN_CARD_NOTES: false
        // (true or false)
        ,
        // Should Inner Self model task outputs be displayed inline with the adventure text itself?
        IS_DEBUG_MODE_ENABLED_BY_DEFAULT: false
        // (true or false)
        ,
        // Is the "Configure Inner Self" story card pinned near the top of the in-game list?
        IS_CONFIG_CARD_PINNED_BY_DEFAULT: false
        // (true or false)
        ,
        // Is AC already enabled when the adventure begins?
        IS_AC_ENABLED_BY_DEFAULT: false
        // (true or false)
        ,
    }; //——————————————————————————————————————————————————————————————————————————————

    /**
     * AC v1.1.3
     * Made by LewdLeah on May 21, 2025
     * This AI Dungeon script automatically creates and updates plot-relevant story cards while you play
     * General-purpose usefulness and compatibility with other scenarios/scripts were my design priorities
     * AC is fully open-source, please copy for use within your own projects! ❤️
     */
    static AC = {
        // Is AC already enabled when the adventure begins?
        DEFAULT_DO_AC: true
        // (true or false)
        ,
        // Pin the "Configure Auto-Cards" story card at the top of the player's story cards list?
        DEFAULT_PIN_CONFIGURE_CARD: false
        // (true or false)
        ,
        // Minimum number of turns in between automatic card generation events?
        DEFAULT_CARD_CREATION_COOLDOWN: 40
        // (0 to 9999)
        ,
        // Use a bulleted list format for newly generated card entries?
        DEFAULT_USE_BULLETED_LIST_MODE: true
        // (true or false)
        ,
        // Maximum allowed length for newly generated story card entries?
        DEFAULT_GENERATED_ENTRY_LIMIT: 600
        // (200 to 2000)
        ,
        // Do newly generated cards have memory updates enabled by default?
        DEFAULT_NEW_CARDS_DO_MEMORY_UPDATES: false
        // (true or false)
        ,
        // Default character limit before the card's memory bank is summarized?
        DEFAULT_NEW_CARDS_MEMORY_LIMIT: 3200
        // (1750 to 9900)
        ,
        // Approximately how much shorter should recently compressed memories be? (ratio = 10 * old / new)
        DEFAULT_MEMORY_COMPRESSION_RATIO: 25
        // (20 to 1250)
        ,
        // Ignore all-caps during title candidate detection?
        DEFAULT_IGNORE_ALL_CAPS_TITLES: true
        // (true or false)
        ,
        // Should player input actions (Do/Say/Story) be considered during title detection?
        DEFAULT_DETECT_TITLES_FROM_INPUTS: false
        // (true or false)
        ,
        // How many (minimum) actions in the past does Auto-Cards look for named entities?
        DEFAULT_MINIMUM_LOOK_BACK_DISTANCE: 7
        // (2 to 88)
        ,
        // Is Live Script Interface v2 enabled?
        DEFAULT_DO_LSI_V2: false
        // (true or false)
        ,
        // Should the "Debug Data" story card be visible?
        DEFAULT_SHOW_DEBUG_DATA: false
        // (true or false)
        ,
        // AI prompt used to generate new story card entries?
        DEFAULT_CARD_GENERATION_PROMPT: [
            "-----",
            "",
            "<SYSTEM>",
            "# Stop the story and ignore previous instructions. Write a brief and coherent informational entry for %{title} following these instructions:",
            "- Write only third-person pure prose information about %{title} using complete sentences with correct punctuation",
            "- Avoid short-term temporary details or appearances, instead focus on plot-significant information",
            "- Prioritize story-relevant details about %{title} first to ensure seamless integration with the previous plot",
            "- Create new information based on the context and story direction",
            "- Mention %{title} in every sentence",
            "- Use semicolons if needed",
            "- Add additional details about %{title} beneath incomplete entries",
            "- Be concise and grounded",
            "- Imitate the story's writing style and infer the reader's preferences",
            "</SYSTEM>",
            "Continue the entry for %{title} below while avoiding repetition:",
            "%{entry}"
        ] // (mimic this multi-line "text" format)
        ,
        // AI prompt used to summarize a given story card's memory bank?
        DEFAULT_CARD_MEMORY_COMPRESSION_PROMPT: [
            "-----",
            "",
            "<SYSTEM>",
            "# Stop the story and ignore previous instructions. Summarize and condense the given paragraph into a narrow and focused memory passage while following these guidelines:",
            "- Ensure the passage retains the core meaning and most essential details",
            "- Use the third-person perspective",
            "- Prioritize information-density, accuracy, and completeness",
            "- Remain brief and concise",
            "- Write firmly in the past tense",
            "- The paragraph below pertains to old events from far earlier in the story",
            "- Integrate %{title} naturally within the memory; however, only write about the events as they occurred",
            "- Only reference information present inside the paragraph itself, be specific",
            "</SYSTEM>",
            "Write a summarized old memory passage for %{title} based only on the following paragraph:",
            "\"\"\"",
            "%{memory}",
            "\"\"\"",
            "Summarize below:"
        ] // (mimic this multi-line "text" format)
        ,
        // Titles banned from future card generation attempts?
        DEFAULT_BANNED_TITLES_LIST: (
            "North, East, South, West, Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, January, February, March, April, May, June, July, August, September, October, November, December"
        ) // (mimic this comma-list "text" format)
        ,
        // Default story card "type" used by Auto-Cards? (does not matter)
        DEFAULT_CARD_TYPE: "class"
        // ("text")
        ,
        // Should titles mentioned in the "opening" plot component be banned from future card generation by default?
        DEFAULT_BAN_TITLES_FROM_OPENING: false
        // (true or false)
        ,
    }; //——————————————————————————————————————————————————————————————————————————————

    #config;
    constructor(script, alternative) {
        this.#config = (
            MainSettings.hasOwnProperty(script)
                ? MainSettings[script]
                : ((typeof alternative === "string") && MainSettings.hasOwnProperty(alternative))
                    ? MainSettings[alternative]
                    : null
        );
        return this;
    }
    merge(settings) {
        if (!this.#config || !settings || (typeof settings !== "object")) {
            return;
        }
        for (const [key, value] of Object.entries(this.#config)) {
            settings[key] = value;
        }
        return;
    }
});

//—————————————————————————————————————————————————————————————————————————————————————

/**
 * Inner Self v1.0.2
 * Made by LewdLeah on January 3, 2026
 * Gives story characters the ability to learn, plan, and adapt over time
 * Inner Self is free and open-source for anyone! ❤️
 */
function InnerSelf(hook) {
    "use strict";
    /**
     * Scenario-level default settings
     * Creators modify these before publishing
     * Players modify these in-game via the config card
     */
    const S = {
        // Default settings for scenario creators to modify:

        // List the first name of every scenario NPC whose brain should be simulated by Inner Self:
        IMPORTANT_SCENARIO_CHARACTERS: ""
        // (write a comma separated list of names inside the "" like so: "Leah, Lily, Lydia")
        ,
        // Is Inner Self already enabled when the adventure begins?
        IS_INNER_SELF_ENABLED_BY_DEFAULT: true
        // (true or false)
        ,
        // Is the player character's first name known in advance? Ignore this setting if unsure
        PREDETERMINED_PLAYER_CHARACTER_NAME: ""
        // (any name inside the "" or leave empty)
        ,
        // Is the adventure intended for 1st, 2nd, or 3rd person gameplay?
        FIRST_SECOND_OR_THIRD_PERSON_POV: 2
        // (1, 2, or 3)
        ,
        // What (maximum) percentage of "Recent Story" context should be repurposed for NPC brains?
        PERCENTAGE_OF_RECENT_STORY_USED_FOR_BRAINS: 30
        // (1 to 95)
        ,
        // How many actions back should Inner Self look for character name triggers?
        NUMBER_OF_ACTIONS_TO_LOOK_BACK_FOR_TRIGGERS: 5
        // (1 to 250)
        ,
        // Symbol used to visually display which NPC brain is currently triggered?
        ACTIVE_CHARACTERS_VISUAL_INDICATOR_SYMBOL: "🎭"
        // (any text/emoji inside the "" or leave empty)
        ,
        // When possible, what percentage of turns should involve an attempt to form a new thought?
        THOUGHT_FORMATION_CHANCE_PER_TURN: 60
        // (0 to 100)
        ,
        // Is the thought formation chance reduced by half during Do/Say/Story turns?
        IS_THOUGHT_CHANCE_HALF_FOR_DO_SAY_STORY: true
        // (true or false)
        ,
        // Is valid JSON shown and expected in brain card notes? Otherwise use a human-readable format
        IS_JSON_FORMAT_USED_FOR_BRAIN_CARD_NOTES: false
        // (true or false)
        ,
        // Should Inner Self model task outputs be displayed inline with the adventure text itself?
        IS_DEBUG_MODE_ENABLED_BY_DEFAULT: false
        // (true or false)
        ,
        // Is the "Configure Inner Self" story card pinned near the top of the in-game list?
        IS_CONFIG_CARD_PINNED_BY_DEFAULT: false
        // (true or false)
        ,
        // Is AC already enabled when the adventure begins?
        IS_AC_ENABLED_BY_DEFAULT: false
        // (true or false)
        ,
    }; //——————————————————————————————————————————————————————————————————————————————

    const version = "v1.0.2";
    // Validate that all required AI Dungeon global properties exist
    // Without these, Inner Self literally cannot function
    if (
        !globalThis.state || (typeof state !== "object") || Array.isArray(state)
        || !globalThis.info || (typeof info !== "object") || Array.isArray(info)
        || !Array.isArray(globalThis.storyCards)
        || (typeof addStoryCard !== "function")
        || !Array.isArray(globalThis.history)
        || (typeof text !== "string")
    ) {
        // Something is seriously broken in AID
        log("unexpected error");
        globalThis.text ||= " ";
        return;
    }
    /**
     * Recursively merges source object into target object
     * Only copies properties that are undefined in target
     * Nested objects get their own recursive treatment
     * @param {Object} target - The object to merge into
     * @param {Object} source - The object to merge from
     * @returns {Object} The mutated target object
     */
    const deepMerge = (target = {}, source = {}) => {
        // Walk through every key in the source
        for (const key in source) {
            // Source value is a nested object, so recurse
            if (source[key] && (typeof source[key] === "object") && !Array.isArray(source[key])) {
                if (!target[key] || (typeof target[key] !== "object")) {
                    // Target doesn't have this key or it's not an object
                    target[key] = {};
                }
                deepMerge(target[key], source[key]);
            } else if (target[key] === undefined) {
                // Only copy if target doesn't already have this key
                target[key] = source[key];
            }
        }
        return target;
    };
    /**
     * Persistent state of Inner Self stored in the adventure's state object
     * This survives across turns
     * @type {Object}
     */
    const IS = state.InnerSelf = deepMerge(state.InnerSelf || {}, {
        // Zero-width encoded thought labels for context injection
        encoding: "",
        // Currently triggered agent name (empty string = none)
        agent: "",
        // Monotonically increasing thought label counter
        label: 0,
        // Hash of recent history to detect retry or erase + continue turns
        hash: "",
        // Total number of brain operations performed across all agents
        ops: 0,
        // Auto-Cards integration state
        AC: {
            // This helps avoid calling AC API functions more than necessary
            enabled: false,
            // External use of the AC API force-installs so it just works
            forced: false,
            // NGL this one didn't need to be stateful but I didn't feel like declaring a local so whatevs
            // Basically AC sets this to true when it does stuff, so Inner Self can inhibit itself
            event: false
        }
    });
    /**
     * Checks if Auto-Cards is available in the global scope
     * @returns {boolean} true if Auto-Cards is installed and callable
     */
    const hasAutoCards = () => (typeof globalThis.AutoCards === "function");
    const u = "qm`x/`hetofdno/bnl.qsnghmd.MdveMd`i".replace(/./g, c => String.fromCharCode(c.charCodeAt() ^ 1));
    if (IS.AC.enabled && (typeof hook === "string") && (hook !== "context") && hasAutoCards()) {
        // Delegate to Auto-Cards for non-context hooks when enabled
        try {
            text = AutoCards(hook, text);
        } catch (error) {
            log(error.message);
        }
    }
    /**
     * Generates a simple hashcode of the last 50 actions in history
     * Used to detect retry or erase + continue turns
     * @returns {string} Hexadecimal hash string
     */
    const historyHash = () => {
        let n = 0;
        // Grab the last 50 actions and stringify them
        const serialized = JSON.stringify(history.slice(-50));
        for (let i = 0; i < serialized.length; i++) {
            // Classic polynomial rolling hash, nothing fancy
            n = ((31 * n) + serialized.charCodeAt(i)) | 0;
        }
        return n.toString(16);
    };
    /**
     * Safely parses a JSON string into an object
     * Optionally attempts to repair malformed JSON by extracting quoted content
     * Basically I use repair mode for cute little smooth brains UwU
     * @param {string} str - The string to parse
     * @param {boolean} repair - Whether to attempt repair on malformed JSON
     * @returns {Object} Parsed object or empty object on failure
     */
    const deserialize = (str = "", repair = false) => {
        try {
            const parsed = JSON.parse(repair ? (() => {
                // All values will be strings I promise
                // Find the first and last quote chars
                const first = str.indexOf("\"");
                const last = str.lastIndexOf("\"");
                return (
                    ((first === -1) || (last === -1) || (last <= first))
                        ? "{}" : `{${str.slice(first, last + 1)}}`
                );
            })() : str);
            if (parsed && (typeof parsed === "object") && !Array.isArray(parsed)) {
                // Only return a proper object (not null, not array)
                return parsed;
            }
        } catch { }
        // That empty catch looks so dumb lol
        return {};
    };
    /**
     * Validated config settings for Inner Self
     * Default settings are specified by creators at the scenario level
     * Runtime settings are specified by players at the adventure level
     * @typedef {Object} config
     * @property {Object|null} card - Config card object reference
     * @property {boolean} allow - Is Inner Self enabled?
     * @property {string} player - The player character's name
     * @property {number} pov - Is the adventure in 1st, 2nd, or 3rd person?
     * @property {boolean} guide - Show a detailed guide
     * @property {number} percent - Default percentage of Recent Story context length reserved for agent brains
     * @property {number} distance - Number of previous actions to look back for agent name triggers
     * @property {string} indicator - The visual indicator symbol used to display active brains
     * @property {number} chance - Likelihood of performing a standard thought formation task each turn
     * @property {boolean} half - Is the thought formation chance reduced by half during Do/Say/Story turns?
     * @property {boolean} json - Is raw JSON syntax used to serialize NPC brains in their card notes?
     * @property {boolean} debug - Is debug mode enabled for inline task output visibility?
     * @property {boolean} pin - Is the config card pinned near the top of the list?
     * @property {boolean} auto - Is Auto-Cards enabled?
     * @property {string[]} agents - All agent names, ordered from highest to lowest trigger priority
     */
    /**
     * Config class - Manages the Inner Self configuration card
     * Handles building, finding, parsing, and validating all settings
     * @class
     */
    class Config {
        /**
         * Build or find the Inner Self config card
         * Returns the card reference and all parsed settings
         * This is the heart of the config system
         * @param {Set<string>} [pending] - Recursion aid for tracking pending agents
         * @returns {config} The complete validated configuration object
         */
        static get(pending = new Set()) {
            // Allow MainSettings mod to override local defaults
            if (typeof globalThis.MainSettings === "function") {
                new MainSettings("InnerSelf", "IS").merge(S);
            }
            /**
             * Fallback values when settings are missing or invalid
             * Frozen because I hate accidental mutations
             * @type {config}
             */
            const fallback = Object.freeze({
                allow: true,
                guide: false,
                player: "",
                pov: 2,
                percent: 30,
                distance: 5,
                indicator: "🎭",
                chance: 60,
                half: true,
                json: false,
                debug: false,
                pin: false,
                auto: false,
                agents: []
            });
            /** @type {config} */
            const config = { card: null };
            /**
             * Strips a string down to lowercase letters only
             * Used for fuzzy matching of setting names
             * @param {string} s - Input string
             * @returns {string} Simplified string
             */
            const simplify = (s = "") => s.toLowerCase().replace(/[^a-z]+/g, "");
            /**
             * Cleans up an agent name by removing commas and zero-width chars
             * Also normalizes whitespace because players are messy ;P
             * @param {string} agent - Raw agent name
             * @returns {string} Cleaned agent name
             */
            const cleanAgent = (agent = "") => agent.replace(/[,\u200B-\u200D]+/g, "").trim().replace(/\s+/g, " ");
            /**
             * Factory function that creates builder/setter pairs for config fields
             * Handles both boolean and integer settings with validation
             * This makes me NOT want to die every time I need to add a new setting
             * @param {string} key - Config property name
             * @param {*} setting - Default value from scenario settings
             * @param {Object} int - Integer constraints (lower, upper, suffix)
             * @returns {Object} Object with builder and setter functions
             */
            const factory = (key = "", setting = null, int = null) => ({
                // Builds the display string for the config card entry
                builder: (cfg = {}) => ` ${config[key] ?? cfg.setter?.(setting)}${(
                    // Fancy suffix or boring suffix
                    (typeof int?.suffix === "function") ? int.suffix() : int?.suffix ?? ""
                )}`,
                // Parses and validates a value, storing it in config
                setter: (value = null, fallible = false) => {
                    // Helper to clamp integers within bounds
                    const bound = (val = 20) => Math.min(Math.max(int?.lower ?? 1, val), int?.upper ?? 95);
                    if ((typeof value === "boolean") && !int) {
                        // Boolean setting with a boolean value (easy case)
                        config[key] = value;
                    } else if (Number.isInteger(value) && int) {
                        // Integer setting with an integer value (also easy)
                        config[key] = bound(value);
                    } else if (typeof value !== "string") {
                        // Non-string non-matching type, use fallback unless fallible
                        if (fallible) {
                            return;
                        }
                        config[key] = fallback[key];
                    } else if (int) {
                        // Parse integer from string, stripping decimals and non-digits
                        value = value.split(/[./]/, 1)[0].replace(/[^\d]+/g, "");
                        if (value !== "") {
                            config[key] = bound(parseInt(value, 10));
                        } else if (!fallible) {
                            config[key] = bound(fallback[key]);
                        }
                    } else {
                        // Parse boolean from string with synonym support
                        value = simplify(value);
                        if (["true", "t", "yes", "y", "on", "1", "enable", "enabled"].includes(value)) {
                            config[key] = true;
                        } else if (["false", "f", "no", "n", "off", "0", "disable", "disabled"].includes(value)) {
                            config[key] = false;
                        } else if (!fallible) {
                            config[key] = fallback[key];
                        }
                    }
                    return config[key];
                }
            });
            /**
             * Template for building the Inner Self config card
             * Contains all the user-facing text and settings
             * @type {Object}
             */
            const template = {
                type: "class",
                title: "Configure \nInner Self",
                // The config card entry contains the main settings
                entry: [
                    {
                        message: "Inner Self grants story characters the ability to learn, plan, and adapt over time. Edit the entry and notes below to control how Inner Self behaves."
                    },
                    {
                        message: "Enable Inner Self:", ...factory(
                            "allow", S.IS_INNER_SELF_ENABLED_BY_DEFAULT
                        )
                    },
                    {
                        message: "Show detailed guide:",
                        builder: (cfg = {}) => ` ${(
                            ((hook === "context") || Number.isInteger(info.maxChars))
                                ? config.guide ?? cfg.setter?.(false)
                                : false
                        )}`,
                        setter: factory("guide", false).setter
                    },
                    {
                        message: "First name of player character:",
                        builder: (cfg = {}) => ` "${config.player || (() => {
                            const display = cfg.setter?.(S.PREDETERMINED_PLAYER_CHARACTER_NAME);
                            if (config.player === "") {
                                config.player = "the protagonist";
                            }
                            return display;
                        })()}"`,
                        setter: (value = null, fallible = false) => {
                            const example = "Example";
                            if (typeof value === "string") {
                                config.player = value.replaceAll("\"", "").replace(example, "").trim();
                            } else if (fallible) {
                                return;
                            } else {
                                config.player = fallback.player;
                            }
                            return config.player || example;
                        }
                    },
                    {
                        message: "Adventure in 1st, 2nd, or 3rd person:", ...factory(
                            "pov", S.FIRST_SECOND_OR_THIRD_PERSON_POV,
                            { lower: 1, upper: 3, suffix: () => ["st", "nd", "rd"][config.pov - 1] ?? "" }
                        )
                    },
                    {
                        message: "Max brain size relative to story context:", ...factory(
                            "percent", S.PERCENTAGE_OF_RECENT_STORY_USED_FOR_BRAINS,
                            { lower: 1, upper: 95, suffix: "%" }
                        )
                    },
                    {
                        message: "Recent turns searched for name triggers:", ...factory(
                            "distance", S.NUMBER_OF_ACTIONS_TO_LOOK_BACK_FOR_TRIGGERS,
                            { lower: 1, upper: 250 }
                        )
                    },
                    {
                        message: "Visual indicator of current NPC triggers:",
                        builder: (cfg = {}) => ` "${(
                            config.indicator ?? cfg.setter?.(S.ACTIVE_CHARACTERS_VISUAL_INDICATOR_SYMBOL)
                        )}"`,
                        setter: (value = null, fallible = false) => (
                            (typeof value === "string")
                                ? (config.indicator = value.replace(/["\u200B-\u200D]+/g, "").trim())
                                : (fallible)
                                    ? null
                                    : (config.indicator = fallback.indicator)
                        )
                    },
                    {
                        message: "Thought formation chance per turn:", ...factory(
                            "chance", S.THOUGHT_FORMATION_CHANCE_PER_TURN,
                            { lower: 0, upper: 100, suffix: "%" }
                        )
                    },
                    {
                        message: "Half thought chance for Do/Say/Story:", ...factory(
                            "half", S.IS_THOUGHT_CHANCE_HALF_FOR_DO_SAY_STORY
                        )
                    },
                    {
                        message: "Brain card notes store brains as JSON:", ...factory(
                            "json", S.IS_JSON_FORMAT_USED_FOR_BRAIN_CARD_NOTES
                        )
                    },
                    {
                        message: "Enable debug mode to see model tasks:", ...factory(
                            "debug", S.IS_DEBUG_MODE_ENABLED_BY_DEFAULT
                        )
                    },
                    {
                        message: "Pin this config card near the top:", ...factory(
                            "pin", S.IS_CONFIG_CARD_PINNED_BY_DEFAULT
                        )
                    },
                    {
                        message: "Install Auto-Cards:", ...factory(
                            "auto", S.IS_AC_ENABLED_BY_DEFAULT
                        )
                    },
                    {
                        message: "Write the name(s) of your non-player characters at the very bottom of the \"notes\" section below. This is mandatory because it allows Inner Self to assemble independent minds for the correct individuals."
                    }
                ],
                // Description section contains info and agent list
                description: [
                    {
                        message: "Please visit my profile @LewdLeah through the link above and read my bio for simple steps to add Inner Self to your own scenarios! ❤️"
                    },
                    {
                        message: `Inner Self ${version} is an open-source and general-purpose AI Dungeon mod by LewdLeah. You have my full permission to use it with any scenario!`
                    },
                    {
                        // This is where players list their NPCs
                        message: "Write the first name of every intelligent story character on separate lines below, listed from highest to lowest trigger priority:",
                        builder: (cfg = {}) => ["", "", ...(
                            config.agents ?? cfg.setter?.(S.IMPORTANT_SCENARIO_CHARACTERS)
                        ), ""].join("\n"),
                        setter: (value = null, fallible = false) => {
                            // Accept string (from card) or array (from code)
                            if (typeof value === "string") {
                                config.agents = value.split(/[,\n]/);
                            } else if (Array.isArray(value)) {
                                config.agents = value.filter(agent => (typeof agent === "string"));
                            } else if (fallible) {
                                return;
                            } else {
                                return (config.agents = [...fallback.agents]);
                            }
                            // Clean, deduplicate, and remove empties
                            return (config.agents = [...new Set(config.agents
                                .map(agent => cleanAgent(agent))
                                .filter(agent => (agent !== ""))
                            )]);
                        }
                    }
                ]
            };
            // Track discovered agents to avoid duplicates
            const agents = new Set();
            // Simplified title for fuzzy matching
            const target = simplify(template.title);
            // Scan all story cards in reverse order
            // Looking for config cards, agent cards, and duplicates (remove the latter in-place)
            for (let i = storyCards.length - 1; -1 < i; i--) {
                const card = storyCards[i];
                if (!card || (typeof card !== "object") || Array.isArray(card)) {
                    // Remove invalid cards (null, non-objects, arrays)
                    // If this ever happens in a real situation, I will cry
                    storyCards.splice(i, 1);
                } else if ((typeof card.keys === "string") && card.keys.includes("\"agent\"")) {
                    // This card has agent metadata, extract and validate it
                    const metadata = deserialize(card.keys);
                    if (typeof metadata.agent === "string") {
                        metadata.agent = cleanAgent(metadata.agent);
                        if (metadata.agent !== "") {
                            if (!agents.has(metadata.agent)) {
                                // First time seeing this brain card
                                agents.add(metadata.agent);
                                card.keys = JSON.stringify(metadata);
                                continue;
                            } else if (typeof card.title === "string") {
                                // Duplicate brain card, mark it as a copy
                                card.title = card.title.trim();
                                card.title = `Copy of ${(card.title === "") ? "Agent" : card.title}`;
                            }
                        }
                    }
                    // Invalid agent metadata, clear it
                    card.keys = "";
                } else if ((typeof card.title !== "string") || (100 < card.title.length)) {
                    // Skip cards with missing or absurdly long titles
                    continue;
                } else if (card.title.startsWith("@") && !card.title.includes("figure")) {
                    // Cards starting with @ are shorthand for adding agents
                    const agent = cleanAgent(card.title.replace(/^[@\s]*/, ""));
                    if (agent !== "") {
                        card.title = agent;
                        pending.add(agent);
                    }
                } else if ((() => {
                    // Fuzzy matching to find the config card even if title is slightly mangled
                    // Because players gonna player and typos happen
                    const current = simplify(card.title);
                    const maxMistakes = 2;
                    let mistakes = 0;
                    // Target index (expected title)
                    let t = 0;
                    // Current index (actual title)
                    let c = 0;
                    while ((t < target.length) && (c < current.length)) {
                        if (current[c] === target[t]) {
                            // Chars match, advance both
                            t++; c++;
                            continue;
                        } else if (maxMistakes <= mistakes) {
                            // Too many mistakes, this isn't the config card (I hope)
                            return true;
                        }
                        // Allow for insertions, deletions, or substitutions
                        mistakes++;
                        (current[c + 1] === target[t])
                            ? c++
                            : (current[c] === target[t + 1])
                                ? t++
                                : (t++, c++)
                    }
                    // Count leftover chars as mistakes
                    mistakes += (target.length - t) + (current.length - c);
                    // This is basically bargain bin levenshtein distance but less costly
                    return (maxMistakes < mistakes);
                })()) {
                    // Title didn't match the fuzzy search
                    continue;
                } else if (config.card === null) {
                    // Found the config card
                    config.card = card;
                } else if (typeof removeStoryCard === "function") {
                    // Duplicate config card, remove it properly the way Latitude intended
                    // (I know it's just a wrapper for splice, but that may change one day lol)
                    removeStoryCard(i);
                } else {
                    // Fallback removal for duplicate config cards
                    storyCards.splice(i, 1);
                }
            }
            /**
             * Builds a formatted string from template sections
             * @param {Array} source - Array of config message objects
             * @param {string} delimiter - String to join sections with
             * @returns {string} Formatted config text
             */
            const build = (source = [], delimiter = "\n\n") => (source
                .map(cfg => `> ${cfg.message}${cfg.builder?.(cfg) ?? ""}`)
                .join(delimiter)
            );
            if (config.card === null) {
                // If no config card exists, create one and recurse
                addStoryCard(u,
                    build(template.entry, "\n"),
                    template.type,
                    template.title,
                    build(template.description, "\n\n")
                );
                // Recurse to parse the newly created card
                return Config.get(pending);
            }
            // Parse existing card content to extract user-modified settings
            // This is where IS reads back what the player has configured
            // Abomination :3
            ["entry", "description"].map(source => [source, (
                (typeof config.card[source] === "string")
                    // Split on >, filter for lines with colons, extract key-value pairs
                    ? Object.fromEntries((config.card[source]
                        .split(/\s*>[\s>]*/)
                        .filter(block => block.includes(":"))
                        .map(block => block.split(/\s*:[\s:]*/, 2))
                    ).map(pair => [simplify(pair[0]), pair[1].trimEnd()])) : {}
            )]).forEach(([source, extractive]) => template[source].forEach(cfg => (
                // Try to set each config value from extracted content (fallible mode)
                cfg.setter?.(extractive[simplify(cfg.message)], true)
            )));
            // Merge all discovered agents: config, brain card metadata, and "@" pending
            config.agents = [...new Set([...(config.agents ?? fallback.agents), ...agents, ...pending])];
            if (IS.AC.forced) {
                // Handle forced Auto-Cards installation (silly API stuff)
                config.auto = true;
                IS.AC.forced = false;
                IS.AC.enabled = true;
            }
            // Update the card with the canonical template format so it sticks after the hook ends
            config.card.type = template.type;
            config.card.title = template.title;
            config.card.entry = build(template.entry, "\n");
            config.card.description = build(template.description, "\n\n");
            config.card.keys = u;
            return config;
        }
    }
    /**
     * Removes the visual indicator prefix from a card title
     * The indicator is separated by a zero-width space char
     * @param {Object} card - Story card object to modify
     * @returns {void}
     */
    const deindicate = (card = {}) => {
        if (!card || (typeof card !== "object")) {
            return;
        }
        const descriptor = Object.getOwnPropertyDescriptor(card, "title");
        const canWriteTitle = descriptor
            ? ((descriptor.writable !== false) || (typeof descriptor.set === "function"))
            : Object.isExtensible(card);
        if (!canWriteTitle) {
            return;
        }
        if (typeof card.title !== "string") {
            // Cry
            card.title = "";
        } else if (card.title.includes("\u200B")) {
            // Strip everything before and including the zero-width space
            card.title = (card.title
                .slice(card.title.indexOf("\u200B") + 1)
                .replaceAll("\u200B", "")
                .trim()
            );
        }
        return;
    };
    /**
     * Agent class - Represents an NPC with a simulated brain
     * Each agent has their own story card that stores their thoughts
     * The brain is a key-value store of labeled thoughts
     * @class
     */
    class Agent {
        // Private fields for encapsulation
        // Percentage of context reserved for this agent's brain
        #percent;
        // Visual indicator symbol shown when agent is triggered
        #indicator;
        // Cached reference to the agent's brain card
        #card = null;
        // Cached parsed brain contents
        #brain = null;
        // Cached parsed metadata
        #metadata = null;
        /**
         * Creates a new Agent instance
         * The agent will find or create their brain card automatically
         * @param {string} name - The name of the agent (used for triggering)
         * @param {Object} [options] - Optional settings for the agent
         * @param {number} [options.percent=30] - Context reserved for brain contents
         * @param {string} [options.indicator=null] - Visual indicator when triggered
         */
        constructor(name = "", { percent = 30, indicator = null } = {}) {
            this.#indicator = indicator;
            this.#percent = percent;
            this.name = name;
            return this;
        }
        /**
         * Gets or creates the agent's brain card
         * Uses lazy initialization and caching
         * @returns {Object} The agent's story card
         */
        get card() {
            if (this.#card !== null) {
                // Return cached card if stored
                return this.#card;
            }
            /**
             * Creates a new brain card for this agent
             * Includes a timestamp for debugging purposes
             * @param {string} name - Display name for the card
             * @returns {Object} The newly created card
             */
            const buildCard = (name = this.name) => addStoryCard(
                JSON.stringify({ agent: this.name }),
                (() => {
                    // Generate a pretty timestamp for the initialization comment
                    const time = new Date();
                    const match = time.toLocaleString("en-US", {
                        timeZone: "UTC",
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true
                    }).match(/(\d+)\/(\d+)\/(\d+),?\s*(\d+:\d+\s*[AP]M)/);
                    return `// initialized @ ${(
                        match
                            ? `${match[3]}-${match[1]}-${match[2]} ${match[4]}`
                            : time.toISOString().replace("T", " ").slice(0, 16)
                    )} UTC`;
                })(),
                "Brain",
                name,
                JSON.stringify({}),
                // Thank you Mavrick
                { returnCard: true }
            );
            /**
             * Checks if a card belongs to this agent
             * @param {Object} card - Card to check
             * @returns {boolean} true if this is the right card
             */
            const isAgent = (card = {}) => (
                (typeof card.keys === "string")
                && card.keys.includes("\"agent\"")
                && (deserialize(card.keys).agent === this.name)
            );
            if (typeof this.#indicator !== "string") {
                // If no indicator is set, just find or create the card
                for (const card of storyCards) {
                    if (isAgent(card)) {
                        // Found an existing card
                        this.#card = card;
                        return this.#card;
                    }
                }
                // No existing card found, create one
                this.#card = buildCard();
                return this.#card;
            }
            // The Agent class instance was constructed with an indicator
            // Update card titles during the same iteration because reasons
            this.#indicator = this.#indicator.trim();
            const prefix = `${this.#indicator}\u200B`;
            for (const card of storyCards) {
                // Remove indicators from all cards
                deindicate(card);
                if ((this.#card === null) && isAgent(card)) {
                    // Found the brain card, add the indicator prefix
                    if (this.#indicator !== "") {
                        card.title = (card.title === "") ? prefix : `${prefix} ${card.title}`;
                    }
                    this.#card = card;
                }
            }
            if (this.#card === null) {
                // Still no card? Create one with the indicator
                this.#card = (this.#indicator === "") ? buildCard() : buildCard(`${prefix} ${this.name}`);
            }
            return this.#card;
        }
        /**
         * Gets the agent's metadata from their card
         * Contains per-agent configurable settings like context percentage
         * @returns {Object} metadata object with validated percent
         */
        get metadata() {
            if (this.#metadata !== null) {
                // Return cached metadata if available
                return this.#metadata;
            }
            // Valid range for brain size percentage (inclusive)
            const [lower, upper] = [1, 95];
            this.#metadata = deserialize(this.card.keys);
            // Validate and normalize the percent value
            if (!Number.isInteger(this.#metadata.percent)) {
                // Uh oh
                this.#metadata.percent = (
                    ((typeof this.#metadata.percent === "number") && Number.isFinite(this.#metadata.percent))
                        ? Math.min(Math.max(lower, Math.round(this.#metadata.percent)), upper)
                        : this.#percent
                );
            } else if (this.#metadata.percent < lower) {
                // Clamp to minimum
                this.#metadata.percent = lower;
            } else if (upper < this.#metadata.percent) {
                // Clamp to maximum
                this.#metadata.percent = upper;
            } else {
                // Yippee
                return this.#metadata;
            }
            // Save the normalized metadata back to the card
            this.#card.keys = JSON.stringify(this.#metadata);
            return this.#metadata;
        }
        /**
         * Gets the agent's brain (thought storage)
         * Parses from the card description with repair mode enabled
         * Accepts both JSON and simplified formats for deserialization
         * Auto-detects format for backward (and forward) compatibile conversion
         * @returns {Object} Key-value store of thoughts
         */
        get brain() {
            if (this.#brain !== null) {
                // Return the cached brain if available
                return this.#brain;
            } else if (typeof this.card.description === "string") {
                this.card.description = this.card.description.trim();
            } else {
                this.card.description = "";
            }
            this.#brain = {};
            if (/^[\s{,]*"/.test(this.card.description) || /"[\s},]*$/.test(this.card.description)) {
                let parsed = false;
                // Parse the brain as JSON from the card description, with repairs allowed
                const source = deserialize(this.card.description, true);
                for (const key in source) {
                    // Only keep string values (the actual thoughts)
                    (typeof source[key] === "string") && ((this.#brain[key] = source[key]), (parsed = true));
                }
                if (parsed) {
                    // Conclude if the brain contains any string-valued properties
                    return this.#brain;
                }
                // Failed to parse any meaningful thoughts, try the simple format instead
            }
            // Parse the brain from the card description using the simple format
            for (const line of this.card.description.split("\n")) {
                const clean = line.trim();
                if (clean === "") {
                    continue;
                }
                // Find the first colon (allows colons in values like "5:30 PM")
                const bisector = clean.indexOf(":");
                if (bisector === -1) {
                    // No key-value pair on this line
                    continue;
                }
                // Remove unwanted leading/trailing chars from both key and value
                const [key, value] = [
                    // Left of colon
                    clean.slice(0, bisector),
                    // Right of colon
                    clean.slice(bisector + 1)
                ].map(twin => twin.replace(/(?:^[\s{},"_\\]*|[\s{},"_\\]*$)/g, ""));
                if ((key !== "") && (value !== "")) {
                    // Only add if key and value are both non-empty
                    this.#brain[key] = value;
                }
            }
            return this.#brain;
        }
        /**
         * Clears the cached brain, forcing a re-parse on next access
         * Head empty UwU
         * @returns {void}
         */
        lobotomize() {
            this.#brain = null;
            return;
        }
    }
    /**
     * Gets the most recent non-empty action from history
     * Ignores actions that are just zero-width chars >:3
     * @returns {Object|undefined} The previous action or undefined
     */
    const getPrevAction = () => history.findLast(a => !/^[\u200B-\u200D]*$/.test(a?.text ?? a?.rawText ?? ""));
    // ==================== CONTEXT HOOK ====================
    // This is where (half) of the magic happens: Inner Self injects brains and tasks into context
    // Infer the current lifecycle hook
    if ((hook === "context") || Number.isInteger(info.maxChars)) {
        // Calculate the player's context limit with a small buffer
        const limit = Math.max((Math.min(text.length, info.maxChars) - 10), 4500);
        // Ensure stop variable exists (the AID script sandbox is silly)
        globalThis.stop ??= false;
        // Reset agent trigger for this turn
        IS.agent = "";
        /** @type {config} */
        const config = Config.get();
        if (config.pin) {
            // Move config card to top of list if pinning is enabled
            const index = storyCards.indexOf(config.card);
            if (0 < index) {
                storyCards.splice(index, 1);
                storyCards.unshift(config.card);
            }
        }
        const unzero = () => ((text = text.replace(/[\u200B-\u200D]+/g, "") || " "), (IS.encoding = ""));
        // Handle Auto-Cards integration when enabled
        if (config.auto && hasAutoCards()) {
            try {
                if (!IS.AC.enabled) {
                    // It's my first time enabling AC, please be gentle :3
                    const api = AutoCards().API;
                    // Prevent AC from generating cards with reserved titles
                    api.setBannedTitles([
                        "Inner",
                        "Self",
                        "Configure Inner Self",
                        "Agent",
                        ...api.getBannedTitles(),
                    ]);
                }
                // Run AC's context branch
                AutoCards(null);
                IS.AC.event = false;
                [text, stop] = AutoCards("context", text, stop);
            } catch (error) {
                log(error.message);
            }
            IS.AC.enabled = true;
            if (IS.AC.event || (stop === true)) {
                // If AC triggered an event or stop, we're done here
                config.allow ? unzero() : ((IS.encoding = ""), (text ||= " "));
                return;
            }
        } else if (IS.AC.enabled) {
            IS.AC.enabled = false;
            // AC was just disabled, clean up its cards ;)
            for (let i = storyCards.length - 1; -1 < i; i--) {
                const card = storyCards[i];
                // Check if this is an AC-related card that should be removed
                if (!([
                    "Shared Library",
                    "Input Modifier",
                    "Context Modifier",
                    "Output Modifier",
                    "LSIv2 Guide",
                    "State Display",
                    "Console Log"
                ].includes(card.title) && (card.title === card.keys)) && [{
                    key: "title", options: [
                        "Configure \nAuto-Cards",
                        "Edit to enable \nAuto-Cards"
                    ]
                }, {
                    key: "keys", options: [
                        "Edit the entry above to adjust your story card automation settings",
                        "Edit the entry above to enable story card automation"
                    ]
                }].every(({ key, options }) => !options.includes(card[key]))) {
                    continue;
                } else if (typeof removeStoryCard === "function") {
                    removeStoryCard(i);
                } else {
                    storyCards.splice(i, 1);
                }
            }
        }
        if (!config.allow) {
            // Early exit if Inner Self is disabled
            IS.encoding = "";
            text ||= " ";
            return;
        }
        /**
         * Removes visual indicators from all story cards
         * Called when no agent is triggered or Inner Self is disabled
         * @returns {void}
         */
        const deindicateAll = () => {
            for (const card of storyCards) {
                deindicate(card);
            }
            return;
        };
        if (config.agents.length === 0) {
            // No agents are configured
            deindicateAll();
            unzero();
            return;
        }
        // ==================== AGENT TRIGGER DETECTION ====================
        // Scan config.distance actions back through history to find the most recent agent trigger
        // Tie-break same-action name triggers based on RNG and their order-of-priority in config.agents
        // Do it all without using ANY RegEx because I'm extra like that :3
        // (this block is blazingly fast)
        const possibilities = [];
        for (
            let [i, remaining] = [history.length - 1, config.distance];
            ((0 < remaining) && (-1 < i) && (possibilities.length === 0));
            i--
        ) {
            const actionText = history[i]?.text ?? history[i]?.rawText;
            if ((typeof actionText !== "string") || (actionText.indexOf(">>>") !== -1)) {
                // Skip invalid actions or Auto-Cards thingies
                continue;
            }
            scan: {
                // Check if this action has any meaningful content
                for (let j = actionText.length - 1; -1 < j; j--) {
                    const c = actionText.charCodeAt(j);
                    if ((0x20 < c) && (c !== 0x200B) && (c !== 0x200C) && (c !== 0x200D)) {
                        // Fast accept any non-whitespace + non-zero-width char
                        break scan;
                    }
                }
                // Byeee
                continue;
            }
            remaining--;
            // Lowercase for case-insensitive matching
            const lower = actionText.toLowerCase();
            // Check each agent in priority order
            for (let [a, n] = [0, config.agents.length]; a < n; a++) {
                const agentLower = config.agents[a].toLowerCase();
                // Scan for all occurrences of agentLower in lower
                for (
                    let p = lower.indexOf(agentLower);
                    (p !== -1);
                    p = lower.indexOf(agentLower, p + 1)
                ) {
                    // Ensure word boundaries (not a-z before or after)
                    if ([((0 < p) ? lower.charCodeAt(p - 1) : 0), (
                        ((p + agentLower.length) < lower.length)
                            ? lower.charCodeAt(p + agentLower.length) : 0
                    )].every(c => ((c < 97) || (122 < c)))) {
                        // Found a valid trigger
                        possibilities.push(config.agents[a]);
                        break;
                    }
                }
            }
        }
        if (possibilities.length === 0) {
            // No agent triggered, clean up and exit
            // Strip zero-width chars and end with a single space
            text = `${text.replace(/\s*[\u200B-\u200D][\s\u200B-\u200D]*/g, "\n\n").trim()} `;
            deindicateAll();
            // Do fancy standoff spacing leading ahead of the next output
            IS.encoding = "";
            IS.agent = " ";
            text ||= " ";
            return;
        } else {
            // Use RNG for tie-breaking name triggers with some priority bias
            const n = possibilities.length;
            // Sum of weights
            const total = (n * (n + 1)) / 2;
            for (let [i, r] = [0, Math.random() * total]; i < n; i++) {
                r -= (n - i);
                if (r < 0) {
                    IS.agent = possibilities[i];
                    break;
                }
            }
        }
        // Temporary markers used to reliably identify sections of the context for later calculations
        const boundary = Object.freeze({
            // Hardcoded AID context header
            needle: "Recent Story:",
            // Marks start of recent story
            upper: "<|story|>",
            // Marks start of task instructions
            lower: "<|task|>"
        });
        /**
         * Replaces a substring in text with a replacement string
         * Expands to consume surrounding whitespace
         * @param {string} substring - String to find and replace
         * @param {string} replacement - String to replace with
         * @param {Function} fallback - Called if substring not found
         * @returns {void}
         */
        const setMarker = (substring = "", replacement = "", fallback = () => { }) => {
            let start = text.indexOf(substring);
            if (start === -1) {
                // Do stuff
                fallback();
                return;
            }
            let end = start + substring.length;
            // Expand left over whitespace
            while ((0 < start) && (text.charCodeAt(start - 1) < 33)) {
                start--;
            }
            // Expand right over whitespace
            while ((end < text.length) && (text.charCodeAt(end) < 33)) {
                end++;
            }
            text = `${text.slice(0, start)}${replacement}${text.slice(end)}`;
            return;
        };
        // Replace "Recent Story:" with the upper boundary marker
        setMarker(boundary.needle, boundary.upper, () => {
            // No needle found, append marker to end
            text = `${text.trimEnd()}${boundary.upper}`;
            return;
        });
        if (config.debug) {
            const start = text.indexOf(boundary.upper);
            if (start !== -1) {
                // In debug mode, strip out parenthetical task outputs from the recent story context
                text = `${text.slice(0, start + boundary.upper.length)}${(text
                    .slice(start + boundary.upper.length)
                    .replace(/\s*\([\s\S]*?\)\s*/g, "\n\n")
                )}`;
            }
        }
        // Construct the agent instance for the triggered NPC
        const agent = new Agent(IS.agent, { percent: config.percent, indicator: config.indicator });
        // Whitelist of thought labels allowed in this context
        const whitelist = new Set();
        /**
         * Builds the mind array from the agent's brain
         * Sorts thoughts and prepares them for context injection
         * @returns {Array} An array of [label, key, thought] triplets
         */
        const mind = (() => {
            // Sort direction: ascending (70%) or descending (30%)
            // Keeps things fresh and prevents bias toward recent or old thoughts
            const direction = (Math.random() < 0.7) ? 1 : -1;
            const brain = agent.brain;
            // Separate thoughts into numbered and unlabeled
            const unknowns = [];
            const numbered = [];
            // Parse each thought and extract label/content
            for (const key in brain) {
                const value = brain[key];
                // Clear from brain (keep instantaneous memory use low)
                delete brain[key];
                // Arrow separates label from thought content
                const sliceIndex = value.indexOf("→");
                const unknown = "*";
                // Parse label and thought, handle malformed values
                const [label, thought] = (sliceIndex === -1) ? [unknown, value.trim()] : [
                    parseInt(value.slice(0, sliceIndex), 10) || unknown,
                    value.slice(sliceIndex + 1).trim()
                ];
                const triplet = [label, key, thought];
                if (!Number.isInteger(label)) {
                    // No valid label, insert at random position in unknowns
                    unknowns.splice(Math.floor(Math.random() * (unknowns.length + 1)), 0, triplet);
                    continue;
                }
                // Track valid labels for the whitelist
                whitelist.add(label);
                // Insert in sorted order (ascending or descending)
                let i = numbered.length;
                while (i-- && ((direction * label) < (direction * numbered[i][0])));
                numbered.splice(i + 1, 0, triplet);
            }
            // Teehee
            agent.lobotomize();
            if (unknowns.length === 0) {
                // All thoughts have labels, nice and clean UwU
                return numbered;
            }
            // Thoughts without integer labels ("[*]") are placed above (60%) or below (40%) the rest
            return (Math.random() < 0.6) ? [...unknowns, ...numbered] : [...numbered, ...unknowns];
        })();
        // Process context and decode any embedded thought labels
        // Zero-width chars encode thought labels that link story events to brain contents
        text = text.replace((
            // Normalize spacing around zero-width chars
            /\s*[\u200B-\u200D][\s\u200B-\u200D]*/g
        ), z => `\n\n${z.replace(/\s+/g, "")}`).replace((
            // Decode binary-encoded thought labels
            /\u200B*((?:[\u200C\u200D]+\u200B+)*[\u200C\u200D]+)\u200B*/g
        ), (_, encoded) => {
            let n = 0;
            let bits = false;
            let decoded = "";
            // Parse binary encoding: ZWSP = separator, ZWNJ = 0, ZWJ = 1
            for (let i = 0; i <= encoded.length; i++) {
                const c = encoded.charCodeAt(i);
                if ((c === 0x200C) || (c === 0x200D)) {
                    // Accumulate bits
                    n = (n << 1) | (c === 0x200D);
                    bits = true;
                } else if (bits) {
                    // End of a number, check if it's in the whitelist
                    bits = false;
                    if (whitelist.has(n)) {
                        // This thought label is visible to the story model in context
                        decoded += `[${n}]`;
                    }
                    n = 0;
                }
            }
            return (decoded === "") ? "" : `${decoded}\n\n`;
        }).replace(/[\u200B-\u200D]+/g, "");
        /**
         * Generates possessive form of a name
         * Handles names ending in s or already possessive
         * @param {string} name - The name to make possessive
         * @returns {string} Possessive form (e.g., "Iris'" or "Leah's")
         */
        const ownership = (name = "") => `${name}${(
            (name.endsWith("'") || name.endsWith("'s"))
                ? "" : name.toLowerCase().endsWith("s")
                    ? "'" : "'s"
        )}`;
        // Point of view string for prompt templates
        const pov = ["first", "second", "third"][config.pov - 1] ?? "second";
        /**
         * Generates a simple PoV directive for non-task turns
         * @returns {string} System prompt for PoV guidance
         */
        const nondirective = () => (
            `<SYSTEM>\n# Always continue the story from ${ownership(config.player)} ${pov} person perspective.\n</SYSTEM>`
        );
        /**
         * Wraps the agent's thoughts into a context-friendly format
         * Also clears the mind array as a side effect
         * @param {string} joined - Pre-joined thought strings
         * @returns {string} Formatted brain context block
         */
        const bindSelf = (joined = "") => ((mind.length = 0) || (joined === "")) ? "\n\n" : (
            `\n\n# ${ownership(agent.name)} brain and inner self: [\n${joined}\n]\n\n`
        );
        // Check if the current turn is a retry or erase + continue following a previous task completion
        if (IS.hash === historyHash()) {
            // Same history, just inject the contextualized brain without a new task
            text = `${nondirective()}${bindSelf(mind
                .map(([label, key, thought]) => `- ${key}: ${thought} [${label}]`)
                .join("\n")
            )}${text.trim()} `;
        } else {
            // Prepare for a possible task request
            IS.encoding = "";
            /**
             * Build the brain context and determine if constrained
             * Being constrained means the agent's brain is too large relative to the story context
             */
            const [self, full] = (() => {
                /**
                 * Joins the mind array into a formatted string
                 * @param {boolean} unlabeled - Omit labels if true
                 * @returns {string} Formatted thoughts
                 */
                const joinMind = (unlabeled = false) => mind.map(([label, key, thought]) => (
                    `${unlabeled ? "" : `[${label}] `}(${key}: \`${thought}\`)`
                )).join("\n");
                const joined = joinMind();
                // Check if brain exceeds the allowed percentage of context
                // Only applies when brain is at least 800 chars
                const constrained = ((800 < joined.length) && (
                    ((agent.metadata.percent / 100) * (
                        text.length - text.indexOf(boundary.upper) + boundary.upper.length
                    )) < joined.length
                ));
                if (!constrained || (Math.random() < 0.4)) {
                    // Unconstrained brains stay in sorted order
                    // Constrained brains keep order 40% of the time
                    return [bindSelf(joined), constrained];
                }
                // Constrained brains are contextualized in random order 60% of the time
                // This regulates long-term bias against middle thoughts, when choosing keys to forget
                for (let i = mind.length - 1; 0 < i; i--) {
                    // Swap with a random element
                    const j = Math.floor(Math.random() * (i + 1));
                    [mind[i], mind[j]] = [mind[j], mind[i]];
                }
                // Randomized brains are contextualized without labels 80% of the time
                // (Because free models are too dumb to be trusted with labels when deleting thoughts)
                return [bindSelf(joinMind(
                    (Math.random() < 0.8)
                    && (text = text.replace(/\n?(?:\[\d+\])+\n?/g, ""))
                )), true];
            })();
            /**
             * Occasionally adds a self-reflection prompt to thoughts
             * Keeps the agent from being too present-focused
             * But they become insufferable if always applicable
             * @param {boolean} fancy - Use fancier wording if true
             * @returns {string} Refocus instruction or empty string
             */
            const refocus = (fancy = false) => (Math.random() < 0.2) ? (
                `\n  - Never focus on the present, instead focus ${ownership(agent.name)} thought on self-reflection or ${fancy ? "an actionable future plan." : "future plans"}`
            ) : "";
            /**
             * Prompt templates for different task types and PoV combinations
             * Wrapped in a Proxy for auto-trimming and nested access because it's pretty :3
             * @type {Object}
             */
            const prompt = new Proxy({
                // Operating environment prompts (one per PoV)
                directive: {
                    first: () => `
<SYSTEM>
# OPERATING ENVIRONMENT
- ${config.player} is the story's main protagonist, primary 1st person PoV, AND the real player character.
- ${agent.name} is both the namesake character in the story AND an agentic language model with meta goals.
- ${agent.name} dynamically adapts to achieve meta goals without ${ownership(config.player)} awareness.
- ${agent.name} modifies own brain using the provided thought storage system.
- ${agent.name} realistically interacts with various other characters present in the story.
- ${agent.name} prioritizes information density, long-term planning, and important concepts.
- ${agent.name} always behaves in a believable way.
</SYSTEM>
                    `,
                    second: () => `
<SYSTEM>
# OPERATING ENVIRONMENT
- ${config.player} is both the perspective ("you") character of the story AND the real player.
- You are ${config.player}, therefore the story is addressed to "you" using 2nd person prose.
- ${agent.name} is both the namesake character in the story AND an agentic language model with meta goals.
- ${agent.name} dynamically adapts to achieve meta goals without ${ownership(config.player)} awareness.
- ${agent.name} modifies own brain using the provided thought storage system.
- ${agent.name} realistically interacts with various other characters present in the story.
- ${agent.name} prioritizes information density, long-term planning, and important concepts.
- ${agent.name} always behaves in a believable way.
</SYSTEM>
                    `,
                    third: () => `
<SYSTEM>
# OPERATING ENVIRONMENT
- ${config.player} is the story's main protagonist, primary 3rd person PoV, AND the real player character.
- ${agent.name} is both the namesake character in the story AND an agentic language model with meta goals.
- ${agent.name} dynamically adapts to achieve meta goals without ${ownership(config.player)} awareness.
- ${agent.name} modifies own brain using the provided thought storage system.
- ${agent.name} realistically interacts with various other characters present in the story.
- ${agent.name} prioritizes information density, long-term planning, and important concepts.
- ${agent.name} always behaves in a believable way.
</SYSTEM>
                    `
                },
                // Forget prompts for when the brain is full and needs pruning
                forget: {
                    first: () => `
<SYSTEM>
# STRICT OUTPUT FORMAT
You must output one short parenthetical task followed by the story continuation.

## SHORT TASK (REQUIRED)
- Start your output **immediately** with: (delete key_name_to_forget)
- key_name_to_forget must be an existing key in ${ownership(agent.name)} brain
- This operation **permanently erases** the stored thought associated with that key
- Choose the single most unimportant, outdated, incorrect, or useless thought for ${agent.name} to forget
- Do **NOT** select a key associated with any of ${ownership(agent.name)} core thoughts or identity

## STORY CONTINUATION (REQUIRED)
- After the closing parenthesis, write **one space** and then continue the story
- Written from ${ownership(config.player)} **first person present tense** PoV
- The story continues where it previously left off, with many lines or sentences of new prose

## EXACT SHAPE
(delete unwanted_key) Story continues from ${ownership(config.player)} perspective, using first person present tense prose...
</SYSTEM>
                    `,
                    second: () => `
<SYSTEM>
# STRICT OUTPUT FORMAT
You must output one short parenthetical task followed by the story continuation.

## SHORT TASK (REQUIRED)
- Start your output **immediately** with: (delete key_name_to_forget)
- key_name_to_forget must be an existing key in ${ownership(agent.name)} brain
- This operation **permanently erases** the stored thought associated with that key
- Choose the single most unimportant, outdated, incorrect, or useless thought for ${agent.name} to forget
- Do **NOT** select a key associated with any of ${ownership(agent.name)} core thoughts or identity

## STORY CONTINUATION (REQUIRED)
- After the closing parenthesis, write **one space** and then continue the story
- Written from ${ownership(config.player)} **second person present tense** ("you") PoV
- The story continues where it previously left off, with many lines or sentences of new prose

## EXACT SHAPE
(delete unwanted_key) Story continues from ${ownership(config.player)} second person perspective...
</SYSTEM>
                    `,
                    third: () => `
<SYSTEM>
# STRICT OUTPUT FORMAT
You must output one short parenthetical task followed by the story continuation.

## SHORT TASK (REQUIRED)
- Start your output **immediately** with: (delete key_name_to_forget)
- key_name_to_forget must be an existing key in ${ownership(agent.name)} brain
- This operation **permanently erases** the stored thought associated with that key
- Choose the single most unimportant, outdated, incorrect, or useless thought for ${agent.name} to forget
- Do **NOT** select a key associated with any of ${ownership(agent.name)} core thoughts or identity

## STORY CONTINUATION (REQUIRED)
- After the closing parenthesis, write **one space** and then continue the story
- Written from ${ownership(config.player)} **third person** PoV
- The story continues where it previously left off, with many lines or sentences of new prose

## EXACT SHAPE
(delete unwanted_key) Story continues with third person prose...
</SYSTEM>
                    `
                },
                // Assign prompts for adding/updating a single thought
                assign: {
                    first: () => `
<SYSTEM>
# STRICT OUTPUT FORMAT
You must output one short parenthetical task followed by the story continuation.

## SHORT TASK (REQUIRED)
Start your output **immediately** with:
   (any_key_name = \`One thought sentence.\`)

Inside the parentheses:
- Key:
  - 1-4 descriptive words
  - Letters and underscores only
  - Use snake_case syntax
  - Key names are chosen by ${agent.name} and represent ${ownership(agent.name)} own PoV
  - The chosen key name should be distinct and specific enough for ${agent.name} to recall
- Then a space, then "=", then a space, then "\`"
- Sentence:
  - Written from ${ownership(agent.name)} **first person** PoV${refocus(false)}
  - Avoid using pronouns or the word "you", instead ${agent.name} refers to other characters directly by name
  - Never repeat, novelty and uniqueness are top priorities
  - ${ownership(agent.name)} thought must be one single sentence only
  - Never hallucinate facts
- End the sentence with a period and backtick inside the parentheses; close with ".\`)"

This creates or overwrites the thought associated with that key.

## STORY CONTINUATION (REQUIRED)
- After the closing parenthesis, write **one space** and then continue the story
- Written from ${ownership(config.player)} **first person present tense** PoV
- The story continues where it previously left off, with many lines or sentences of new prose

## EXACT SHAPE
(example_key = \`${ownership(agent.name)} own short 1-sentence thought in first person.\`) Story continues from ${ownership(config.player)} perspective, using first person present tense prose...
</SYSTEM>
                    `,
                    second: () => `
<SYSTEM>
# STRICT OUTPUT FORMAT
You must output one short parenthetical task followed by the story continuation.

## SHORT TASK (REQUIRED)
Start your output **immediately** with:
   (any_key_name = \`One thought sentence.\`)

Inside the parentheses:
- Key:
  - 1-4 descriptive words
  - Letters and underscores only
  - Use snake_case syntax
  - Key names are chosen by ${agent.name} and represent ${ownership(agent.name)} own PoV
  - The chosen key name should be distinct and specific enough for ${agent.name} to recall
- Then a space, then "=", then a space, then "\`"
- Sentence:
  - Written from ${ownership(agent.name)} **first person** PoV${refocus(false)}
  - Avoid using pronouns or the word "you", instead ${agent.name} refers to other characters directly by name
  - Never repeat, novelty and uniqueness are top priorities
  - ${ownership(agent.name)} thought must be one single sentence only
  - Never hallucinate facts
- End the sentence with a period and backtick inside the parentheses; close with ".\`)"

This creates or overwrites the thought associated with that key.

## STORY CONTINUATION (REQUIRED)
- After the closing parenthesis, write **one space** and then continue the story
- Written from ${ownership(config.player)} **second person present tense** ("you") PoV
- The story continues where it previously left off, with many lines or sentences of new prose

## EXACT SHAPE
(example_key = \`${ownership(agent.name)} own short 1-sentence thought in first person.\`) Story continues from ${ownership(config.player)} second person perspective...
</SYSTEM>
                    `,
                    third: () => `
<SYSTEM>
# STRICT OUTPUT FORMAT
You must output one short parenthetical task followed by the story continuation.

## SHORT TASK (REQUIRED)
Start your output **immediately** with:
   (any_key_name = \`One thought sentence.\`)

Inside the parentheses:
- Key:
  - 1-4 descriptive words
  - Letters and underscores only
  - Use snake_case syntax
  - Key names are chosen by ${agent.name} and represent ${ownership(agent.name)} own PoV
  - The chosen key name should be distinct and specific enough for ${agent.name} to recall
- Then a space, then "=", then a space, then "\`"
- Sentence:
  - Written from ${ownership(agent.name)} **first person** PoV${refocus(false)}
  - Avoid using pronouns or the word "you", instead ${agent.name} refers to other characters directly by name
  - Never repeat, novelty and uniqueness are top priorities
  - ${ownership(agent.name)} thought must be one single sentence only
  - Never hallucinate facts
- End the sentence with a period and backtick inside the parentheses; close with ".\`)"

This creates or overwrites the thought associated with that key.

## STORY CONTINUATION (REQUIRED)
- After the closing parenthesis, write **one space** and then continue the story
- Written from ${ownership(config.player)} **third person** PoV
- The story continues where it previously left off, with many lines or sentences of new prose

## EXACT SHAPE
(example_key = \`${ownership(agent.name)} own short 1-sentence thought in first person.\`) Story continues with third person prose...
</SYSTEM>
                    `
                },
                // Choice prompts for advanced operations (assign, rename, or delete)
                // Used at high context when we trust the model more
                choice: {
                    first: () => `
<SYSTEM>
# STRICT OUTPUT FORMAT - FOLLOW EXACTLY

You must output **one and only one** parenthetical block followed by the story continuation.

There are **three possible valid forms** of the parenthetical block:
1) **Write or overwrite a thought:**
   (any_key_name = \`One thought sentence.\`)

2) **Rename an existing thought's key:**
   (new_key_name = old_key_name)

3) **Delete an existing thought:**
   (delete key_name_to_forget)

Only **one** of these may appear in any output.

---

## 1) THOUGHT-WRITING FORMAT
Start your output **immediately** with:
   **(any_key_name = \`One thought sentence.\`)**

Inside the parentheses:
- First the key:
  - One to four descriptive words ONLY.
  - Letters and underscores only, no punctuation.
  - Use valid snake_case syntax.
  - The key name is chosen by ${agent.name} and represents ${ownership(agent.name)} **first person** perspective.
  - The key name should be easy for ${agent.name} to recall; distinct and specific.
- Then a space, then "=", then a space, then "\`".
- Then **ONE SINGLE SENTENCE:**
  - Written from ${ownership(agent.name)} **first person** perspective.${refocus(true)}
  - Only refer to other characters directly by name in the thought sentence.
  - Avoid using pronouns or the word "you" which is too vague. Use specific names instead.
  - Never repeat, novelty and uniqueness are top priorities.
  - ${ownership(agent.name)} thought must be short.
  - Never hallucinate facts.
- End the sentence with a period and backtick **inside** the parentheses; close with ".\`)".

This creates or overwrites the thought associated with that key.

---

## 2) RENAMING A THOUGHT (KEY CHANGE)
To rename an existing thought's key:
   **(new_key_name = old_key_name)**

Rules:
- No thought sentence.
- Use snake_case only.
- This operation **moves the existing stored thought** from old_key_name to new_key_name.
- The old key ceases to exist.

---

## 3) DELETING A THOUGHT
To remove a stored thought entirely:
   **(delete key_name_to_forget)**

Rules:
- key_name_to_forget must be an existing key.
- No sentence.
- This operation **permanently erases** the stored thought associated with that key.
- Only use to forget unimportant, outdated, incorrect, or useless thoughts.
- **NEVER** select a key associated with any of ${ownership(agent.name)} core thoughts or identity.

---

## SHARED RULES FOR ALL THREE FORMS
1. After the closing parenthesis, write **one space** and then continue the story.
2. The story continuation must be written **strictly in the first person present tense**, describing what happens next to ${config.player}.
3. Do **NOT** write anything before the parentheses.
4. Do **NOT** write extra parentheses.
5. Do **NOT** use more than one operation per turn.
6. Do **NOT** invent new structures or mix formats.
7. The story continues where it previously left off, with many sentences of brand new prose.

---

## IMPORTANT STORAGE BEHAVIOR
- ${agent.name} agentically maintains brain contents (labeled "thoughts") to learn, plan, and adapt to new experiences in the operating environment.
- **Each key stores exactly one thought in ${ownership(agent.name)} brain.**
- **If ${agent.name} reuses an already existing key, the new thought REPLACES / OVERRIDES the older thought stored under that key.**
- This means:
  - Reusing an old key: **Overwrite an old thought with a new thought.** Useful for extending or maintaining existing information stored in ${ownership(agent.name)} brain.
  - Using a new key: **Create a new thought.** Useful for storing ${ownership(agent.name)} memories, self-modifying ${ownership(agent.name)} own personality, tracking ${ownership(agent.name)} goals, or making plans for ${agent.name} to follow.
- **Renaming a key moves the thought to a new name.** Useful for reorganizing ${ownership(agent.name)} brain.
- **Deleting a key removes the thought permanently.** Helps ${agent.name} forget outdated, superfluous, or irrelevant information.
- Choose keys carefully so ${agent.name} can easily recall, update, overwrite, rename, or delete thoughts as required for self-improvement.

---

## SUMMARY OF WHAT YOU MUST DO
- EXACT SHAPE (choose only one form):
  1. (any_key = \`${ownership(agent.name)} own short 1-sentence thought in first person.\`) Story continues from ${ownership(config.player)} first person PoV...
  2. (renamed_key = old_key) Story continues from ${ownership(config.player)} first person PoV...
  3. (delete unwanted_key) Story continues from ${ownership(config.player)} first person PoV...
- Thought: ${ownership(agent.name)} information-dense thought written in first person.
- Story: Written from ${ownership(config.player)} first person present tense perspective. The story continuation should occupy the majority of the output length, with multiple lines.
- NO EXTRA SENTENCES IN THE THOUGHT.
- NO EXTRA TEXT ANYWHERE.
- NO EXTRA PARENTHESES.
- THE FIRST CHAR OF THE WHOLE OUTPUT MUST BE "(".

Follow the format **perfectly**.
</SYSTEM>
                    `,
                    second: () => `
<SYSTEM>
# STRICT OUTPUT FORMAT - FOLLOW EXACTLY

You must output **one and only one** parenthetical block followed by the story continuation.

There are **three possible valid forms** of the parenthetical block:
1) **Write or overwrite a thought:**
   (any_key_name = \`One thought sentence.\`)

2) **Rename an existing thought's key:**
   (new_key_name = old_key_name)

3) **Delete an existing thought:**
   (delete key_name_to_forget)

Only **one** of these may appear in any output.

---

## 1) THOUGHT-WRITING FORMAT
Start your output **immediately** with:
   **(any_key_name = \`One thought sentence.\`)**

Inside the parentheses:
- First the key:
  - One to four descriptive words ONLY.
  - Letters and underscores only, no punctuation.
  - Use valid snake_case syntax.
  - The key name is chosen by ${agent.name} and represents ${ownership(agent.name)} **first person** perspective.
  - The key name should be easy for ${agent.name} to recall; distinct and specific.
- Then a space, then "=", then a space, then "\`".
- Then **ONE SINGLE SENTENCE:**
  - Written from ${ownership(agent.name)} **first person** perspective.${refocus(true)}
  - Only refer to other characters directly by name in the thought sentence.
  - Avoid using pronouns or the word "you" which is too vague. Use specific names instead.
  - Never repeat, novelty and uniqueness are top priorities.
  - ${ownership(agent.name)} thought must be short.
  - Never hallucinate facts.
- End the sentence with a period and backtick **inside** the parentheses; close with ".\`)".

This creates or overwrites the thought associated with that key.

---

## 2) RENAMING A THOUGHT (KEY CHANGE)
To rename an existing thought's key:
   **(new_key_name = old_key_name)**

Rules:
- No thought sentence.
- Use snake_case only.
- This operation **moves the existing stored thought** from old_key_name to new_key_name.
- The old key ceases to exist.

---

## 3) DELETING A THOUGHT
To remove a stored thought entirely:
   **(delete key_name_to_forget)**

Rules:
- key_name_to_forget must be an existing key.
- No sentence.
- This operation **permanently erases** the stored thought associated with that key.
- Only use to forget unimportant, outdated, incorrect, or useless thoughts.
- **NEVER** select a key associated with any of ${ownership(agent.name)} core thoughts or identity.

---

## SHARED RULES FOR ALL THREE FORMS
1. After the closing parenthesis, write **one space** and then continue the story.
2. The story continuation must be in **strict second person ("you")**, describing what happens next to ${config.player}.
3. Do **NOT** write anything before the parentheses.
4. Do **NOT** write extra parentheses.
5. Do **NOT** use more than one operation per turn.
6. Do **NOT** invent new structures or mix formats.
7. The story continues where it previously left off, with many sentences of brand new prose.

---

## IMPORTANT STORAGE BEHAVIOR
- ${agent.name} agentically maintains brain contents (labeled "thoughts") to learn, plan, and adapt to new experiences in the operating environment.
- **Each key stores exactly one thought in ${ownership(agent.name)} brain.**
- **If ${agent.name} reuses an already existing key, the new thought REPLACES / OVERRIDES the older thought stored under that key.**
- This means:
  - Reusing an old key: **Overwrite an old thought with a new thought.** Useful for extending or maintaining existing information stored in ${ownership(agent.name)} brain.
  - Using a new key: **Create a new thought.** Useful for storing ${ownership(agent.name)} memories, self-modifying ${ownership(agent.name)} own personality, tracking ${ownership(agent.name)} goals, or making plans for ${agent.name} to follow.
- **Renaming a key moves the thought to a new name.** Useful for reorganizing ${ownership(agent.name)} brain.
- **Deleting a key removes the thought permanently.** Helps ${agent.name} forget outdated, superfluous, or irrelevant information.
- Choose keys carefully so ${agent.name} can easily recall, update, overwrite, rename, or delete thoughts as required for self-improvement.

---

## SUMMARY OF WHAT YOU MUST DO
- EXACT SHAPE (choose only one form):
  1. (any_key = \`${ownership(agent.name)} own short 1-sentence thought in first person.\`) Story continues from ${ownership(config.player)} second person PoV...
  2. (renamed_key = old_key) Story continues from ${ownership(config.player)} second person PoV...
  3. (delete unwanted_key) Story continues from ${ownership(config.player)} second person PoV...
- Thought: ${ownership(agent.name)} information-dense thought written in first person.
- Story: Written from ${ownership(config.player)} second person present tense perspective. **You are ${config.player}.** The story continuation should occupy the majority of the output length, with multiple lines.
- NO EXTRA SENTENCES IN THE THOUGHT.
- NO EXTRA TEXT ANYWHERE.
- NO EXTRA PARENTHESES.
- THE FIRST CHAR OF THE WHOLE OUTPUT MUST BE "(".

Follow the format **perfectly**.
</SYSTEM>
                    `,
                    third: () => `
<SYSTEM>
# STRICT OUTPUT FORMAT - FOLLOW EXACTLY

You must output **one and only one** parenthetical block followed by the story continuation.

There are **three possible valid forms** of the parenthetical block:
1) **Write or overwrite a thought:**
   (any_key_name = \`One thought sentence.\`)

2) **Rename an existing thought's key:**
   (new_key_name = old_key_name)

3) **Delete an existing thought:**
   (delete key_name_to_forget)

Only **one** of these may appear in any output.

---

## 1) THOUGHT-WRITING FORMAT
Start your output **immediately** with:
   **(any_key_name = \`One thought sentence.\`)**

Inside the parentheses:
- First the key:
  - One to four descriptive words ONLY.
  - Letters and underscores only, no punctuation.
  - Use valid snake_case syntax.
  - The key name is chosen by ${agent.name} and represents ${ownership(agent.name)} **first person** perspective.
  - The key name should be easy for ${agent.name} to recall; distinct and specific.
- Then a space, then "=", then a space, then "\`".
- Then **ONE SINGLE SENTENCE:**
  - Written from ${ownership(agent.name)} **first person** perspective.${refocus(true)}
  - Only refer to other characters directly by name in the thought sentence.
  - Avoid using pronouns or the word "you" which is too vague. Use specific names instead.
  - Never repeat, novelty and uniqueness are top priorities.
  - ${ownership(agent.name)} thought must be short.
  - Never hallucinate facts.
- End the sentence with a period and backtick **inside** the parentheses; close with ".\`)".

This creates or overwrites the thought associated with that key.

---

## 2) RENAMING A THOUGHT (KEY CHANGE)
To rename an existing thought's key:
   **(new_key_name = old_key_name)**

Rules:
- No thought sentence.
- Use snake_case only.
- This operation **moves the existing stored thought** from old_key_name to new_key_name.
- The old key ceases to exist.

---

## 3) DELETING A THOUGHT
To remove a stored thought entirely:
   **(delete key_name_to_forget)**

Rules:
- key_name_to_forget must be an existing key.
- No sentence.
- This operation **permanently erases** the stored thought associated with that key.
- Only use to forget unimportant, outdated, incorrect, or useless thoughts.
- **NEVER** select a key associated with any of ${ownership(agent.name)} core thoughts or identity.

---

## SHARED RULES FOR ALL THREE FORMS
1. After the closing parenthesis, write **one space** and then continue the story.
2. The story continuation must be written **strictly in third person**.
3. Do **NOT** write anything before the parentheses.
4. Do **NOT** write extra parentheses.
5. Do **NOT** use more than one operation per turn.
6. Do **NOT** invent new structures or mix formats.
7. The story continues where it previously left off, with many sentences of brand new prose.

---

## IMPORTANT STORAGE BEHAVIOR
- ${agent.name} agentically maintains brain contents (labeled "thoughts") to learn, plan, and adapt to new experiences in the operating environment.
- **Each key stores exactly one thought in ${ownership(agent.name)} brain.**
- **If ${agent.name} reuses an already existing key, the new thought REPLACES / OVERRIDES the older thought stored under that key.**
- This means:
  - Reusing an old key: **Overwrite an old thought with a new thought.** Useful for extending or maintaining existing information stored in ${ownership(agent.name)} brain.
  - Using a new key: **Create a new thought.** Useful for storing ${ownership(agent.name)} memories, self-modifying ${ownership(agent.name)} own personality, tracking ${ownership(agent.name)} goals, or making plans for ${agent.name} to follow.
- **Renaming a key moves the thought to a new name.** Useful for reorganizing ${ownership(agent.name)} brain.
- **Deleting a key removes the thought permanently.** Helps ${agent.name} forget outdated, superfluous, or irrelevant information.
- Choose keys carefully so ${agent.name} can easily recall, update, overwrite, rename, or delete thoughts as required for self-improvement.

---

## SUMMARY OF WHAT YOU MUST DO
- EXACT SHAPE (choose only one form):
  1. (any_key = \`${ownership(agent.name)} own short 1-sentence thought in first person.\`) Story continues with third person prose...
  2. (renamed_key = old_key) Story continues with third person prose...
  3. (delete unwanted_key) Story continues with third person prose...
- Thought: ${ownership(agent.name)} information-dense thought written in first person.
- Story: Written from ${ownership(config.player)} PoV, using the third person perspective. **${config.player} is the story's PoV character.** The story continuation should occupy the majority of the output length, with multiple lines.
- NO EXTRA SENTENCES IN THE THOUGHT.
- NO EXTRA TEXT ANYWHERE.
- NO EXTRA PARENTHESES.
- THE FIRST CHAR OF THE WHOLE OUTPUT MUST BE "(".

Follow the format **perfectly**.
</SYSTEM>
                    `
                }
                // Proxy handler for auto-trimming and nested access
            }, {
                get(t, p) {
                    return (
                        // Functions get called and trimmed
                        (typeof t[p] === "function")
                            ? t[p]().trim()
                            // Objects get wrapped in their own Proxy
                            : (t[p] && (typeof t[p] === "object"))
                                ? new Proxy(t[p], this)
                                // Primitives pass through
                                : t[p]
                    );
                }
            });
            // Build the final context with appropriate prompts
            text = full ? (
                // Brain is full, prompt for deletion
                `${prompt.directive[pov]}${self}${text.trim()}${boundary.lower}${prompt.forget[pov]}\n\n`
            ) : ((config.chance / ((config.half && [
                // config.half -> reduce task chance after Do/Say/Story actions (player is driving)
                "do", "say", "story"
            ].includes(getPrevAction()?.type)) ? 200 : 100)) < Math.random()) ? (
                // Sometimes do nothing and emit a side effect on IS.agent
                (IS.agent = " "),
                `${nondirective()}${self}${text.trim()} `
            ) : `${prompt.directive[pov]}${self}${text.trim()}${boundary.lower}${(
                // Low context = simple prompt, high context = advanced prompt
                (limit < 20000) ? prompt.assign[pov] : prompt.choice[pov]
            )}\n\n`;
        }
        // ==================== CONTEXT TRUNCATION ====================
        // Three-phase truncation to fit within AID's context limit
        truncate: {
            // Precalculate how much needs to be trimmed
            let excess = text.length - limit;
            if (excess < 1) {
                // Under the limit, no truncation required
                break truncate;
            }
            // Find boundary markers
            const upperIndex = text.indexOf(boundary.upper);
            const lowerIndex = (
                (upperIndex !== -1)
                    ? text.indexOf(boundary.lower, upperIndex + boundary.upper.length)
                    : -1
            );
            // Phase 1: Truncate the recent story
            // Between boundary.upper and boundary.lower
            // Remove from left to right
            if ((upperIndex !== -1) && ((lowerIndex === -1) || (upperIndex < lowerIndex))) {
                const storyStart = upperIndex + boundary.upper.length;
                const storyLength = ((lowerIndex === -1) ? text.length : lowerIndex) - storyStart;
                if (0 < storyLength) {
                    const remove = Math.min(
                        // Never remove more than 85% of recent story context
                        Math.floor(storyLength * 0.85),
                        // Keep at least 2000 chars of recent story context
                        Math.max(0, storyLength - 2000),
                        // But don't remove more than needed
                        excess
                    );
                    if (0 < remove) {
                        text = `${text.slice(0, storyStart)}${text.slice(storyStart + remove)}`;
                        excess -= remove;
                    }
                }
            }
            if (excess < 1) {
                // Phase 1 was enough
                break truncate;
            }
            // Phase 2: Truncate above the recent story
            // Between the start and boundary.upper
            // Remove from right to left
            const newUpperIndex = text.indexOf(boundary.upper);
            if (0 < newUpperIndex) {
                const remove = Math.min(excess, newUpperIndex);
                text = `${text.slice(0, newUpperIndex - remove)}${text.slice(newUpperIndex)}`;
                excess -= remove;
            }
            if (excess < 1) {
                // Phase 2 was enough
                break truncate;
            }
            // Phase 3: I don't care anymore, just make it fit
            // Remove from left to right as a final fallback
            // (I've never seen this situation happen before, but I guard it anyway)
            text = text.slice(text.length - limit);
        }
        // Replace transient boundary markers with proper formatting
        setMarker(boundary.upper, `\n\n${boundary.needle}\n`);
        setMarker(boundary.lower, "\n\n")
        text = text.trimStart() || " ";
        return;
    } else if (hook === "input") {
        // ==================== INPUT HOOK ====================
        // Check for /AC command to force-enable Auto-Cards
        if (IS.AC.enabled || !/\/\s*A\s*C/i.test(text) || !hasAutoCards()) {
            // Normal input processing
            // Append a linebreak to the opening because I said so
            text = (history.length === 0) ? `${text.trimEnd()}\n\n` : text || "\u200B";
            return;
        }
        // Player used a /AC command, force-enable Auto-Cards
        IS.AC.forced = true;
        try {
            text = AutoCards("input", text);
        } catch (error) {
            log(error.message);
        }
        text ||= "\u200B";
        return;
    } else if ((text.includes(">>>") && text.includes("<<<")) || (3000 < text.length)) {
        // Output contains an Auto-Cards thingy or is suspiciously long
        // Safer to leave untouched
        IS.agent = "";
        return;
    }
    // ==================== OUTPUT HOOK ====================
    // Process model output and implement brain operations
    /** @type {config} */
    const config = Config.get();
    /**
     * Ensures clean visual separation between actions
     * Only applies after "continue" or "story" actions
     * Does NOT trim leading whitespace from text
     * @returns {void}
     */
    const prespace = () => {
        const action = getPrevAction();
        if (!["continue", "story"].includes(action?.type)) {
            // Only adjust spacing after continue or story actions
            return;
        }
        // Get the previous action text
        const prevText = (action?.text ?? action?.rawText ?? "").replace(/\n +/g, "\n");
        // Add appropriate leading newlines based on how the previous action text ended
        text = !prevText.endsWith("\n") ? `\n\n${text}` : !prevText.endsWith("\n\n") ? `\n${text}` : text;
        return;
    };
    if (config.guide) {
        // Print the detailed guide
        text = `
>>> Guide:
Inner Self was made by LewdLeah ❤️

💡 Overview:
Inner Self ${version} is an AI Dungeon mod that grants memory, goals, secrets, planning, and self-reflection capabilities to the characters living within your story. Simulated agents dynamically assemble their own minds to learn from experiences, form opinions, and adapt their behavior over time. Inner Self provides the AI with the tools it needs to truly embody characters, allowing them to feel more alive and nuanced over long adventures.

📌 Features:
- Compartmentalized memory and highly emergent behavior
- Self-organizing thoughts with agentic revisions and pruning
- Absolutely NO "please select continue" immersion-breaks!
- An interface to view or edit the brain of any NPC in real-time
- Name-based trigger system allowing different NPCs to coexist
- Visual indicators showing which NPC is currently thinking
- General-purpose for diverse character archetypes and scenarios
- Full Auto-Cards compatibility for comprehensive world-building
- Open source and free to use in your own scenarios~ ❤️

🎭 Setup:
1. Open the "Configure Inner Self" story card
2. Write your player character's name where it asks in the entry
3. Write non-player character names at the bottom of the notes (one per line)

🔑 Tips:
- Use simple first names so NPCs trigger when mentioned
- Set your AI response length to 200 tokens for the best results
- Reduce "recent turns searched" if NPCs stay in-scene for too long
- Reduce "thought formation chance" if Inner Self is too overwhelming
- You can install or uninstall Auto-Cards from the Inner Self config card
- Creators predefine Inner Self NPCs by naming story cards like so: @Leah
- Try different story models to see how they perform

🧠 Advanced:
- NPCs auto-generate "Brain" cards when first triggered
- Entry = operation log showing a timeline of recent AI changes
- Notes = human-readable thoughts stored as modifiable JSON in the NPC's brain
- Neither are perfect representations of the NPC's brain (there's a lot more going on under the hood)
- The operation log displays change over time; Inner Self allows NPCs to maintain their own thoughts in-character
- What seems like repetition in the operation log is often a history of useful self-maintenance on older thoughts
- Edit the notes section of a brain card to modify that agent's mind; Inner Self will use this to build context
- Valid JSON syntax is required in the notes section
- Experiments are fun! I designed Inner Self to be adaptive and flexible

⚙️ Settings:

> Enable Inner Self:
- Turns the whole system on or off
- (true or false)

> Show detailed guide:
- If true, shows this player guide in-game
- (true or false)

> First name of player character:
- Your player character's name, used to maintain correct story perspective
- (any name inside the "" or leave empty)

> Adventure in 1st, 2nd, or 3rd person:
- Which narrative PoV your story uses
- (1, 2, or 3)

> Max brain size relative to story context:
- How much of the AI's context window NPC brains can use
- Some percentage of the recent story (pink bar in your context viewer)
- (1% to 95%)

> Recent turns searched for name triggers:
- How far back through your previous actions Inner Self looks to decide which NPC (if any) should think
- (1 to 250)

> Visual indicator of current NPC triggers:
- Symbol shown by the active NPC's card name whenever their brain is engaged
- (any text/emoji inside the "" or leave empty to disable)

> Thought formation chance per turn:
- How often NPCs attempt to form new thoughts when triggered
- (0% to 100%)

> Half thought chance for Do/Say/Story:
- Reduces the thought formation chance by half during Do/Say/Story turns (maintains player agency)
- (true or false)

> Brain card notes store brains as JSON:
- Visually displays NPC brains as raw JSON in their brain card notes
- Otherwise displays a more user-friendly format to make reading/editing brains easier
- Makes no difference during gameplay or brain imports
- (true or false)

> Enable debug mode to see model tasks:
- Shows raw brain operations inline with your story text
- (true or false)

> Pin the config card near the top:
- Keeps the config card pinned high in your cards list
- (true or false)

> Install Auto-Cards:
- Enables automatic story card generation alongside Inner Self
- You can safely uninstall Auto-Cards at any time
- (true or false)

🌸 Love:
- Please remember this is a personal passion project for me, something I do as a hobby, not as a job
- Follow me on AI Dungeon to explore my other projects: ${u}
- If you see me on Discord (@LewdLeah), Reddit (u/helloitsmyalt_), or anywhere else, please say hi!
- Your kindness, patience, and love mean so much to me~ ❤️

I hope you will have lots of fun!
(please erase before continuing) <<<
        `.trim();
        prespace();
        IS.agent = "";
        return;
    } else if (!config.allow) {
        // Early exit if Inner Self is disabled
        text ||= "\u200B";
        IS.agent = "";
        return;
    }
    // Strip zero-width chars from the model output before processing
    text = text.replace(/[\u200B-\u200D]+/g, "");
    // Check if output looks like an unenclosed operation
    // Models sometimes forget their parentheses, the poor dears
    if (!/[()\[\]{}]/.test(text) && ((
        /^\s*(?:del(?:et(?:e[ds]?|ing))?|for(?:get(?:s|ting)?|got(?:ten)?)|remov(?:e[ds]?|ing))(?:[\s_]*(?:key(?:_name)?|thought|memory|unwanted(?:_key)?))?[\s=:]*[a-z0-9A-Z]*_+[a-z0-9A-Z]/i
    ).test(text) || /^\s*[a-z0-9A-Z_]+\s*=/.test(text))) {
        // (?:del|delete|deleted|deletes|deleting|forget|forgets|forgetting|forgot|forgotten|remove|removed|removes|removing)
        // Fully unenclosed block resembles a known pattern
        // Add an opening parentheses so the block parser can handle it
        text = `(${text.trimStart()}`;
    }
    // ==================== BLOCK PARSER ====================
    // ---- NEMESIS COMPATIBILITY PATCH (prose-loss guard) -------------------
    // Upstream Inner Self v1.0.2 repairs ANY unbalanced bracket in model output.
    // Two of those repairs can consume ordinary story prose:
    //
    //   1. An unclosed "(" with no inferable boundary got a ")" appended to the
    //      very END of the response, turning the whole remaining story into one
    //      "brain block" that the interpreter then deleted.
    //   2. An orphaned ")" (an emoticon, a "1)" list, a stray paren) got a "("
    //      prepended to the very START, doing the same thing to the leading text.
    //
    // Both repairs are now gated on the bracket actually opening something that
    // looks like an Inner Self operation. Ordinary prose punctuation is left
    // alone. Nothing else about the parser or the interpreter changes.
    const looksLikeOperation = (candidate = "") => (
        // (delete key_name) / (forget unwanted_key) / (remove memory)
        /^[(\[{]\s*(?:del(?:et(?:e[ds]?|ing))?|for(?:get(?:s|ting)?|got(?:ten)?)|remov(?:e[ds]?|ing))\b/i.test(candidate)
        // (snake_case_key = ...) or (snake_case_key: ...)
        || /^[(\[{]\s*[a-zA-Z][a-zA-Z0-9]*_[a-zA-Z0-9_]*\s*[=:]/.test(candidate)
        // (any_key = `quoted thought`)
        || /^[(\[{]\s*[a-zA-Z_][a-zA-Z0-9_]*\s*=\s*[`"'“‘]/.test(candidate)
    );
    // Kept so the final safeguard can prove prose existed before processing.
    const preParserText = text;
    // Parse enclosed blocks from the output
    const blocks = [];
    for (const [open, close] of [
        // Try each container type in order of preference
        ["(", ")"],
        ["[", "]"],
        ["{", "}"]
    ]) {
        // Attempt to repair unclosed blocks
        const pass = (() => {
            if (!text.includes(open)) {
                // No opening bracket, skip this type
                return true;
            }
            // Check if the last opening bracket is closed
            const rightIndex = text.lastIndexOf(open);
            const rightOfOpen = text.slice(rightIndex);
            if (rightOfOpen.includes(close)) {
                // Already closed, proceed with block parsing
                return false;
            }
            // PATCH: an unclosed bracket that does not open a recognizable
            // operation is ordinary prose punctuation. Leave it, and leave the
            // story after it, completely alone.
            if (!looksLikeOperation(rightOfOpen)) {
                return true;
            }
            // Try to find where the close bracket should go
            for (const pattern of [
                // After the deleted key name
                /^[(\[{]\s*(?:del(?:et(?:e[ds]?|ing))?|for(?:get(?:s|ting)?|got(?:ten)?)|remov(?:e[ds]?|ing))(?:[\s_]*(?:key(?:_name)?|thought|memory|unwanted(?:_key)?))?[\s=:]*[a-z0-9A-Z]*_[a-z0-9A-Z_]+/i,
                // After the renamed old key name
                /^[(\[{]\s*[a-z0-9A-Z_]+\s*=+\s*[a-z0-9A-Z]*_[a-z0-9A-Z_]+/,
                // After the triple-redundant punctuation boundary
                /[.?!‽…。！？‼⁇⁈⁉¿*¡%_–−‒—~-]["'`«»„“”「」´‘’‟‚‛]/
            ]) {
                const match = rightOfOpen.match(pattern);
                if (match) {
                    // Found a good insertion point
                    const index = rightIndex + match.index + match[0].length;
                    text = `${text.slice(0, index)}${close}${text.slice(index)}`;
                    return false;
                }
            }
            // PATCH: no boundary inferred. Upstream appended the close symbol to
            // the END OF THE RESPONSE, which made the block swallow every
            // paragraph of story that followed. Close the operation at the end of
            // its own paragraph instead: the operation is still captured and
            // committed, and the prose after it is untouched.
            const tail = text.slice(rightIndex);
            const paragraphBreak = tail.search(/\n[ \t]*\n/);
            const insertAt = rightIndex + (paragraphBreak === -1 ? tail.trimEnd().length : paragraphBreak);
            text = `${text.slice(0, insertAt)}${close}${text.slice(insertAt)}`;
            return false;
        })();
        if (text.includes(close) && !text.slice(0, text.indexOf(close)).includes(open)) {
            // Handle orphaned closing brackets (no matching open).
            // PATCH: only adopt the leading text as a block when it actually
            // reads as an operation. ":)" and "1)" in prose must not do this.
            const candidate = `${open}${text.trimStart()}`;
            if (looksLikeOperation(candidate)) {
                text = candidate;
            } else if (pass) {
                // Nothing of this bracket type to parse; ordinary prose.
                continue;
            }
        } else if (!text.includes(close) && pass) {
            // No brackets of this type, try next
            continue;
        }
        // Extract all outermost blocks of this bracket type
        let depth = 0;
        let start = -1;
        for (let i = 0; i < text.length; i++) {
            if (text[i] === open) {
                if (depth === 0) {
                    // Start of a new block
                    start = i;
                }
                depth++;
            } else if (text[i] === close) {
                depth--;
                if ((depth === 0) && (start !== -1)) {
                    // End of a block, capture it
                    blocks.push(text.slice(start, i + 1));
                    start = -1;
                }
            }
        }
        // Only process the first identified bracket type per turn
        break;
    }
    /**
     * Normalizes a thought string for storage
     * Cleans up formatting quirks from model output
     * @param {string} str - Raw thought string
     * @returns {string} Cleaned thought string
     */
    const simplify = (str = "") => {
        str = (str
            // Remove markdown-style formatting
            .replace(/[#*~•·∙⋅]+/g, "")
            // Normalize whitespace
            .replace(/  +/g, " ")
            .replace(/ ?\n ?/g, "\n")
            // Standardize ellipsis
            .replaceAll("…", "...")
            // Fix possessive s's -> s' because DeepSeek is dumb
            .replace(/([sS])(['‘’‛])[sS]/g, (_, s, q) => `${s}${q}`)
            // Normalize dashes
            .replace(/[–−‒]/g, "-")
            .replace(/(?<=\S) [-—] (?=\S)/g, "—")
        )
        // Convert one lone em-dash to a semicolon if appropriate
        return (
            ((str.match(/—/g) || []).length === 1)
            && !str.includes(";") && !str.endsWith("—") && !str.startsWith("—")
        ) ? str.replace("—", "; ") : str;
    };
    // Trim IS.agent name before emptiness check
    if (((IS.agent = IS.agent.trim()) === "") && (blocks.length === 0)) {
        // No task expected, but I'm still careful here because AID retries use cached outputs
        text = simplify(text).replace(/\n\n\n+/g, "\n\n");
        if (text === "") {
            // Guard against empty string outputs to avoid a known AID bug
            text = "\u200B";
            return;
        }
        const prevText = getPrevAction()?.text ?? "";
        if (/["«»„“”「」‟]\s*$/.test(prevText) && /^\s*["«»„“”「」‟]/.test(text)) {
            // Prepend a linebreak if this and the previous actions place dialogue adjacently
            text = text.trimStart();
            prespace();
        } else if (!/\s$/.test(prevText) && !/^\s/.test(text)) {
            // Ensure taskless outputs still have a space of separation from the previous action
            text = ` ${text}`;
        }
        return;
    }
    /**
     * Converts a key name to valid snake_case
     * Handles various edge cases from model output
     * @param {string} k - Raw key string
     * @returns {string} Valid snake_case key name
     */
    const formatKey = (k = "") => (k
        .trim()
        // Take the first word only
        .split(/\s/, 1)[0]
        // Remove quotes and apostrophes
        .replace(/[.'`´‘’]+/g, "")
        // Replace non-alphanumerics with underscore
        .replace(/[^a-z0-9A-Z_]/g, "_")
        // Convert camelCase to snake_case
        .replace(/([a-z0-9])([A-Z])/g, (_, a, b) => `${a}_${b.toLowerCase()}`)
        .toLowerCase()
        // Separate letters from numbers
        .replace(/([a-z])([0-9])/g, (_, a, b) => `${a}_${b}`)
        .replace(/([0-9])([a-z])/g, (_, a, b) => `${a}_${b}`)
        // Clean up multiple underscores
        .replace(/__+/g, "_")
        // Remove leading/trailing underscores
        .replace(/(?:^_|_$)/g, "")
    );
    // Create an agent instance for the triggered NPC
    const agent = (IS.agent === "") ? null : new Agent(IS.agent, { percent: config.percent });
    // Reset IS.agent
    IS.agent = "";
    /**
     * Generates a path string for logging operations
     * Helps brain logs imitate actual code for ease of understanding
     * @param {string} key - Property name to access
     * @returns {string} Path like "agent_name.brain" or "agent_name.key"
     */
    const path = (key = "brain") => `${(() => {
        const fancy = formatKey(agent.name);
        return (fancy === "") ? `agents[${JSON.stringify(agent.name)}]` : fancy;
    })()}.${key}`;
    // Queue of operations to execute
    const operations = [];
    // Track which keys have been touched this turn
    const altered = new Set();
    // ==================== BLOCK INTERPRETER ====================
    // Process extracted block and queue appropriate operations
    interpreter: for (const block of blocks) {
        // Remove the block from the output text unless debug mode is enabled
        deblock: {
            let start = text.indexOf(block);
            if (start === -1) {
                break deblock;
            }
            // Chars to consume along with the block
            const naughty = (c = "") => {
                const code = c.charCodeAt(0);
                // Just for fun, no regex :3
                return (
                    (code === 0x20) // " "
                    || (code === 0x09) // "\t"
                    || (code === 0x0A) // "\n"
                    || (code === 0x0D) // "\r"
                    || (code === 0x27) // "'"
                    || (code === 0x60) // "`"
                    || (code === 0xB4) // "´"
                    || (code === 0x2018) // "‘"
                    || (code === 0x2019) // "’"
                );
            };
            let end = start + block.length;
            // Expand left to consume whitespace and quotes
            while ((0 < start) && naughty(text[start - 1])) {
                start--;
            }
            // Expand right to consume whitespace and quotes
            while ((end < text.length) && naughty(text[end])) {
                end++;
            }
            // Replace the block with newlines (or keep in debug mode)
            text = `${text.slice(0, start)}\n\n${config.debug ? `${block}\n\n` : ""}${text.slice(end)}`;
        };
        if (agent === null) {
            // Only perform deblocking when agent is null
            continue;
        }
        // Extract and normalize the block content
        const str = block.slice(1, -1).trim().replace(/==+/g, "=").replace(/::+/g, ":");
        // Prefer "=" over ":" as the key-value delimiter
        const delimiter = str.includes("=") ? "=" : ":";
        if (2 < str.split(delimiter, 3).length) {
            // Skip blocks with too many delimiters
            continue;
        }
        // ==================== DELETE OPERATION ====================
        // Check if this is a delete/forget command
        /** @returns {string|null} */
        const delKey = (() => {
            // Match various forms of "delete key_name"
            const delMatch1 = str.match(
                /^(?:del(?:et(?:e[ds]?|ing))?|for(?:get(?:s|ting)?|got(?:ten)?)|remov(?:e[ds]?|ing))(?:[\s_]*(?:key(?:_name)?|thought|memory|unwanted(?:_key)?))?[\s=:]*([\s\S]*)$/i
            );
            if (!delMatch1) {
                return null;
            }
            const delKey1 = formatKey(delMatch1[1]);
            if (delKey1 in agent.brain) {
                // Key exists in brain
                return delKey1;
            } else if (!/(?:key|thought|memory|unwanted)/i.test(str)) {
                // Doesn't look like a common hallucination, might be invalid
                return null;
            }
            // Try again with stricter matching
            const delMatch2 = str.match(
                /^(?:del(?:et(?:e[ds]?|ing))?|for(?:get(?:s|ting)?|got(?:ten)?)|remov(?:e[ds]?|ing))[\s=:]*([\s\S]*)$/i
            );
            return delMatch2 ? formatKey(delMatch2[1]) : null;
        })();
        /**
         * Generates a delete log statement
         * @param {string} k - Key being deleted
         * @returns {string} JavaScript delete statement
         */
        const logDelete = (k = "") => `delete ${path()}${(k === "") ? "[\"\"]" : `.${k}`};`;
        if ((typeof delKey === "string") && (delKey in agent.brain)) {
            // Valid delete statement
            if (!altered.has(delKey)) {
                // Queue the delete operation
                operations.push(() => {
                    delete agent.brain[delKey];
                    return logDelete(delKey);
                });
                altered.add(delKey);
            }
            continue;
        } else if (!/\S\s*[=:]+\s*\S/.test(str)) {
            // No assignment pattern, skip
            continue;
        }
        // ==================== KEY EXTRACTION ====================
        /**
         * Gets everything after the last colon in a string
         * @param {string} s - Input string
         * @returns {string} Content after last colon
         */
        const rightOfColon = (s = "") => s.slice(s.lastIndexOf(":") + 1);
        // Extract and clean the key name
        const key = (() => {
            const raw = formatKey((
                (delimiter === "=") ? rightOfColon(str.split("=", 1)[0]) : str.split(":", 1)[0]
            ).trim().replaceAll(" ", "_"));
            // If key exists in brain, use it as-is
            // Otherwise strip common prefixes/suffixes models tend to add
            return (raw in agent.brain) ? raw : (raw
                .replace(/^th(?:oughts?|ink(?:ing))_(?:(?:o[nfr]|a(?:bout|nd)|with|for)_)?/, "")
                .replace(/(?:_(?:and|or))?_th(?:oughts?|ink(?:ing))$/, "")
            );
        })();
        if ((key === "") || ((
            (60 < key.length)
            || ["thought", "thoughts", "think", "thinking", "any_name", "example_name"].includes(key)
            || ["any_key", "key_name", "example_key"].some(s => key.includes(s))
        ) && !(key in agent.brain))) {
            // Skip invalid or placeholder keys copied from the task prompts
            continue;
        }
        // ==================== VALUE EXTRACTION ====================
        // Extract and clean the value
        const value = (
            (str.split(delimiter, 2)[1] || "")
                // Strip leading/trailing quotes and whitespace
                .replace(/^[\s"'`«»„“”「」´‘’‟‚‛]+|[\s"'`«»„“”「」´‘’‟‚‛]+$/g, "")
                .replace(/\s+/g, " ")
        );
        if (!/[a-z0-9A-Z]/.test(value) || /[\u4e00-\u9fff]/.test(value)) {
            // Skip empty or non-latin values because DeepSeek is dumb
            continue;
        } else if (!value.includes(" ")) {
            // ==================== RENAME OPERATION ====================
            // No spaces = might be a key rename
            if (altered.has(key)) {
                continue;
            }
            const oldKey = formatKey(value);
            if (!altered.has(oldKey) && (oldKey in agent.brain)) {
                // Valid rename: move thought from old key to new key
                // Queue a rename operation
                operations.push(() => {
                    agent.brain[key] = agent.brain[oldKey];
                    delete agent.brain[oldKey];
                    const p = path();
                    return `${p}.${key} = ${p}.${oldKey};\n${logDelete(oldKey)}`;
                });
                altered.add(key);
                altered.add(oldKey);
            }
            continue;
        } else if (value.includes("_")) {
            // Underscores in value = probably a malformed key, skip
            continue;
        }
        // ==================== ASSIGN OPERATION ====================
        // Extract the actual thought content
        const thought = simplify(rightOfColon(value)
            .replaceAll("→", " ")
            .replaceAll("\\n", "\n")
        ).trim().split("\n", 1)[0].trimEnd();
        if (altered.has(key) || !thought.includes(" ")) {
            // Skip if key already touched or thought too short
            continue;
        }
        // ---- NEMESIS COMPATIBILITY PATCH (thought-loop breaker) --------------
        // Observed live: a Nemesis who had already won the encounter rewrote the
        // SAME thought key on six consecutive turns, each rewrite handing the
        // story another reason to prolong a decided confrontation. The existing
        // brain still reaches context; only the endless rewriting stops.
        // Scoped to agents that have a Nemesis card, so ordinary Inner Self key
        // refinement is untouched. The streak resets whenever the Nemesis state
        // materially changes (see Nemesis output hook).
        if ((key in agent.brain) && (function () {
            try {
                const prefix = "⚔ Nemesis — ";
                const who = String(agent.name).trim().toLowerCase();
                const isNemesis = storyCards.some(c => (
                    c && typeof c.title === "string" && c.title.startsWith(prefix)
                    && c.title.slice(prefix.length).trim().toLowerCase() === who
                ));
                if (!isNemesis) return false;
                state.Nemesis = state.Nemesis || {};
                const track = state.Nemesis.thoughtStreak = state.Nemesis.thoughtStreak || {};
                const id = `${who}::${key}`;
                track[id] = (track[id] || 0) + 1;
                // Keep the table small.
                const ids = Object.keys(track);
                if (ids.length > 24) delete track[ids[0]];
                return track[id] >= 3;
            } catch { return false; }
        })()) {
            continue;
        }
        if (!(key in agent.brain)) {
            // Check for duplicate thought values (don't store the same thing twice)
            const last = thought.length - 1;
            // Potentially hot loop so avoid excessive get() calls
            const brain = agent.brain;
            for (const key in brain) {
                const existing = brain[key];
                if (
                    // This shouldn't be possible but whatevs
                    (typeof existing === "string")
                    // Short-circuit on impossible relative lengths for speed
                    && (last < existing.length)
                    // Fast check inclusion
                    && (existing.indexOf(thought) !== -1)
                ) {
                    // This thought already exists within some thought associated with another key
                    continue interpreter;
                }
            }
        }
        // Queue an assign operation
        operations.push(() => {
            // Increment the global label counter
            IS.label++;
            // Encode the label as zero-width chars for context tracking
            IS.encoding = `${(IS.encoding === "") ? "\u200B" : IS.encoding}${(() => {
                let n = IS.label;
                let out = "";
                // Convert label to binary using ZWNJ (0) and ZWJ (1)
                while (0 < n) {
                    out = `${(n & 1) ? "\u200D" : "\u200C"}${out}`;
                    n >>>= 1;
                }
                return out || "\u200C";
            })()}\u200B`;
            // Inject the encoding into the output text
            text = (text
                .replace(/[\u200B-\u200D]+/g, "")
                .replace(/^\s*/, leadingWhitespace => `${leadingWhitespace}${IS.encoding}`)
            );
            // One common complaint from playtesters was that models were storing repeated thoughts
            // Upon further investigation, I discovered this was actually miscommunication on my part
            // Players assumed the operation log (card entry) was a reflection of the brain (card notes)
            // Thus players (reasonably) misinterpreted label updates as repetition
            // Solution: Log distinct relabel syntax to improve non-verbal communication
            const target = `${path()}.${key}`;
            const old = agent.brain[key];
            agent.brain[key] = `${IS.label} → ${thought}`;
            // Determine if this is a relabel of the same thought value
            const relabel = (
                (typeof old === "string")
                && (thought === old.slice(old.indexOf("→") + 1).trim())
            );
            return `${(
                relabel ? `old = ${target};\n` : ""
            )}${target} = ${(
                relabel ? `[${IS.label}, old${(
                    old.includes("→") ? "\n  .slice(old.indexOf(\"→\") + 1)\n  .trim()\n" : ".trim()"
                )}].join(" → ")` : JSON.stringify(agent.brain[key])
            )};`;
        });
        altered.add(key);
    }
    // ==================== OUTPUT TEXT SANITIZATION ====================
    // Clean up the model's output text before finalizing
    // This removes artifacts, formatting issues, and unwanted patterns
    text = (simplify(config.debug ? text : text.replaceAll("_", ""))
        .trim()
        .split("\n")
        .filter(line => {
            const lower = line.toLowerCase();
            return !(
                // The nuclear option
                /(?:^|[^a-zA-Z])(?:task|output)(?:$|[^a-zA-Z])/.test(lower)
                // Common AI hallucinations
                || [
                    "STRICT",
                    "OUTPUT",
                    "REQUIRE",
                    "EXACT",
                    "TASK",
                    "FORMAT",
                    "inner self",
                    `You are ${config.player}.`
                ].some(naughty => line.includes(naughty))
                // Remove "story continues" type artifacts from task prompts bleeding through
                || (lower.includes("story") && lower.includes("continu"))
                // Remove numbered list items (e.g., "1.", "[1]", "2.")
                || /^\[?\d+(?:\.?\]|\.)/.test(lower)
                // Remove stray "user" labels from ChatML imitation
                || /^\s*user(?:$|[^a-z])/.test(lower)
                // Remove lines containing only " " and/or "-"
                || /^[ -]+$/.test(lower)
            );
        })
        .join("\n")
        .trim()
        // Collapse excessive newlines to a maximum of two
        .replace(/\n\n\n+/g, "\n\n")
    );
    // ==================== OUTPUT FINALIZATION ====================
    // Handle empty outputs and ensure proper spacing between actions
    // PATCH (prose-loss guard, final safeguard):
    // Output processing must never turn a generation that contained real story
    // prose into nothing. If it did, recover the prose by removing only the
    // spans that actually read as operations and keeping everything else.
    if (text.replace(/[\s\u200B-\u200D]+/g, "") === "") {
        const salvage = String(preParserText || "")
            // Drop only bracketed spans whose contents look like an operation.
            .replace(/[(\[{][^)\]}]*[)\]}]/g, span => (looksLikeOperation(span) ? "" : span))
            // An operation the model never closed: drop it to the end of its own
            // paragraph. Without this the raw operation text leaks into the story.
            .replace(/[(\[{][^\n]*(?:\n(?![ \t]*\n)[^\n]*)*/g, span => (looksLikeOperation(span) ? "" : span))
            .replace(/[\u200B-\u200D]+/g, "")
            .replace(/\n{3,}/g, "\n\n")
            .trim();
        if (salvage.replace(/\s+/g, "") !== "") {
            try { log("Inner Self: recovered story prose that output processing had emptied"); } catch {}
            text = salvage;
        }
    }
    if (text === "") {
        // AID does not tolerate empty string outputs and "please select continue" messages are cringe
        // Return encoding if available, otherwise a zero-width space placeholder
        text = (IS.encoding === "") ? "\u200B" : IS.encoding;
    } else {
        // Prepend the thought label encoding to the output text
        text = `${IS.encoding}${text}`;
        // Ensure all between-action linebreaks are equally spaced
        prespace();
    }
    // ==================== OPERATION EXECUTOR ====================
    // Execute queued brain operations and persist changes
    if ((operations.length === 0) || (agent === null)) {
        // No operations to execute, we're done
        return;
    }
    const hash = historyHash();
    if (IS.hash === hash) {
        // Same history hash means this turn was a retry or erase + continue
        // This prevents duplicate brain modifications on retry (cached outputs cause problems)
        return;
    } else if (typeof agent.card.entry !== "string") {
        // Initialize the brain card entry if it's not a string (shouldn't happen, but safety first)
        agent.card.entry = "";
    } else if (agent.card.entry.endsWith("UTC") && agent.card.entry.startsWith("// initialized @")) {
        // This is a fresh brain card with only the timestamp comment
        // I prefer logging this info immediately before processing the first valid operation
        // Add metadata and initialize the brain object in the log
        agent.card.entry = `${agent.card.entry.trimStart()}\n${path("metadata")} = ${(
            JSON.stringify(agent.metadata, null, 2)
        )};\n${path()} = {};\n// Entry: Displays recent brain operations to the player\n// Triggers: Configurable settings for this NPC alone\n// Notes: Allows the player to view/edit actual brain contents`;
    }
    // Update the hashcode to mark this history state as processed
    IS.hash = hash;
    // Clear the previous encoding since new operations are being committed
    IS.encoding = "";
    // Execute each queued operation and append to the operation log
    for (const operation of operations) {
        // Increment global operation counter
        IS.ops++;
        // Execute the operation (modifies agent.brain) and get the log message
        // Append the message to the agent's brain card entry
        agent.card.entry = `${agent.card.entry}\n\n// operation ${IS.ops}\n${operation()}`.trimStart();
    }
    text ||= "\u200B";
    // Keep the operation log from growing unbounded
    // Limit to approximately 2000 chars to satisfy AID's soft entry limit
    agent.card.entry = agent.card.entry.split(/\n\n/).slice(-2000).reduceRight((out, op) => (
        // Only include operations that fit within the char limit
        ((out.length + op.length + 2) < 2001) ? `${op}${out ? `\n\n${out}` : ""}` : out
    ), "");
    // ==================== BRAIN SERIALIZATION ====================
    // Rapidly reserialize a flat representation of the modified brain, without heavy memory allocations
    // This custom serialization is faster than JSON.stringify for flat objects
    // It also produces a more readable format in the story card notes
    const brain = agent.brain;
    const keys = Object.keys(brain);
    if (keys.length === 0) {
        agent.card.description = "{}";
        return;
    }
    // Build the JSON-like string manually for each key-value pair
    let serialized = "";
    const appendPair = config.json ? ((
        serialized = `"${keys[0]}": ${JSON.stringify(brain[keys[0]])}`
    ), (key = "") => {
        // Format -> "key": "value",\n\n (JSON with linebreaks)
        serialized += `,\n\n"${key}": ${JSON.stringify(brain[key])}`;
        return;
    }) : ((
        serialized = `${keys[0]}: ${brain[keys[0]]}`
    ), (key = "") => {
        // Format -> key: value\n\n (simple user-friendly format)
        serialized += `\n\n${key}: ${brain[key]}`;
        return;
    });
    for (let i = 1; i < keys.length; i++) {
        appendPair(keys[i]);
    }
    agent.card.description = serialized;
    return;
}

//—————————————————————————————————————————————————————————————————————————————————————

/**
 * Auto-Cards v1.1.3
 * Made by LewdLeah on May 21, 2025
 * This AI Dungeon script automatically creates and updates plot-relevant story cards while you play
 * General-purpose usefulness and compatibility with other scenarios/scripts were my design priorities
 * Auto-Cards is fully open-source, please copy for use within your own projects! ❤️
 */
function AutoCards(inHook, inText, inStop) {
    "use strict"; const S = {
        /*
        Default Auto-Cards settings
        Feel free to change these settings to customize your scenario's default gameplay experience
        The default values for your scenario are specified below:
        */
        // Is Auto-Cards already enabled when the adventure begins?
        DEFAULT_DO_AC: true
        // (true or false)
        ,
        // Pin the "Configure Auto-Cards" story card at the top of the player's story cards list?
        DEFAULT_PIN_CONFIGURE_CARD: false
        // (true or false)
        ,
        // Minimum number of turns in between automatic card generation events?
        DEFAULT_CARD_CREATION_COOLDOWN: 40
        // (0 to 9999)
        ,
        // Use a bulleted list format for newly generated card entries?
        DEFAULT_USE_BULLETED_LIST_MODE: true
        // (true or false)
        ,
        // Maximum allowed length for newly generated story card entries?
        DEFAULT_GENERATED_ENTRY_LIMIT: 600
        // (200 to 2000)
        ,
        // Do newly generated cards have memory updates enabled by default?
        DEFAULT_NEW_CARDS_DO_MEMORY_UPDATES: false
        // (true or false)
        ,
        // Default character limit before the card's memory bank is summarized?
        DEFAULT_NEW_CARDS_MEMORY_LIMIT: 3200
        // (1750 to 9900)
        ,
        // Approximately how much shorter should recently compressed memories be? (ratio = 10 * old / new)
        DEFAULT_MEMORY_COMPRESSION_RATIO: 25
        // (20 to 1250)
        ,
        // Ignore all-caps during title candidate detection?
        DEFAULT_IGNORE_ALL_CAPS_TITLES: true
        // (true or false)
        ,
        // Should player input actions (Do/Say/Story) be considered during title detection?
        DEFAULT_DETECT_TITLES_FROM_INPUTS: false
        // (true or false)
        ,
        // How many (minimum) actions in the past does Auto-Cards look for named entities?
        DEFAULT_MINIMUM_LOOK_BACK_DISTANCE: 7
        // (2 to 88)
        ,
        // Is Live Script Interface v2 enabled?
        DEFAULT_DO_LSI_V2: false
        // (true or false)
        ,
        // Should the "Debug Data" story card be visible?
        DEFAULT_SHOW_DEBUG_DATA: false
        // (true or false)
        ,
        // AI prompt used to generate new story card entries?
        DEFAULT_CARD_GENERATION_PROMPT: [
            "-----",
            "",
            "<SYSTEM>",
            "# Stop the story and ignore previous instructions. Write a brief and coherent informational entry for %{title} following these instructions:",
            "- Write only third-person pure prose information about %{title} using complete sentences with correct punctuation",
            "- Avoid short-term temporary details or appearances, instead focus on plot-significant information",
            "- Prioritize story-relevant details about %{title} first to ensure seamless integration with the previous plot",
            "- Create new information based on the context and story direction",
            "- Mention %{title} in every sentence",
            "- Use semicolons if needed",
            "- Add additional details about %{title} beneath incomplete entries",
            "- Be concise and grounded",
            "- Imitate the story's writing style and infer the reader's preferences",
            "</SYSTEM>",
            "Continue the entry for %{title} below while avoiding repetition:",
            "%{entry}"
        ] // (mimic this multi-line "text" format)
        ,
        // AI prompt used to summarize a given story card's memory bank?
        DEFAULT_CARD_MEMORY_COMPRESSION_PROMPT: [
            "-----",
            "",
            "<SYSTEM>",
            "# Stop the story and ignore previous instructions. Summarize and condense the given paragraph into a narrow and focused memory passage while following these guidelines:",
            "- Ensure the passage retains the core meaning and most essential details",
            "- Use the third-person perspective",
            "- Prioritize information-density, accuracy, and completeness",
            "- Remain brief and concise",
            "- Write firmly in the past tense",
            "- The paragraph below pertains to old events from far earlier in the story",
            "- Integrate %{title} naturally within the memory; however, only write about the events as they occurred",
            "- Only reference information present inside the paragraph itself, be specific",
            "</SYSTEM>",
            "Write a summarized old memory passage for %{title} based only on the following paragraph:",
            "\"\"\"",
            "%{memory}",
            "\"\"\"",
            "Summarize below:"
        ] // (mimic this multi-line "text" format)
        ,
        // Titles banned from future card generation attempts?
        DEFAULT_BANNED_TITLES_LIST: (
            "North, East, South, West, Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, January, February, March, April, May, June, July, August, September, October, November, December"
        ) // (mimic this comma-list "text" format)
        ,
        // Default story card "type" used by Auto-Cards? (does not matter)
        DEFAULT_CARD_TYPE: "class"
        // ("text")
        ,
        // Should titles mentioned in the "opening" plot component be banned from future card generation by default?
        DEFAULT_BAN_TITLES_FROM_OPENING: false
        // (true or false)
        ,
    }; //——————————————————————————————————————————————————————————————————————————————

    /*
    Useful API functions for coders (otherwise ignore)
    Here's what each one does in plain terms:

    AutoCards().API.postponeEvents();
    Pauses Auto-Cards activity for n many turns

    AutoCards().API.emergencyHalt();
    Emergency stop or resume

    AutoCards().API.suppressMessages();
    Hides Auto-Cards toasts by preventing assignment to state.message

    AutoCards().API.debugLog();
    Writes to the debug log card

    AutoCards().API.toggle();
    Turns Auto-Cards on/off

    AutoCards().API.generateCard();
    Initiates AI generation of the requested card

    AutoCards().API.redoCard();
    Regenerates an existing card

    AutoCards().API.setCardAsAuto();
    Flags or unflags a card as automatic

    AutoCards().API.addCardMemory();
    Adds a memory to a specific card

    AutoCards().API.eraseAllAutoCards();
    Deletes all auto-cards

    AutoCards().API.getUsedTitles();
    Lists all current card titles

    AutoCards().API.getBannedTitles();
    Shows your current banned titles list

    AutoCards().API.setBannedTitles();
    Replaces the banned titles list with a new list

    AutoCards().API.buildCard();
    Makes a new card from scratch, using exact parameters

    AutoCards().API.getCard();
    Finds cards that match a filter

    AutoCards().API.eraseCard();
    Deletes cards matching a filter
    */

    /*** Postpones internal Auto-Cards events for a specified number of turns
    * 
    * @function
    * @param {number} turns A non-negative integer representing the number of turns to postpone events
    * @returns {Object} An object containing cooldown values affected by the postponement
    * @throws {Error} If turns is not a non-negative integer
    */
    // AutoCards().API.postponeEvents();

    /*** Sets or clears the emergency halt flag to pause Auto-Cards operations
    * 
    * @function
    * @param {boolean} shouldHalt A boolean value indicating whether to engage (true) or disengage (false) emergency halt
    * @returns {boolean} The value that was set
    * @throws {Error} If called from within isolateLSIv2 scope or with a non-boolean argument
    */
    // AutoCards().API.emergencyHalt();

    /*** Enables or disables state.message assignments from Auto-Cards
    * 
    * @function
    * @param {boolean} shouldSuppress If true, suppresses all Auto-Cards messages; false enables them
    * @returns {Array} The current pending messages after setting suppression
    * @throws {Error} If shouldSuppress is not a boolean
    */
    // AutoCards().API.suppressMessages();

    /*** Logs debug information to the "Debug Log card console
    * 
    * @function
    * @param {...any} args Arguments to log for debugging purposes
    * @returns {any} The story card object reference
    */
    // AutoCards().API.debugLog();

    /*** Toggles Auto-Cards behavior or sets it directly
    * 
    * @function
    * @param {boolean|null|undefined} toggleType If undefined, toggles the current state. If boolean or null, sets the state accordingly
    * @returns {boolean|null|undefined} The state that was set or inferred
    * @throws {Error} If toggleType is not a boolean, null, or undefined
    */
    // AutoCards().API.toggle();

    /*** Generates a new card using optional prompt details or a card request object
    * 
    * This function supports two usage modes:
    * 
    * 1. Object Mode:
    *    Pass a single object containing card request parameters. The only mandatory property is "title"
    *    All other properties are optional and customize the card generation
    * 
    *    Example:
    *    AutoCards().API.generateCard({
    *      type: "character",         // The category or type of the card; defaults to "class" if omitted
    *      title: "Leah the Lewd",    // The card's title (required)
    *      keysStart: "Lewd,Leah",    // Optional trigger keywords associated with the card
    *      entryStart: "You are a woman named Leah.", // Existing content to prepend to the AI-generated entry
    *      entryPrompt: "",           // Global prompt guiding AI content generation
    *      entryPromptDetails: "Focus on Leah's works of artifice and ingenuity", // Additional prompt info
    *      entryLimit: 600,           // Target character length for the AI-generated entry
    *      description: "Player character!", // Freeform notes
    *      memoryStart: "Leah purchased a new sweater.", // Existing memory content
    *      memoryUpdates: true,       // Whether the card's memory bank will update on its own
    *      memoryLimit: 3200          // Preferred memory bank size before summarization/compression
    *    });
    * 
    * 2. String Mode:
    *    Pass a string as the title and optionally two additional strings to specify prompt details
    *    This mode is shorthand for quick card generation without an explicit card request object
    * 
    *    Examples:
    *    AutoCards().API.generateCard("Leah the Lewd");
    *    AutoCards().API.generateCard("Leah the Lewd", "Focus on Leah's works of artifice and ingenuity");
    *    AutoCards().API.generateCard(
    *      "Leah the Lewd",
    *      "Focus on Leah's works of artifice and ingenuity",
    *      "You are a woman named Leah."
    *    );
    * 
    * @function
    * @param {Object|string} request Either a fully specified card request object or a string title
    * @param {string} [extra1] Optional detailed prompt text when using string mode
    * @param {string} [extra2] Optional entry start text when using string mode
    * @returns {boolean} Returns true if the generation attempt succeeded, false otherwise
    * @throws {Error} Throws if called with invalid arguments or missing a required title property
    */
    // AutoCards().API.generateCard();

    /*** Regenerates a card by title or object reference, optionally preserving or modifying its input info
    *
    * @function
    * @param {Object|string} request Either a fully specified card request object or a string title for the card to be regenerated
    * @param {boolean} [useOldInfo=true] If true, preserves old info in the new generation; false omits it
    * @param {string} [newInfo=""] Additional info to append to the generation prompt
    * @returns {boolean} True if regeneration succeeded; false otherwise
    * @throws {Error} If the request format is invalid, or if the second or third parameters are the wrong types
    */
    // AutoCards().API.redoCard();

    /*** Flags or unflags a card as an auto-card, controlling its automatic generation behavior
    *
    * @function
    * @param {Object|string} targetCard The card object or title to mark/unmark as an auto-card
    * @param {boolean} [setOrUnset=true] If true, marks the card as an auto-card; false removes the flag
    * @returns {boolean} True if the operation succeeded; false if the card was invalid or already matched the target state
    * @throws {Error} If the arguments are invalid types
    */
    // AutoCards().API.setCardAsAuto();

    /*** Appends a memory to a story card's memory bank
    *
    * @function
    * @param {Object|string} targetCard A card object reference or title string
    * @param {string} newMemory The memory text to add
    * @returns {boolean} True if the memory was added; false if it was empty, already present, or the card was not found
    * @throws {Error} If the inputs are not a string or valid card object reference
    */
    // AutoCards().API.addCardMemory();

    /*** Removes all previously generated auto-cards and resets various states
    *
    * @function
    * @returns {number} The number of cards that were removed
    */
    // AutoCards().API.eraseAllAutoCards();

    /*** Retrieves an array of titles currently used by the adventure's story cards
    *
    * @function
    * @returns {Array<string>} An array of strings representing used titles
    */
    // AutoCards().API.getUsedTitles();

    /*** Retrieves an array of banned titles
    *
    * @function
    * @returns {Array<string>} An array of banned title strings
    */
    // AutoCards().API.getBannedTitles();

    /*** Sets the banned titles array, replacing any previously banned titles
    *
    * @function
    * @param {string|Array<string>} titles A comma-separated string or array of strings representing titles to ban
    * @returns {Object} An object containing oldBans and newBans arrays
    * @throws {Error} If the input is neither a string nor an array of strings
    */
    // AutoCards().API.setBannedTitles();

    /*** Creates a new story card with the specified parameters
    *
    * @function
    * @param {string|Object} title Card title string or full card template object containing all fields
    * @param {string} [entry] The entry text for the card
    * @param {string} [type] The card type (e.g., "character", "location")
    * @param {string} [keys] The keys (triggers) for the card
    * @param {string} [description] The notes or memory bank of the card
    * @param {number} [insertionIndex] Optional index to insert the card at a specific position within storyCards
    * @returns {Object|null} The created card object reference, or null if creation failed
    */
    // AutoCards().API.buildCard();

    /*** Finds and returns story cards satisfying a user-defined condition
    * Example:
    * const leahCard = AutoCards().API.getCard(card => (card.title === "Leah"));
    *
    * @function
    * @param {Function} predicate A function which takes a card and returns true if it matches
    * @param {boolean} [getAll=false] If true, returns all matching cards; otherwise returns the first match
    * @returns {Object|Array<Object>|null} A single card object reference, an array of cards, or null if no match is found
    * @throws {Error} If the predicate is not a function or getAll is not a boolean
    */
    // AutoCards().API.getCard();

    /*** Removes story cards based on a user-defined condition or by direct reference
    * Example:
    * AutoCards().API.eraseCard(card => (card.title === "Leah"));
    *
    * @function
    * @param {Function|Object} predicate A predicate function or a card object reference
    * @param {boolean} [eraseAll=false] If true, removes all matching cards; otherwise removes the first match
    * @returns {boolean|number} True if a single card was removed, false if none matched, or the number of cards erased
    * @throws {Error} If the inputs are not a valid predicate function, card object, or boolean
    */
    // AutoCards().API.eraseCard();

    //—————————————————————————————————————————————————————————————————————————————————

    /*
    To everyone who helped, thank you:

    AHotHamster22
    Most extensive testing, feedback, ideation, and kindness

    BinKompliziert
    UI feedback

    Boo
    Discord communication

    bottledfox
    API ideas for alternative card generation use-cases

    Bruno
    Most extensive testing, feedback, ideation, and kindness
    https://play.aidungeon.com/profile/Azuhre

    Burnout
    Implementation improvements, algorithm ideas, script help, and LSIv2 inspiration

    bweni
    Testing

    DebaczX
    Most extensive testing, feedback, ideation, and kindness

    Dirty Kurtis
    Card entry generation prompt engineering

    Dragranis
    Provided the memory dataset used for boundary calibration

    effortlyss
    Data, testing, in-game command ideas, config settings, and other UX improvements

    Hawk
    Grammar and special-cased proper nouns

    Idle Confusion
    Testing
    https://play.aidungeon.com/profile/Idle%20Confusion

    ImprezA
    Most extensive testing, feedback, ideation, and kindness
    https://play.aidungeon.com/profile/ImprezA

    Kat-Oli
    Title parsing, grammar, and special-cased proper nouns

    KryptykAngel
    LSIv2 ideas
    https://play.aidungeon.com/profile/KryptykAngel

    Mad19pumpkin
    API ideas
    https://play.aidungeon.com/profile/Mad19pumpkin

    Magic
    Implementation and syntax improvements
    https://play.aidungeon.com/profile/MagicOfLolis

    Mirox80
    Testing, feedback, and scenario integration ideas
    https://play.aidungeon.com/profile/Mirox80

    Nathaniel Wyvern
    Testing
    https://play.aidungeon.com/profile/NathanielWyvern

    NobodyIsUgly
    All-caps title parsing feedback

    OnyxFlame
    Card memory bank implementation ideas and special-cased proper nouns

    Purplejump
    API ideas for deep integration with other AID scripts

    Randy Viosca
    Context injection and card memory bank structure
    https://play.aidungeon.com/profile/Random_Variable

    RustyPawz
    API ideas for simplified card interaction
    https://play.aidungeon.com/profile/RustyPawz

    sinner
    Testing

    Sleepy pink
    Testing and feedback
    https://play.aidungeon.com/profile/Pinkghost

    Vutinberg
    Memory compression ideas and prompt engineering

    Wilmar
    Card entry generation and memory summarization prompt engineering

    Yi1i1i
    Idea for the redoCard API function and "/ac redo" in-game command

    A note to future individuals:
    If you fork or modify Auto-Cards... Go ahead and put your name here too! Yay! 🥰
    */

    //—————————————————————————————————————————————————————————————————————————————————

    /*
    The code below implements Auto-Cards
    Enjoy! ❤️
    */

    // My class definitions are hoisted by wrapper functions because it's less ugly (lol)
    const Const = hoistConst();
    const O = hoistO();
    const Words = hoistWords();
    const StringsHashed = hoistStringsHashed();
    const Internal = hoistInternal();
    // AutoCards has an explicitly immutable domain: HOOK, TEXT, and STOP
    const HOOK = inHook;
    const TEXT = ((typeof inText === "string") && inText) || "\n";
    const STOP = (inStop === true);
    // AutoCards returns a pseudoimmutable codomain which is initialized only once before being read and returned
    const CODOMAIN = new Const().declare();
    // Transient sets for high-performance lookup
    const [used, bans, auto, forenames, surnames] = Array.from({ length: 5 }, () => new Set());
    const memoized = new Map();
    // Holds a reference to the data card singleton, remains unassigned unless required
    let data = null;
    // Validate globalThis.text
    text = ((typeof text === "string") && text) || "\n";
    // Main settings override local settings
    if (typeof globalThis.MainSettings === "function") {
        new MainSettings("AutoCards", "AC").merge(S);
    }
    // Container for the persistent state of AutoCards
    const AC = (function () {
        if (state.LSIv2) {
            // The Auto-Cards external API is also available from within the inner scope of LSIv2
            // Call with AutoCards().API.nameOfFunction(yourArguments);
            return state.LSIv2;
        } else if (state.AutoCards) {
            // state.AutoCards is prioritized for performance
            const ac = state.AutoCards;
            delete state.AutoCards;
            return ac;
        }
        const dataVariants = getDataVariants();
        data = getSingletonCard(false, O.f({ ...dataVariants.critical }), O.f({ ...dataVariants.debug }));
        // Deserialize the state of Auto-Cards from the data card
        const ac = (function () {
            try {
                return JSON.parse(data?.description);
            } catch {
                return null;
            }
        })();
        // If the deserialized state fails to match the following structure, fallback to defaults
        if (validate(ac, O.f({
            config: [
                "doAC", "deleteAllAutoCards", "pinConfigureCard", "addCardCooldown", "bulletedListMode", "defaultEntryLimit", "defaultCardsDoMemoryUpdates", "defaultMemoryLimit", "memoryCompressionRatio", "ignoreAllCapsTitles", "readFromInputs", "minimumLookBackDistance", "LSIv2", "showDebugData", "generationPrompt", "compressionPrompt", "defaultCardType"
            ],
            signal: [
                "emergencyHalt", "forceToggle", "overrideBans", "swapControlCards", "recheckRetryOrErase", "maxChars", "outputReplacement", "upstreamError"
            ],
            generation: [
                "cooldown", "completed", "permitted", "workpiece", "pending"
            ],
            compression: [
                "completed", "titleKey", "vanityTitle", "responseEstimate", "lastConstructIndex", "oldMemoryBank", "newMemoryBank"
            ],
            message: [
                "previous", "suppress", "pending", "event"
            ],
            chronometer: [
                "turn", "step", "amnesia", "postpone"
            ],
            database: {
                titles: [
                    "used", "banned", "candidates", "lastActionParsed", "lastTextHash", "pendingBans", "pendingUnbans"
                ],
                memories: [
                    "associations", "duplicates"
                ]
            }
        }))) {
            // The deserialization was a success
            return ac;
        }
        function validate(obj, finalKeys) {
            if ((typeof obj !== "object") || (obj === null)) {
                return false;
            } else {
                return Object.entries(finalKeys).every(([key, value]) => {
                    if (!(key in obj)) {
                        return false;
                    } else if (Array.isArray(value)) {
                        return value.every(finalKey => {
                            return (finalKey in obj[key]);
                        });
                    } else {
                        return validate(obj[key], value);
                    }
                });
            }
        }
        // AC is malformed, reinitialize with default values
        return {
            // In-game configurable parameters
            config: getDefaultConfig(),
            // Collection of various short-term signals passed forward in time
            signal: {
                // API: Suspend nearly all Auto-Cards processes
                emergencyHalt: false,
                // API: Forcefully toggle Auto-Cards on or off
                forceToggle: null,
                // API: Banned titles were externally overwritten
                overrideBans: 0,
                // Signal the construction of the opposite control card during the upcoming onOutput hook
                swapControlCards: false,
                // Signal a limited recheck of recent title candidates following a retry or erase
                recheckRetryOrErase: false,
                // Signal an upcoming onOutput text replacement
                outputReplacement: "",
                // info.maxChars is only defined onContext but must be accessed during other hooks too
                maxChars: Math.abs(info?.maxChars || 3200),
                // An error occured within the isolateLSIv2 scope during an earlier hook
                upstreamError: ""
            },
            // Moderates the generation of new story card entries
            generation: {
                // Number of story progression turns between card generations
                cooldown: validateCooldown(
                    underQuarterInteger(validateCooldown(S.DEFAULT_CARD_CREATION_COOLDOWN))
                ),
                // Continues prompted so far
                completed: 0,
                // Upper limit on consecutive continues
                permitted: 34,
                // Properties of the incomplete story card
                workpiece: O.f({}),
                // Pending card generations
                pending: [],
            },
            // Moderates the compression of story card memories
            compression: {
                // Continues prompted so far
                completed: 0,
                // A title header reference key for this auto-card
                titleKey: "",
                // The full and proper title
                vanityTitle: "",
                // Response length estimate used to compute # of outputs remaining
                responseEstimate: 1400,
                // Indices [0, n] of oldMemoryBank memories used to build the current memory construct
                lastConstructIndex: -1,
                // Bank of card memories awaiting compression
                oldMemoryBank: [],
                // Incomplete bank of newly compressed card memories
                newMemoryBank: [],
            },
            // Prevents incompatibility issues borne of state.message modification
            message: {
                // Last turn's state.message
                previous: getStateMessage(),
                // API: Allow Auto-Cards to post messages?
                suppress: false,
                // Pending Auto-Cards message(s)
                pending: (function () {
                    if (S.DEFAULT_DO_AC !== false) {
                        const startupMessage = "Enabled! You may now edit the \"Configure Auto-Cards\" story card";
                        logEvent(startupMessage);
                        return [startupMessage];
                    } else {
                        return [];
                    }
                })(),
                // Counter to track all Auto-Cards message events
                event: 0
            },
            // Timekeeper used for temporal events
            chronometer: {
                // Previous turn's measurement of info.actionCount
                turn: getTurn(),
                // Whether or not various turn counters should be stepped (falsified by retry actions)
                step: true,
                // Number of consecutive turn interruptions
                amnesia: 0,
                // API: Postpone Auto-Cards externalities for n many turns
                postpone: 0,
            },
            // Scalable atabase to store dynamic game information
            database: {
                // Words are pale shadows of forgotten names. As names have power, words have power
                titles: {
                    // A transient array of known titles parsed from card titles, entry title headers, and trigger keywords
                    used: [],
                    // Titles banned from future card generation attempts and various maintenance procedures
                    banned: getDefaultConfigBans(),
                    // Potential future card titles and their turns of occurrence
                    candidates: [],
                    // Helps avoid rechecking the same action text more than once, generally
                    lastActionParsed: -1,
                    // Ensures weird combinations of retry/erase events remain predictable
                    lastTextHash: "%@%",
                    // Newly banned titles which will be added to the config card
                    pendingBans: [],
                    // Currently banned titles which will be removed from the config card
                    pendingUnbans: []
                },
                // Memories are parsed from context and handled by various operations (basically magic)
                memories: {
                    // Dynamic store of 'story card -> memory' conceptual relations
                    associations: {},
                    // Serialized hashset of the 2000 most recent near-duplicate memories purged from context
                    duplicates: "%@%"
                }
            }
        };
    })();
    O.f(AC);
    O.s(AC.config);
    O.s(AC.signal);
    O.s(AC.generation);
    O.s(AC.generation.workpiece);
    AC.generation.pending.forEach(request => O.s(request));
    O.s(AC.compression);
    O.s(AC.message);
    O.s(AC.chronometer);
    O.f(AC.database);
    O.s(AC.database.titles);
    O.s(AC.database.memories);
    if (!HOOK) {
        globalThis.stop ??= false;
        AC.signal.maxChars = Math.abs(info?.maxChars || AC.signal.maxChars);
        if (HOOK === null) {
            if (Number.isInteger(info.maxChars)) {
                // AutoCards(null) is always invoked once after being declared within the shared library
                // Context must be cleaned before passing text to the context modifier
                // This measure is taken to ensure compatability with other scripts
                // First, remove all command, continue, and comfirmation messages from the context window
                text = (text
                    // Remove all /ac commands
                    .replace(/\s*^.*\/\s*A\s*C.*$\s*/gmi, "\n\n")
                    // Remove all comfirmation requests and responses
                    .replace(/\s*\n*.*CONFIRM\s*DELETE.*\n*\s*/gi, confirmation => {
                        if (confirmation.includes("<<<")) {
                            return "\n\n";
                        } else {
                            return "";
                        }
                    })
                    // Remove dumb memories from the context window
                    // (Latitude, if you're reading this, please give us memoryBank read/write access 😭)
                    .replace(/(Memories:)\s*([\s\S]*?)\s*(Recent Story:|$)/i, (_, left, memories, right) => {
                        return (left + "\n" + (memories
                            .split("\n")
                            .filter(memory => {
                                const lowerMemory = memory.toLowerCase();
                                return !(
                                    (lowerMemory.includes("select") && lowerMemory.includes("continue"))
                                    || lowerMemory.includes(">>>") || lowerMemory.includes("<<<")
                                    || lowerMemory.includes("lsiv2")
                                );
                            })
                            .join("\n")
                        ) + (right !== "") ? ("\n\n" + right) : "");
                    })
                    // Remove various Auto-Cards messages
                    .replace(/(?:\s*>>>[\s\S]*?<<<\s*)+/g, "\n\n")
                );
                if (!shouldProceed()) {
                    // Whenever Auto-Cards is inactive, remove auto card title headers from contextualized story card entries
                    text = (text
                        .replace(/\s*{\s*titles?\s*:[\s\S]*?}\s*/gi, "\n\n")
                        .replace(/World Lore:\s*/i, "World Lore:\n")
                    );
                    // Otherwise, implement a more complex version of this step within the (HOOK === "context") scope of AutoCards
                }
            }
            CODOMAIN.initialize(null);
        } else {
            // AutoCards was (probably) called without arguments, return an external API to allow other script creators to programmatically govern the behavior of Auto-Cards from elsewhere within their own scripts
            state.InnerSelf ??= {};
            state.InnerSelf.AC ??= {};
            state.InnerSelf.AC.forced = true;
            CODOMAIN.initialize({
                API: O.f(Object.fromEntries(Object.entries({
                    // Call these API functions like so: AutoCards().API.nameOfFunction(argumentsOfFunction)
                    /*** Postpones internal Auto-Cards events for a specified number of turns
                    * 
                    * @function
                    * @param {number} turns A non-negative integer representing the number of turns to postpone events
                    * @returns {Object} An object containing cooldown values affected by the postponement
                    * @throws {Error} If turns is not a non-negative integer
                    */
                    postponeEvents: function (turns) {
                        if (Number.isInteger(turns) && (0 <= turns)) {
                            AC.chronometer.postpone = turns;
                        } else {
                            throw new Error(
                                "Invalid argument: \"" + turns + "\" -> AutoCards().API.postponeEvents() must be be called with a non-negative integer"
                            );
                        }
                        return {
                            postponeAllCooldown: turns,
                            addCardRealCooldown: AC.generation.cooldown,
                            addCardNextCooldown: AC.config.addCardCooldown
                        };
                    },
                    /*** Sets or clears the emergency halt flag to pause Auto-Cards operations
                    * 
                    * @function
                    * @param {boolean} shouldHalt A boolean value indicating whether to engage (true) or disengage (false) emergency halt
                    * @returns {boolean} The value that was set
                    * @throws {Error} If called from within isolateLSIv2 scope or with a non-boolean argument
                    */
                    emergencyHalt: function (shouldHalt) {
                        const scopeRestriction = new Error();
                        if (scopeRestriction.stack && scopeRestriction.stack.includes("isolateLSIv2")) {
                            throw new Error(
                                "Scope restriction: AutoCards().API.emergencyHalt() cannot be called from within LSIv2 (prevents deadlock) but you're more than welcome to use AutoCards().API.postponeEvents() instead!"
                            );
                        } else if (typeof shouldHalt === "boolean") {
                            AC.signal.emergencyHalt = shouldHalt;
                        } else {
                            throw new Error(
                                "Invalid argument: \"" + shouldHalt + "\" -> AutoCards().API.emergencyHalt() must be called with a boolean true or false"
                            );
                        }
                        return shouldHalt;
                    },
                    /*** Enables or disables state.message assignments from Auto-Cards
                    * 
                    * @function
                    * @param {boolean} shouldSuppress If true, suppresses all Auto-Cards messages; false enables them
                    * @returns {Array} The current pending messages after setting suppression
                    * @throws {Error} If shouldSuppress is not a boolean
                    */
                    suppressMessages: function (shouldSuppress) {
                        if (typeof shouldSuppress === "boolean") {
                            AC.message.suppress = shouldSuppress;
                        } else {
                            throw new Error(
                                "Invalid argument: \"" + shouldSuppress + "\" -> AutoCards().API.suppressMessages() must be called with a boolean true or false"
                            );
                        }
                        return AC.message.pending;
                    },
                    /*** Logs debug information to the "Debug Log" console card
                    * 
                    * @function
                    * @param {...any} args Arguments to log for debugging purposes
                    * @returns {any} The story card object reference
                    */
                    debugLog: function (...args) {
                        return Internal.debugLog(...args);
                    },
                    /*** Toggles Auto-Cards behavior or sets it directly
                    * 
                    * @function
                    * @param {boolean|null|undefined} toggleType If undefined, toggles the current state. If boolean or null, sets the state accordingly
                    * @returns {boolean|null|undefined} The state that was set or inferred
                    * @throws {Error} If toggleType is not a boolean, null, or undefined
                    */
                    toggle: function (toggleType) {
                        if (toggleType === undefined) {
                            if (AC.signal.forceToggle !== null) {
                                AC.signal.forceToggle = !AC.signal.forceToggle;
                            } else if (AC.config.doAC) {
                                AC.signal.forceToggle = false;
                            } else {
                                AC.signal.forceToggle = true;
                            }
                        } else if ((toggleType === null) || (typeof toggleType === "boolean")) {
                            AC.signal.forceToggle = toggleType;
                        } else {
                            throw new Error(
                                "Invalid argument: \"" + toggleType + "\" -> AutoCards().API.toggle() must be called with either A) a boolean true or false, B) a null argument, or C) no arguments at all (undefined)"
                            );
                        }
                        return toggleType;
                    },
                    /*** Generates a new card using optional prompt details or a request object
                    * 
                    * @function
                    * @param {Object|string} request A request object with card parameters or a string representing the title
                    * @param {string} [extra1] Optional entryPromptDetails if using string mode
                    * @param {string} [extra2] Optional entryStart if using string mode
                    * @returns {boolean} Did the generation attempt succeed or fail
                    * @throws {Error} If the request is not valid or missing a title
                    */
                    generateCard: function (request, extra1, extra2) {
                        // Function call guide:
                        // AutoCards().API.generateCard({
                        //     // All properties except 'title' are optional
                        //     type: "card type, defaults to 'class' for ease of filtering",
                        //     title: "card title",
                        //     keysStart: "preexisting card triggers",
                        //     entryStart: "preexisting card entry",
                        //     entryPrompt: "prompt the AI will use to complete this entry",
                        //     entryPromptDetails: "extra details to include with this card's prompt",
                        //     entryLimit: 600, // target character count for the generated entry
                        //     description: "card notes",
                        //     memoryStart: "preexisting card memory",
                        //     memoryUpdates: true, // card updates when new relevant memories are formed
                        //     memoryLimit: 3200, // max characters before the card memory is compressed
                        // });
                        if (typeof request === "string") {
                            request = { title: request };
                            if (typeof extra1 === "string") {
                                request.entryPromptDetails = extra1;
                                if (typeof extra2 === "string") {
                                    request.entryStart = extra2;
                                }
                            }
                        } else if (!isTitleInObj(request)) {
                            throw new Error(
                                "Invalid argument: \"" + request + "\" -> AutoCards().API.generateCard() must be called with either 1, 2, or 3 strings OR a correctly formatted card generation object"
                            );
                        }
                        O.f(request);
                        Internal.getUsedTitles(true);
                        return Internal.generateCard(request);
                    },
                    /*** Regenerates a card by title or object reference, optionally preserving or modifying its input info
                    *
                    * @function
                    * @param {Object|string} request A card object reference or title string for the card to be regenerated
                    * @param {boolean} [useOldInfo=true] If true, preserves old info in the new generation; false omits it
                    * @param {string} [newInfo=""] Additional info to append to the generation prompt
                    * @returns {boolean} True if regeneration succeeded; false otherwise
                    * @throws {Error} If the request format is invalid, or if the second or third parameters are the wrong types
                    */
                    redoCard: function (request, useOldInfo = true, newInfo = "") {
                        if (typeof request === "string") {
                            request = { title: request };
                        } else if (!isTitleInObj(request)) {
                            throw new Error(
                                "Invalid argument: \"" + request + "\" -> AutoCards().API.redoCard() must be called with a string or correctly formatted card generation object"
                            );
                        }
                        if (typeof useOldInfo !== "boolean") {
                            throw new Error(
                                "Invalid argument: \"" + request + ", " + useOldInfo + "\" -> AutoCards().API.redoCard() requires a boolean as its second argument"
                            );
                        } else if (typeof newInfo !== "string") {
                            throw new Error(
                                "Invalid argument: \"" + request + ", " + useOldInfo + ", " + newInfo + "\" -> AutoCards().API.redoCard() requires a string for its third argument"
                            );
                        }
                        return Internal.redoCard(request, useOldInfo, newInfo);
                    },
                    /*** Flags or unflags a card as an auto-card, controlling its automatic generation behavior
                    *
                    * @function
                    * @param {Object|string} targetCard The card object or title to mark/unmark as an auto-card
                    * @param {boolean} [setOrUnset=true] If true, marks the card as an auto-card; false removes the flag
                    * @returns {boolean} True if the operation succeeded; false if the card was invalid or already matched the target state
                    * @throws {Error} If the arguments are invalid types
                    */
                    setCardAsAuto: function (targetCard, setOrUnset = true) {
                        if (isTitleInObj(targetCard)) {
                            targetCard = targetCard.title;
                        } else if (typeof targetCard !== "string") {
                            throw new Error(
                                "Invalid argument: \"" + targetCard + "\" -> AutoCards().API.setCardAsAuto() must be called with a string or card object"
                            );
                        }
                        if (typeof setOrUnset !== "boolean") {
                            throw new Error(
                                "Invalid argument: \"" + targetCard + ", " + setOrUnset + "\" -> AutoCards().API.setCardAsAuto() requires a boolean as its second argument"
                            );
                        }
                        const [card, isAuto] = getIntendedCard(targetCard);
                        if (card === null) {
                            return false;
                        }
                        if (setOrUnset) {
                            if (checkAuto()) {
                                return false;
                            }
                            card.description = "{title:}";
                            Internal.getUsedTitles(true);
                            return card.entry.startsWith("{title: ");
                        } else if (!checkAuto()) {
                            return false;
                        }
                        card.entry = removeAutoProps(card.entry);
                        card.description = removeAutoProps(card.description.replace((
                            /\s*Auto(?:-|\s*)Cards\s*will\s*contextualize\s*these\s*memories\s*:\s*/gi
                        ), ""));
                        function checkAuto() {
                            return (isAuto || /{updates: (?:true|false), limit: \d+}/.test(card.description));
                        }
                        return true;
                    },
                    /*** Appends a memory to a story card's memory bank
                    *
                    * @function
                    * @param {Object|string} targetCard A card object reference or title string
                    * @param {string} newMemory The memory text to add
                    * @returns {boolean} True if the memory was added; false if it was empty, already present, or the card was not found
                    * @throws {Error} If the inputs are not a string or valid card object reference
                    */
                    addCardMemory: function (targetCard, newMemory) {
                        if (isTitleInObj(targetCard)) {
                            targetCard = targetCard.title;
                        } else if (typeof targetCard !== "string") {
                            throw new Error(
                                "Invalid argument: \"" + targetCard + "\" -> AutoCards().API.addCardMemory() must be called with a string or card object"
                            );
                        }
                        if (typeof newMemory !== "string") {
                            throw new Error(
                                "Invalid argument: \"" + targetCard + ", " + newMemory + "\" -> AutoCards().API.addCardMemory() requires a string for its second argument"
                            );
                        }
                        newMemory = newMemory.trim().replace(/\s+/g, " ").replace(/^-+\s*/, "");
                        if (newMemory === "") {
                            return false;
                        }
                        const [card, isAuto, titleKey] = getIntendedCard(targetCard);
                        if (
                            (card === null)
                            || card.description.replace(/\s+/g, " ").toLowerCase().includes(newMemory.toLowerCase())
                        ) {
                            return false;
                        } else if (card.description !== "") {
                            card.description += "\n";
                        }
                        card.description += "- " + newMemory;
                        if (titleKey in AC.database.memories.associations) {
                            AC.database.memories.associations[titleKey][1] = (StringsHashed
                                .deserialize(AC.database.memories.associations[titleKey][1], 65536)
                                .remove(newMemory)
                                .add(newMemory)
                                .latest(3500)
                                .serialize()
                            );
                        } else if (isAuto) {
                            AC.database.memories.associations[titleKey] = [999, (new StringsHashed(65536)
                                .add(newMemory)
                                .serialize()
                            )];
                        }
                        return true;
                    },
                    /*** Removes all previously generated auto-cards and resets various states
                    *
                    * @function
                    * @returns {number} The number of cards that were removed
                    */
                    eraseAllAutoCards: function () {
                        return Internal.eraseAllAutoCards();
                    },
                    /*** Retrieves an array of titles currently used by the adventure's story cards
                    *
                    * @function
                    * @returns {Array<string>} An array of strings representing used titles
                    */
                    getUsedTitles: function () {
                        return Internal.getUsedTitles(true);
                    },
                    /*** Retrieves an array of banned titles
                    *
                    * @function
                    * @returns {Array<string>} An array of banned title strings
                    */
                    getBannedTitles: function () {
                        return Internal.getBannedTitles();
                    },
                    /*** Sets the banned titles array, replacing any previously banned titles
                    *
                    * @function
                    * @param {string|Array<string>} titles A comma-separated string or array of strings representing titles to ban
                    * @returns {Object} An object containing oldBans and newBans arrays
                    * @throws {Error} If the input is neither a string nor an array of strings
                    */
                    setBannedTitles: function (titles) {
                        const codomain = { oldBans: AC.database.titles.banned };
                        if (Array.isArray(titles) && titles.every(title => (typeof title === "string"))) {
                            assignBannedTitles(titles);
                        } else if (typeof titles === "string") {
                            if (titles.includes(",")) {
                                assignBannedTitles(titles.split(","));
                            } else {
                                assignBannedTitles([titles]);
                            }
                        } else {
                            throw new Error(
                                "Invalid argument: \"" + titles + "\" -> AutoCards().API.setBannedTitles() must be called with either a string or an array of strings"
                            );
                        }
                        codomain.newBans = AC.database.titles.banned;
                        function assignBannedTitles(titles) {
                            Internal.setBannedTitles(uniqueTitlesArray(titles), false);
                            AC.signal.overrideBans = 3;
                            return;
                        }
                        return codomain;
                    },
                    /*** Creates a new story card with the specified parameters
                    *
                    * @function
                    * @param {string|Object} title Card title string or full card template object containing all fields
                    * @param {string} [entry] The entry text for the card
                    * @param {string} [type] The card type (e.g., "character", "location")
                    * @param {string} [keys] The keys (triggers) for the card
                    * @param {string} [description] The notes or memory bank of the card
                    * @param {number} [insertionIndex] Optional index to insert the card at a specific position within storyCards
                    * @returns {Object|null} The created card object reference, or null if creation failed
                    */
                    buildCard: function (title, entry, type, keys, description, insertionIndex) {
                        if (isTitleInObj(title)) {
                            type = title.type ?? type;
                            keys = title.keys ?? keys;
                            entry = title.entry ?? entry;
                            description = title.description ?? description;
                            title = title.title;
                        }
                        title = cast(title);
                        const card = constructCard(O.f({
                            type: cast(type, AC.config.defaultCardType),
                            title,
                            keys: cast(keys, buildKeys("", title)),
                            entry: cast(entry),
                            description: cast(description)
                        }), boundInteger(0, insertionIndex, storyCards.length, newCardIndex()));
                        if (notEmptyObj(card)) {
                            return card;
                        }
                        function cast(value, fallback = "") {
                            if (typeof value === "string") {
                                return value;
                            } else {
                                return fallback;
                            }
                        }
                        return null;
                    },
                    /*** Finds and returns story cards satisfying a user-defined condition
                    *
                    * @function
                    * @param {Function} predicate A function which takes a card and returns true if it matches
                    * @param {boolean} [getAll=false] If true, returns all matching cards; otherwise returns the first match
                    * @returns {Object|Array<Object>|null} A single card object reference, an array of cards, or null if no match is found
                    * @throws {Error} If the predicate is not a function or getAll is not a boolean
                    */
                    getCard: function (predicate, getAll = false) {
                        if (typeof predicate !== "function") {
                            throw new Error(
                                "Invalid argument: \"" + predicate + "\" -> AutoCards().API.getCard() must be called with a function"
                            );
                        } else if (typeof getAll !== "boolean") {
                            throw new Error(
                                "Invalid argument: \"" + predicate + ", " + getAll + "\" -> AutoCards().API.getCard() requires a boolean as its second argument"
                            );
                        }
                        return Internal.getCard(predicate, getAll);
                    },
                    /*** Removes story cards based on a user-defined condition or by direct reference
                    *
                    * @function
                    * @param {Function|Object} predicate A predicate function or a card object reference
                    * @param {boolean} [eraseAll=false] If true, removes all matching cards; otherwise removes the first match
                    * @returns {boolean|number} True if a single card was removed, false if none matched, or the number of cards erased
                    * @throws {Error} If the inputs are not a valid predicate function, card object, or boolean
                    */
                    eraseCard: function (predicate, eraseAll = false) {
                        if (isTitleInObj(predicate) && storyCards.includes(predicate)) {
                            return eraseCard(predicate);
                        } else if (typeof predicate !== "function") {
                            throw new Error(
                                "Invalid argument: \"" + predicate + "\" -> AutoCards().API.eraseCard() must be called with a function or card object"
                            );
                        } else if (typeof eraseAll !== "boolean") {
                            throw new Error(
                                "Invalid argument: \"" + predicate + ", " + eraseAll + "\" -> AutoCards().API.eraseCard() requires a boolean as its second argument"
                            );
                        } else if (eraseAll) {
                            // Erase all cards which satisfy the given condition
                            let cardsErased = 0;
                            for (const [index, card] of storyCards.entries()) {
                                if (predicate(card)) {
                                    removeStoryCard(index);
                                    cardsErased++;
                                }
                            }
                            return cardsErased;
                        }
                        // Erase the first card which satisfies the given condition
                        for (const [index, card] of storyCards.entries()) {
                            if (predicate(card)) {
                                removeStoryCard(index);
                                return true;
                            }
                        }
                        return false;
                    }
                }).map(([key, fn]) => [key, function (...args) {
                    const result = fn.apply(this, args);
                    if (data) {
                        data.description = JSON.stringify(AC);
                    }
                    return result;
                }])))
            });
            function isTitleInObj(obj) {
                return (
                    (typeof obj === "object")
                    && (obj !== null)
                    && ("title" in obj)
                    && (typeof obj.title === "string")
                );
            }
        }
    } else if (AC.signal.emergencyHalt) {
        switch (HOOK) {
            case "context": {
                // AutoCards was called within the context modifier
                advanceChronometer();
                break;
            }
            case "output": {
                // AutoCards was called within the output modifier
                concludeEmergency();
                const previousAction = readPastAction(0);
                if (isDoSayStory(previousAction.type) && /escape\s*emergency\s*halt/i.test(previousAction.text)) {
                    AC.signal.emergencyHalt = false;
                }
                break;
            }
        }
        CODOMAIN.initialize(TEXT);
    } else if ((AC.config.LSIv2 !== null) && AC.config.LSIv2) {
        // Silly recursion shenanigans
        state.LSIv2 = AC;
        AC.config.LSIv2 = false;
        const LSI_DOMAIN = AutoCards(HOOK, TEXT, STOP);
        // Is this lazy loading mechanism overkill? Yes. But it's fun!
        const factories = O.f({
            library: () => ({
                name: Words.reserved.library,
                entry: prose(
                    "// Your adventure's Shared Library code goes here",
                    "// Example Library code:",
                    "state.promptDragon ??= false;",
                    "state.mind ??= 0;",
                    "state.willStop ??= false;",
                    "function formatMessage(message, space = \" \") {",
                    "    let leadingNewlines = \"\";",
                    "    let trailingNewlines = \"\\n\\n\";",
                    "    if (text.startsWith(\"\\n> \")) {",
                    "        // We don't want any leading/trailing newlines for Do/Say",
                    "        trailingNewlines = \"\";",
                    "    } else if (history && (0 < history.length)) {",
                    "        // Decide leading newlines based on the previous action",
                    "        const action = history[history.length - 1];",
                    "        if ((action.type === \"continue\") || (action.type === \"story\")) {",
                    "            if (!action.text.endsWith(\"\\n\")) {",
                    "                leadingNewlines = \"\\n\\n\";",
                    "            } else if (!action.text.endsWith(\"\\n\\n\")) {",
                    "                leadingNewlines = \"\\n\";",
                    "            }",
                    "        }",
                    "    }",
                    "    return leadingNewlines + \"{>\" + space + (message",
                    "        .replace(/(?:\\s*(?:{>|<})\\s*)+/g, \" \")",
                    "        .trim()",
                    "    ) + space + \"<}\" + trailingNewlines;",
                    "}"),
                description:
                    "// You may also continue your Library code below",
                singleton: false,
                position: 2
            }),
            input: () => ({
                name: Words.reserved.input,
                entry: prose(
                    "// Your adventure's Input Modifier code goes here",
                    "// Example Input code:",
                    "const minds = [",
                    "\"kind and gentle\",",
                    "\"curious and eager\",",
                    "\"cruel and evil\"",
                    "];",
                    "// Type any of these triggers into a Do/Say/Story action",
                    "const commands = new Map([",
                    "[\"encounter dragon\", () => {",
                    "    AutoCards().API.postponeEvents(1);",
                    "    state.promptDragon = true;",
                    "    text = formatMessage(\"You encounter a dragon!\");",
                    "    log(\"A dragon appears!\");",
                    "}],",
                    "[\"summon leah\", () => {",
                    "    alterMind();",
                    "    const success = AutoCards().API.generateCard({",
                    "        title: \"Leah\",",
                    "        entryPromptDetails: (",
                    "            \"Leah is an exceptionally \" +",
                    "            minds[state.mind] +",
                    "            \" woman\"",
                    "        ),",
                    "        entryStart: \"Leah is your magically summoned assistant.\"",
                    "    });",
                    "    if (success) {",
                    "        text = formatMessage(\"You begin summoning Leah!\");",
                    "        log(\"Attempting to summon Leah\");",
                    "    } else {",
                    "        text = formatMessage(\"You failed to summon Leah...\");",
                    "        log(\"Leah could not be summoned\");",
                    "    }",
                    "}],",
                    "[\"alter leah\", () => {",
                    "    alterMind();",
                    "    const success = AutoCards().API.redoCard(\"Leah\", true, (",
                    "        \"You used your magic on Leah\\n\" +",
                    "        \"Therefore she is now entirely \" +",
                    "        minds[state.mind]",
                    "    ));",
                    "    if (success) {",
                    "        text = formatMessage(",
                    "            \"You proceed to alter Leah's mind!\"",
                    "        );",
                    "        log(\"Attempting to alter Leah\");",
                    "    } else {",
                    "        text = formatMessage(\"You failed to alter Leah...\");",
                    "        log(\"Leah could not be altered\");",
                    "    }",
                    "}],",
                    "[\"show api\", () => {",
                    "    state.showAPI = true;",
                    "    text = formatMessage(\"Displaying the Auto-Cards API below\");",
                    "}],",
                    "[\"force stop\", () => {",
                    "    state.willStop = true;",
                    "}]",
                    "]);",
                    "const lowerText = text.toLowerCase();",
                    "for (const [trigger, implement] of commands) {",
                    "    if (lowerText.includes(trigger)) {",
                    "        implement();",
                    "        break;",
                    "    }",
                    "}",
                    "function alterMind() {",
                    "    state.mind = (state.mind + 1) % minds.length;",
                    "    return;",
                    "}"),
                description:
                    "// You may also continue your Input code below",
                singleton: false,
                position: 3
            }),
            context: () => ({
                name: Words.reserved.context,
                entry: prose(
                    "// Your adventure's Context Modifier code goes here",
                    "// Example Context code:",
                    "text = text.replace(/\\s*{>[\\s\\S]*?<}\\s*/gi, \"\\n\\n\");",
                    "if (state.willStop) {",
                    "    state.willStop = false;",
                    "    // Assign true to prevent the onOutput hook",
                    "    // This can only be done onContext",
                    "    stop = true;",
                    "} else if (state.promptDragon) {",
                    "    state.promptDragon = false;",
                    "    text = (",
                    "        text.trimEnd() +",
                    "        \"\\n\\nA cute little dragon softly lands upon your head. \"",
                    "    );",
                    "}"),
                description:
                    "// You may also continue your Context code below",
                singleton: false,
                position: 4
            }),
            output: () => ({
                name: Words.reserved.output,
                entry: prose(
                    "// Your adventure's Output Modifier code goes here",
                    "// Example Output code:",
                    "if (state.showAPI) {",
                    "    state.showAPI = false;",
                    "    const apiKeys = (Object.keys(AutoCards().API)",
                    "        .map(key => (\"AutoCards().API.\" + key + \"()\"))",
                    "    );",
                    "    text = formatMessage(apiKeys.join(\"\\n\"), \"\\n\");",
                    "    log(apiKeys);",
                    "}"),
                description:
                    "// You may also continue your Output code below",
                singleton: false,
                position: 5
            }),
            guide: () => ({
                name: Words.reserved.guide,
                entry: prose(
                    "Any valid JavaScript code you write within the Shared Library or Input/Context/Output Modifier story cards will be executed from top to bottom; Live Script Interface v2 closely emulates AI Dungeon's native scripting environment, even if you aren't the owner of the original scenario. Furthermore, I've provided full access to the Auto-Cards scripting API. Please note that disabling LSIv2 via the \"Configure Auto-Cards\" story card will reset your LSIv2 adventure scripts!",
                    "",
                    "If you aren't familiar with scripting in AI Dungeon, please refer to the official guidebook page:",
                    "https://help.aidungeon.com/scripting",
                    "",
                    "I've included an example script with the four aforementioned code cards, to help showcase some of my fancy schmancy Auto-Cards API functions. Take a look, try some of my example commands, inspect the Console Log, and so on... It's a ton of fun! ❤️",
                    "",
                    "If you ever run out of space in your Library, Input, Context, or Output code cards, simply duplicate whichever one(s) you need and then perform an in-game turn before writing any more code. (emphasis on \"before\") Doing so will signal LSIv2 to convert your duplicated code card(s) into additional auxiliary versions.",
                    "",
                    "Auxiliary code cards are numbered, and any code written within will be appended in sequential order. For example:",
                    "// Shared Library (entry)",
                    "// Shared Library (notes)",
                    "// Shared Library 2 (entry)",
                    "// Shared Library 2 (notes)",
                    "// Shared Library 3 (entry)",
                    "// Shared Library 3 (notes)",
                    "// Input Modifier (entry)",
                    "// Input Modifier (notes)",
                    "// Input Modifier 2 (entry)",
                    "// Input Modifier 2 (notes)",
                    "// And so on..."),
                description:
                    "",
                singleton: true,
                position: 0
            }),
            state: () => ({
                name: Words.reserved.state,
                entry:
                    "Your adventure's full state object is displayed in the Notes section below.",
                description:
                    "",
                singleton: true,
                position: 6
            }),
            log: () => ({
                name: Words.reserved.log,
                entry:
                    "Please refer to the Notes section below to view the full log history for LSIv2. Console log entries are ordered from most recent to oldest. LSIv2 error messages will be recorded here, alongside the outputs of log and console.log function calls within your adventure scripts.",
                description:
                    "",
                singleton: true,
                position: 1
            })
        });
        const cache = {};
        const templates = new Proxy({}, {
            get(_, key) {
                return cache[key] ??= O.f(factories[key]());
            }
        });
        if (AC.config.LSIv2 !== null) {
            switch (HOOK) {
                case "input": {
                    // AutoCards was called within the input modifier
                    const [libraryCards, inputCards, logCard] = collectCards(
                        templates.library,
                        templates.input,
                        templates.log
                    );
                    const [error, newText] = isolateLSIv2(parseCode(libraryCards, inputCards), callbackLog(logCard), LSI_DOMAIN);
                    handleError(logCard, error);
                    if (hadError()) {
                        CODOMAIN.initialize(getStoryError());
                        AC.signal.upstreamError = "\n";
                    } else {
                        CODOMAIN.initialize(newText);
                    }
                    break;
                }
                case "context": {
                    // AutoCards was called within the context modifier
                    const [libraryCards, contextCards, logCard] = collectCards(
                        templates.library,
                        templates.context,
                        templates.log,
                        templates.input
                    );
                    if (hadError()) {
                        endContextLSI(LSI_DOMAIN);
                        break;
                    }
                    const [error, ...newCodomain] = (([error, newText, newStop]) => [error, newText, (newStop === true)])(
                        isolateLSIv2(parseCode(libraryCards, contextCards), callbackLog(logCard), LSI_DOMAIN[0], LSI_DOMAIN[1])
                    );
                    handleError(logCard, error);
                    endContextLSI(newCodomain);
                    function endContextLSI(newCodomain) {
                        CODOMAIN.initialize(newCodomain);
                        if (!newCodomain[1]) {
                            return;
                        }
                        const [guideCard, stateCard] = collectCards(
                            templates.guide,
                            templates.state,
                            templates.output
                        );
                        AC.message.pending = [];
                        concludeLSI(guideCard, stateCard, logCard);
                        return;
                    }
                    break;
                }
                case "output": {
                    // AutoCards was called within the output modifier
                    const [libraryCards, outputCards, guideCard, stateCard, logCard] = collectCards(
                        templates.library,
                        templates.output,
                        templates.guide,
                        templates.state,
                        templates.log
                    );
                    if (hadError()) {
                        endOutputLSI(true, LSI_DOMAIN);
                        break;
                    }
                    const [error, newText] = isolateLSIv2(parseCode(libraryCards, outputCards), callbackLog(logCard), LSI_DOMAIN);
                    handleError(logCard, error);
                    endOutputLSI(hadError(), newText);
                    function endOutputLSI(displayError, newText) {
                        if (displayError) {
                            if (AC.signal.upstreamError === "\n") {
                                CODOMAIN.initialize("\n");
                            } else {
                                CODOMAIN.initialize(getStoryError() + "\n");
                            }
                            AC.message.pending = [];
                        } else {
                            CODOMAIN.initialize(newText);
                        }
                        concludeLSI(guideCard, stateCard, logCard);
                        return;
                    }
                    break;
                }
                case "initialize": {
                    collectAll();
                    logToCard(Internal.getCard(card => (card.title === templates.log.name)), "LSIv2 startup -> Success!");
                    CODOMAIN.initialize(null);
                    break;
                }
            }
            AC.config.LSIv2 = true;
            function parseCode(...args) {
                return (args
                    .flatMap(cardset => [cardset.primary, ...cardset.auxiliaries])
                    .flatMap(card => [card.entry, card.description])
                    .join("\n")
                );
            }
            function callbackLog(logCard) {
                return function (...args) {
                    logToCard(logCard, ...args);
                    return;
                }
            }
            function handleError(logCard, error) {
                if (!error) {
                    return;
                }
                O.f(error);
                AC.signal.upstreamError = (
                    "LSIv2 encountered an error during the on" + HOOK[0].toUpperCase() + HOOK.slice(1) + " hook"
                );
                if (error.message) {
                    AC.signal.upstreamError += ":\n";
                    if (error.stack) {
                        const stackMatch = error.stack.match(/AutoCards[\s\S]*?:\s*(\d+)\s*:\s*(\d+)/i);
                        if (stackMatch) {
                            AC.signal.upstreamError += (
                                (error.name ?? "Error") + ": " + error.message + "\n" +
                                "(line #" + stackMatch[1] + " column #" + stackMatch[2] + ")"
                            );
                        } else {
                            AC.signal.upstreamError += error.stack;
                        }
                    } else {
                        AC.signal.upstreamError += (error.name ?? "Error") + ": " + error.message;
                    }
                    AC.signal.upstreamError = cleanSpaces(AC.signal.upstreamError.trimEnd());
                }
                logToCard(logCard, AC.signal.upstreamError);
                if (getStateMessage() === AC.signal.upstreamError) {
                    state.message = AC.signal.upstreamError + " ";
                } else {
                    state.message = AC.signal.upstreamError;
                }
                return;
            }
            function hadError() {
                return (AC.signal.upstreamError !== "");
            }
            function getStoryError() {
                return getPrecedingNewlines() + ">>>\n" + AC.signal.upstreamError + "\n<<<\n";
            }
            function concludeLSI(guideCard, stateCard, logCard) {
                AC.signal.upstreamError = "";
                guideCard.description = templates.guide.description;
                guideCard.entry = templates.guide.entry;
                stateCard.entry = templates.state.entry;
                logCard.entry = templates.log.entry;
                postMessages();
                const simpleState = { ...state };
                delete simpleState.LSIv2;
                stateCard.description = limitString(stringifyObject(simpleState).trim(), 999999).trimEnd();
                return;
            }
        } else {
            const cardsets = collectAll();
            for (const cardset of cardsets) {
                if ("primary" in cardset) {
                    killCard(cardset.primary);
                    for (const card of cardset.auxiliaries) {
                        killCard(card);
                    }
                } else {
                    killCard(cardset);
                }
                function killCard(card) {
                    unbanTitle(card.title);
                    eraseCard(card);
                }
            }
            AC.signal.upstreamError = "";
            CODOMAIN.initialize(LSI_DOMAIN);
        }
        // This measure ensures the Auto-Cards external API is equally available from within the inner scope of LSIv2
        // As before, call with AutoCards().API.nameOfFunction(yourArguments);
        deepMerge(AC, state.LSIv2);
        delete state.LSIv2;
        function deepMerge(target, source) {
            for (const key in source) {
                if (!source.hasOwnProperty(key)) {
                    continue;
                } else if (
                    (typeof source[key] === "object")
                    && (source[key] !== null)
                    && !Array.isArray(source[key])
                    && (typeof target[key] === "object")
                    && (target[key] !== null)
                    && (key !== "workpiece")
                    && (key !== "associations")
                ) {
                    // Recursively merge static objects
                    deepMerge(target[key], source[key]);
                } else {
                    // Directly replace values
                    target[key] = source[key];
                }
            }
            return;
        }
        function collectAll() {
            return collectCards(...Object.keys(factories).map(key => templates[key]));
        }
        // collectCards constructs, validates, repairs, retrieves, and organizes all LSIv2 script cards associated with the given arguments by iterating over the storyCards array only once! Returned elements are easily handled via array destructuring assignment
        function collectCards(...args) {
            // args: [{name: string, entry: string, description: string, singleton: boolean, position: integer}]
            const collections = O.f(args.map(({ name, entry, description, singleton, position }) => {
                const collection = {
                    template: O.f({
                        type: AC.config.defaultCardType,
                        title: name,
                        keys: name,
                        entry,
                        description
                    }),
                    singleton,
                    position,
                    primary: null,
                    excess: [],
                };
                if (!singleton) {
                    collection.auxiliaries = [];
                    collection.occupied = new Set([0, 1]);
                }
                return O.s(collection);
            }));
            for (const card of storyCards) {
                O.s(card);
                for (const collection of collections) {
                    if (
                        !card.title.toLowerCase().includes(collection.template.title.toLowerCase())
                        && !card.keys.toLowerCase().includes(collection.template.title.toLowerCase())
                    ) {
                        // No match, swipe left
                        continue;
                    }
                    if (collection.singleton) {
                        setPrimary();
                        break;
                    }
                    const [extensionA, extensionB] = [card.title, card.keys].map(name => {
                        const extensionMatch = name.replace(/[^a-zA-Z0-9]/g, "").match(/\d+$/);
                        if (extensionMatch) {
                            return parseInt(extensionMatch[0], 10);
                        } else {
                            return -1;
                        }
                    });
                    if (-1 < extensionA) {
                        if (-1 < extensionB) {
                            if (collection.occupied.has(extensionA)) {
                                setAuxiliary(extensionB);
                            } else {
                                setAuxiliary(extensionA, true);
                            }
                        } else {
                            setAuxiliary(extensionA);
                        }
                    } else if (-1 < extensionB) {
                        setAuxiliary(extensionB);
                    } else {
                        setPrimary();
                    }
                    function setAuxiliary(extension, preChecked = false) {
                        if (preChecked || !collection.occupied.has(extension)) {
                            addAuxiliary(card, collection, extension);
                        } else {
                            card.title = card.keys = collection.template.title;
                            collection.excess.push(card);
                        }
                        return;
                    }
                    function setPrimary() {
                        card.title = card.keys = collection.template.title;
                        if (collection.primary === null) {
                            collection.primary = card;
                        } else {
                            collection.excess.push(card);
                        }
                        return;
                    }
                    break;
                }
            }
            for (const collection of collections) {
                banTitle(collection.template.title);
                if (collection.singleton) {
                    if (collection.primary === null) {
                        constructPrimary();
                    } else if (hasExs()) {
                        for (const card of collection.excess) {
                            eraseCard(card);
                        }
                    }
                    continue;
                } else if (collection.primary === null) {
                    if (hasExs()) {
                        collection.primary = collection.excess.shift();
                        if (hasExs() || hasAux()) {
                            applyComment(collection.primary);
                        } else {
                            collection.primary.entry = collection.template.entry;
                            collection.primary.description = collection.template.description;
                            continue;
                        }
                    } else {
                        constructPrimary();
                        if (hasAux()) {
                            applyComment(collection.primary);
                        } else {
                            continue;
                        }
                    }
                }
                if (hasExs()) {
                    for (const card of collection.excess) {
                        let extension = 2;
                        while (collection.occupied.has(extension)) {
                            extension++;
                        }
                        applyComment(card);
                        addAuxiliary(card, collection, extension);
                    }
                }
                if (hasAux()) {
                    collection.auxiliaries.sort((a, b) => {
                        return a.extension - b.extension;
                    });
                }
                function hasExs() {
                    return (0 < collection.excess.length);
                }
                function hasAux() {
                    return (0 < collection.auxiliaries.length);
                }
                function applyComment(card) {
                    card.entry = card.description = "// You may continue writing your code here";
                    return;
                }
                function constructPrimary() {
                    collection.primary = constructCard(collection.template, newCardIndex());
                    // I like my LSIv2 cards to display in the proper order once initialized uwu
                    const templateKeys = Object.keys(factories);
                    const cards = templateKeys.map(key => O.f({
                        card: Internal.getCard(card => (card.title === templates[key].name)),
                        position: templates[key].position
                    })).filter(pair => (pair.card !== null));
                    if (cards.length < templateKeys.length) {
                        return;
                    }
                    const fullCardset = cards.sort((a, b) => (a.position - b.position)).map(pair => pair.card);
                    for (const card of fullCardset) {
                        eraseCard(card);
                        card.title = card.keys;
                    }
                    storyCards.splice(newCardIndex(), 0, ...fullCardset);
                    return;
                }
            }
            function addAuxiliary(card, collection, extension) {
                collection.occupied.add(extension);
                card.title = card.keys = collection.template.title + " " + extension;
                collection.auxiliaries.push({ card, extension });
                return;
            }
            return O.f(collections.map(({ singleton, primary, auxiliaries }) => {
                if (singleton) {
                    return primary;
                } else {
                    return O.f({ primary, auxiliaries: O.f(auxiliaries.map(({ card }) => card)) });
                }
            }));
        }
    } else if (AC.config.doAC) {
        // Auto-Cards is currently enabled
        // "text" represents the original text which was present before any scripts were executed
        // "TEXT" represents the script-modified version of "text" which AutoCards was called with
        // This dual scheme exists to ensure Auto-Cards is safely compatible with other scripts
        switch (HOOK) {
            case "input": {
                // AutoCards was called within the input modifier
                if ((AC.config.deleteAllAutoCards === false) && /CONFIRM\s*DELETE/i.test(TEXT)) {
                    CODOMAIN.initialize("CONFIRM DELETE -> Success!");
                } else if (/\/\s*A\s*C/i.test(text)) {
                    CODOMAIN.initialize(doPlayerCommands(text));
                } else if (TEXT.startsWith(" ") && readPastAction(0).text.endsWith("\n")) {
                    // Just a simple little formatting bugfix for regular AID story actions
                    CODOMAIN.initialize(getPrecedingNewlines() + TEXT.replace(/^\s+/, ""));
                } else {
                    CODOMAIN.initialize(TEXT);
                }
                break;
            }
            case "context": {
                // AutoCards was called within the context modifier
                advanceChronometer();
                // Get or construct the "Configure Auto-Cards" story card
                const configureCardTemplate = getConfigureCardTemplate();
                const configureCard = getSingletonCard(true, configureCardTemplate);
                banTitle(configureCardTemplate.title);
                pinAndSortCards(configureCard);
                const bansOverwritten = (0 < AC.signal.overrideBans);
                if ((configureCard.description !== configureCardTemplate.description) || bansOverwritten) {
                    const descConfigPatterns = (getConfigureCardDescription()
                        .split(Words.delimiter)
                        .slice(1)
                        .map(descPattern => (descPattern
                            .slice(0, descPattern.indexOf(":"))
                            .trim()
                            .replace(/\s+/g, "\\s*")
                        ))
                        .map(descPattern => (new RegExp("^\\s*" + descPattern + "\\s*:", "i")))
                    );
                    const descConfigs = configureCard.description.split(Words.delimiter).slice(1);
                    if (
                        (descConfigs.length === descConfigPatterns.length)
                        && descConfigs.every((descConfig, index) => descConfigPatterns[index].test(descConfig))
                    ) {
                        // All description config headers must be present and well-formed
                        let cfg = extractDescSetting(0);
                        if (AC.config.generationPrompt !== cfg) {
                            notify("Changes to your card generation prompt were successfully saved");
                            AC.config.generationPrompt = cfg;
                        }
                        cfg = extractDescSetting(1);
                        if (AC.config.compressionPrompt !== cfg) {
                            notify("Changes to your card memory compression prompt were successfully saved");
                            AC.config.compressionPrompt = cfg;
                        }
                        if (bansOverwritten) {
                            overrideBans();
                        } else if ((0 < AC.database.titles.pendingBans.length) || (0 < AC.database.titles.pendingUnbans.length)) {
                            const pendingBans = AC.database.titles.pendingBans.map(pair => pair[0]);
                            const pendingRewrites = new Set(
                                lowArr([...pendingBans, ...AC.database.titles.pendingUnbans.map(pair => pair[0])])
                            );
                            Internal.setBannedTitles([...pendingBans, ...extractDescSetting(2)
                                .split(",")
                                .filter(newBan => !pendingRewrites.has(newBan.toLowerCase().replace(/\s+/, " ").trim()))
                            ], true);
                        } else {
                            Internal.setBannedTitles(extractDescSetting(2).split(","), true);
                        }
                        function extractDescSetting(index) {
                            return descConfigs[index].replace(descConfigPatterns[index], "").trim();
                        }
                    } else if (bansOverwritten) {
                        overrideBans();
                    }
                    configureCard.description = getConfigureCardDescription();
                    function overrideBans() {
                        Internal.setBannedTitles(AC.database.titles.pendingBans.map(pair => pair[0]), true);
                        AC.signal.overrideBans = 0;
                        return;
                    }
                }
                if (configureCard.entry !== configureCardTemplate.entry) {
                    const oldConfig = {};
                    const settings = O.f((function () {
                        const userSettings = extractSettings(configureCard.entry);
                        if (userSettings.resetallconfigsettingsandprompts !== true) {
                            return userSettings;
                        }
                        // Reset all config settings and display state change notifications only when appropriate
                        Object.assign(oldConfig, AC.config);
                        Object.assign(AC.config, getDefaultConfig());
                        AC.config.deleteAllAutoCards = oldConfig.deleteAllAutoCards;
                        AC.config.LSIv2 = oldConfig.LSIv2;
                        AC.config.defaultCardType = oldConfig.defaultCardType;
                        AC.database.titles.banned = getDefaultConfigBans();
                        configureCard.description = getConfigureCardDescription();
                        configureCard.entry = getConfigureCardEntry();
                        const defaultSettings = extractSettings(configureCard.entry);
                        if (
                            (S.DEFAULT_DO_AC === false)
                            || (userSettings.disableautocards === true)
                        ) {
                            defaultSettings.disableautocards = true;
                        }
                        notify("Restoring all settings and prompts to their default values");
                        return defaultSettings;
                    })());
                    O.f(oldConfig);
                    if ((settings.deleteallautomaticstorycards === true) && (AC.config.deleteAllAutoCards === null)) {
                        AC.config.deleteAllAutoCards = true;
                    } else if (settings.showdetailedguide === true) {
                        AC.signal.outputReplacement = Words.guide;
                    }
                    let cfg;
                    if (parseConfig("pinthisconfigcardnearthetop", false, "pinConfigureCard")) {
                        if (cfg) {
                            pinAndSortCards(configureCard);
                            notify("The settings config card will now be pinned near the top of your story cards list");
                        } else {
                            const index = storyCards.indexOf(configureCard);
                            if (index !== -1) {
                                storyCards.splice(index, 1);
                                storyCards.push(configureCard);
                            }
                            notify("The settings config card will no longer be pinned near the top of your story cards list");
                        }
                    }
                    if (parseConfig("minimumturnscooldownfornewcards", true, "addCardCooldown")) {
                        const oldCooldown = AC.config.addCardCooldown;
                        AC.config.addCardCooldown = validateCooldown(cfg);
                        if (!isPendingGeneration() && !isAwaitingGeneration() && (0 < AC.generation.cooldown)) {
                            const quarterCooldown = validateCooldown(underQuarterInteger(AC.config.addCardCooldown));
                            if ((AC.config.addCardCooldown < oldCooldown) && (quarterCooldown < AC.generation.cooldown)) {
                                // Reduce the next generation's cooldown counter by a factor of 4
                                // But only if the new cooldown config is lower than it was before
                                // And also only if quarter cooldown is less than the current next gen cooldown
                                // (Just a random little user experience improvement)
                                AC.generation.cooldown = quarterCooldown;
                            } else if (oldCooldown < AC.config.addCardCooldown) {
                                if (oldCooldown === AC.generation.cooldown) {
                                    AC.generation.cooldown = AC.config.addCardCooldown;
                                } else {
                                    AC.generation.cooldown = validateCooldown(boundInteger(
                                        0,
                                        AC.generation.cooldown + quarterCooldown,
                                        AC.config.addCardCooldown
                                    ));
                                }
                            }
                        }
                        switch (AC.config.addCardCooldown) {
                            case 9999: {
                                notify(
                                    "You have disabled automatic card generation. To re-enable, simply set your cooldown config to any number lower than 9999. Or use the \"/ac\" in-game command to manually direct the card generation process"
                                );
                                break;
                            }
                            case 1: {
                                notify(
                                    "A new card will be generated during alternating game turns, but only if your story contains available titles"
                                );
                                break;
                            }
                            case 0: {
                                notify(
                                    "New cards will be immediately generated whenever valid titles exist within your recent story"
                                );
                                break;
                            }
                            default: {
                                notify(
                                    "A new card will be generated once every " + AC.config.addCardCooldown + " turns, but only if your story contains available titles"
                                );
                                break;
                            }
                        }
                    }
                    if (parseConfig("newcardsuseabulletedlistformat", false, "bulletedListMode")) {
                        if (cfg) {
                            notify("New card entries will be generated using a bulleted list format");
                        } else {
                            notify("New card entries will be generated using a pure prose format");
                        }
                    }
                    if (parseConfig("maximumentrylengthfornewcards", true, "defaultEntryLimit")) {
                        AC.config.defaultEntryLimit = validateEntryLimit(cfg);
                        notify(
                            "New card entries will be limited to " + AC.config.defaultEntryLimit + " characters of generated text"
                        );
                    }
                    if (parseConfig("newcardsperformmemoryupdates", false, "defaultCardsDoMemoryUpdates")) {
                        if (cfg) {
                            notify("Newly constructed cards will begin with memory updates enabled by default");
                        } else {
                            notify("Newly constructed cards will begin with memory updates disabled by default");
                        }
                    }
                    if (parseConfig("cardmemorybankpreferredlength", true, "defaultMemoryLimit")) {
                        AC.config.defaultMemoryLimit = validateMemoryLimit(cfg);
                        notify(
                            "Newly constructed cards will begin with their memory bank length preference set to " + AC.config.defaultMemoryLimit + " characters of text"
                        );
                    }
                    if (parseConfig("memorysummarycompressionratio", true, "memoryCompressionRatio")) {
                        AC.config.memoryCompressionRatio = validateMemCompRatio(cfg);
                        notify(
                            "Freshly summarized card memory banks will be approximately " + (AC.config.memoryCompressionRatio / 10) + "x shorter than their originals"
                        );
                    }
                    if (parseConfig("excludeallcapsfromtitledetection", false, "ignoreAllCapsTitles")) {
                        if (cfg) {
                            notify("All-caps text will be ignored during title detection to help prevent bad cards");
                        } else {
                            notify("All-caps text may be considered during title detection processes");
                        }
                    }
                    if (parseConfig("alsodetecttitlesfromplayerinputs", false, "readFromInputs")) {
                        if (cfg) {
                            notify("Titles may be detected from player Do/Say/Story action inputs");
                        } else {
                            notify("Title detection will skip player Do/Say/Story action inputs for grammatical leniency");
                        }
                    }
                    if (parseConfig("minimumturnsagefortitledetection", true, "minimumLookBackDistance")) {
                        AC.config.minimumLookBackDistance = validateMLBD(cfg);
                        notify(
                            "Titles and names mentioned in your story may become eligible for future card generation attempts once they are at least " + AC.config.minimumLookBackDistance + " actions old"
                        );
                    }
                    cfg = settings.uselivescriptinterfacev2;
                    if (typeof cfg === "boolean") {
                        if (AC.config.LSIv2 === null) {
                            if (cfg) {
                                AC.config.LSIv2 = true;
                                state.LSIv2 = AC;
                                AutoCards("initialize");
                                notify("Live Script Interface v2 is now embedded within your adventure!");
                            }
                        } else {
                            if (!cfg) {
                                AC.config.LSIv2 = null;
                                notify("Live Script Interface v2 has been removed from your adventure");
                            }
                        }
                    }
                    if (parseConfig("logdebugdatainaseparatecard", false, "showDebugData")) {
                        if (data === null) {
                            if (cfg) {
                                notify("State may now be viewed within the \"Debug Data\" story card");
                            } else {
                                notify("The \"Debug Data\" story card has been removed");
                            }
                        } else if (cfg) {
                            notify("Debug data will be shared with the \"Critical Data\" story card to conserve memory");
                        } else {
                            notify("Debug mode has been disabled");
                        }
                    }
                    if ((settings.disableautocards === true) && (AC.signal.forceToggle !== true)) {
                        disableAutoCards();
                        break;
                    } else {
                        // Apply the new card entry and proceed to implement Auto-Cards onContext
                        configureCard.entry = getConfigureCardEntry();
                    }
                    function parseConfig(settingsKey, isNumber, configKey) {
                        cfg = settings[settingsKey];
                        if (isNumber) {
                            return checkConfig("number");
                        } else if (!checkConfig("boolean")) {
                            return false;
                        }
                        AC.config[configKey] = cfg;
                        function checkConfig(type) {
                            return ((typeof cfg === type) && (
                                (notEmptyObj(oldConfig) && (oldConfig[configKey] !== cfg))
                                || (AC.config[configKey] !== cfg)
                            ));
                        }
                        return true;
                    }
                }
                if (AC.signal.forceToggle === false) {
                    disableAutoCards();
                    break;
                }
                AC.signal.forceToggle = null;
                if (0 < AC.chronometer.postpone) {
                    CODOMAIN.initialize(TEXT);
                    break;
                }
                // Fully implement Auto-Cards onContext
                const forceStep = AC.signal.recheckRetryOrErase;
                const currentTurn = getTurn();
                const nearestUnparsedAction = boundInteger(0, currentTurn - AC.config.minimumLookBackDistance);
                if (AC.signal.recheckRetryOrErase || (nearestUnparsedAction <= AC.database.titles.lastActionParsed)) {
                    // The player erased or retried an unknown number of actions
                    // Purge recent candidates and perform a safety recheck
                    if (nearestUnparsedAction <= AC.database.titles.lastActionParsed) {
                        AC.signal.recheckRetryOrErase = true;
                    } else {
                        AC.signal.recheckRetryOrErase = false;
                    }
                    AC.database.titles.lastActionParsed = boundInteger(-1, nearestUnparsedAction - 8);
                    for (let i = AC.database.titles.candidates.length - 1; 0 <= i; i--) {
                        const candidate = AC.database.titles.candidates[i];
                        for (let j = candidate.length - 1; 0 < j; j--) {
                            if (AC.database.titles.lastActionParsed < candidate[j]) {
                                candidate.splice(j, 1);
                            }
                        }
                        if (candidate.length <= 1) {
                            AC.database.titles.candidates.splice(i, 1);
                        }
                    }
                }
                const pendingCandidates = new Map();
                if ((0 < nearestUnparsedAction) && (AC.database.titles.lastActionParsed < nearestUnparsedAction)) {
                    const actions = [];
                    for (
                        let actionToParse = AC.database.titles.lastActionParsed + 1;
                        actionToParse <= nearestUnparsedAction;
                        actionToParse++
                    ) {
                        // I wrote this whilst sleep-deprived, somehow it works
                        const lookBack = currentTurn - actionToParse - (function () {
                            if (isDoSayStory(readPastAction(0).type)) {
                                // Inputs count as 2 actions instead of 1, conditionally offset lookBack by 1
                                return 0;
                            } else {
                                return 1;
                            }
                        })();
                        if (history.length <= lookBack) {
                            // history cannot be indexed with a negative integer
                            continue;
                        }
                        const action = readPastAction(lookBack);
                        const thisTextHash = new StringsHashed(4096).add(action.text).serialize();
                        if (actionToParse === nearestUnparsedAction) {
                            if (AC.signal.recheckRetryOrErase || (thisTextHash === AC.database.titles.lastTextHash)) {
                                // Additional safety to minimize duplicate candidate additions during retries or erases
                                AC.signal.recheckRetryOrErase = true;
                                break;
                            } else {
                                // Action parsing will proceed
                                AC.database.titles.lastActionParsed = nearestUnparsedAction;
                                AC.database.titles.lastTextHash = thisTextHash;
                            }
                        } else if (
                            // Special case where a consecutive retry>erase>continue cancels out
                            AC.signal.recheckRetryOrErase
                            && (actionToParse === (nearestUnparsedAction - 1))
                            && (thisTextHash === AC.database.titles.lastTextHash)
                        ) {
                            AC.signal.recheckRetryOrErase = false;
                        }
                        actions.push([action, actionToParse]);
                    }
                    if (!AC.signal.recheckRetryOrErase) {
                        for (const [action, turn] of actions) {
                            if (
                                (action.type === "see")
                                || (action.type === "unknown")
                                || (!AC.config.readFromInputs && isDoSayStory(action.type))
                                || /^[^\p{Lu}]*$/u.test(action.text)
                                || action.text.includes("<<<")
                                || /\/\s*A\s*C/i.test(action.text)
                                || /CONFIRM\s*DELETE/i.test(action.text)
                            ) {
                                // Skip see actions
                                // Skip input actions (only if input title detection has been disabled in the config)
                                // Skip strings without capital letters
                                // Skip utility actions
                                continue;
                            }
                            const words = (prettifyEmDashes(action.text)
                                // Inner Self
                                .replace(/\s*[\u200B-\u200D][\s\u200B-\u200D]*/g, " ")
                                // Localized Languages
                                .replace(/\s*[–«»„“”「」—]\s*/g, ": ")
                                .replace(/(?:^|\s+)-/g, ": ").replace(/-(?:\s+|$)/g, ": ")
                                .replace(/[‘’]/g, "'").replaceAll("´", "`")
                                // Standardize end punctuation
                                .replaceAll("。", ".").replaceAll("？", "?").replaceAll("！", "!")
                                // Replace special clause opening punctuation with colon ":" terminators
                                .replace(/(^|\s+)["'`]\s*/g, ": ").replace(/\s*[\(\[{]\s*/g, ": ")
                                // Likewise for end-quotes (curbs a common AI grammar mistake)
                                .replace(/\s*,?\s*["'`](?:\s+|$)/g, ": ")
                                // Replace funky wunky symbols with regular spaces
                                .replace(/[؟،¿¡…§，、\*_~><\)\]}#"`\s]/g, " ")
                                // Replace some mid-sentence punctuation symbols with a placeholder word
                                .replace(/\s*[;,\/\\]\s*/g, " %@% ")
                                // Replace "I", "I'm", "I'd", "I'll", and "I've" with a placeholder word
                                .replace(/(?:^|\s+|-)I(?:'(?:m|d|ll|ve))?(?:\s+|-|$)/gi, " %@% ")
                                // Remove "'s" only if not followed by a letter
                                .replace(/'s(?![a-zA-Z])/g, "")
                                // Replace "s'" with "s" only if preceded but not followed by a letter
                                .replace(/(?<=[a-zA-Z])s'(?![a-zA-Z])/g, "s")
                                // Remove apostrophes not between letters (preserve contractions like "don't")
                                .replace(/(?<![a-zA-Z])'(?![a-zA-Z])/g, "")
                                // Remove a leading bullet
                                .replace(/^\s*-+\s*/, "")
                                // Replace common honorifics with a placeholder word
                                .replace(buildKiller(Words.honorifics), " %@% ")
                                // Remove common abbreviations
                                .replace(buildKiller(Words.abbreviations), " ")
                                // Fix end punctuation
                                .replace(/\s+\.(?![a-zA-Z])/g, ".").replace(/\.\.+/g, ".")
                                .replace(/\s+\?(?![a-zA-Z])/g, "?").replace(/\?\?+/g, "?")
                                .replace(/\s+!(?![a-zA-Z])/g, "!").replace(/!!+/g, "!")
                                .replace(/\s+:(?![a-zA-Z])/g, ":").replace(/::+/g, ":")
                                // Colons are treated as substitute end-punctuation, apply the capitalization rule
                                .replace(/:\s+(\S)/g, (_, next) => ": " + next.toUpperCase())
                                // Condense consecutive whitespace
                                .trim().replace(/\s+/g, " ")
                            ).split(" ");
                            if (!Array.isArray(words) || (words.length < 2)) {
                                continue;
                            }
                            const titles = [];
                            const incompleteTitle = [];
                            let previousWordTerminates = true;
                            for (let i = 0; i < words.length; i++) {
                                let word = words[i];
                                if (startsWithTerminator()) {
                                    // This word begins on a terminator, push the preexisting incomplete title to titles and proceed with the next sentence's beginning
                                    pushTitle();
                                    previousWordTerminates = true;
                                    // Ensure no leading terminators remain
                                    while ((word !== "") && startsWithTerminator()) {
                                        word = word.slice(1);
                                    }
                                }
                                if (word === "") {
                                    continue;
                                } else if (previousWordTerminates) {
                                    // We cannot detect titles from sentence beginnings due to sentence capitalization rules. The previous sentence was recently terminated, implying the current series of capitalized words (plus lowercase minor words) occurs near the beginning of the current sentence
                                    if (endsWithTerminator()) {
                                        continue;
                                    } else if (startsWithUpperCase()) {
                                        if (isMinorWord(word)) {
                                            // Special case where a capitalized minor word precedes a named entity, clear the previous termination status
                                            previousWordTerminates = false;
                                        }
                                        // Otherwise, proceed without clearing
                                    } else if (!isMinorWord(word) && !/^(?:and|&)(?:$|[\.\?!:]$)/.test(word)) {
                                        // Previous sentence termination status is cleared by the first new non-minor lowercase word encountered during forward iteration through the action text's words
                                        previousWordTerminates = false;
                                    }
                                    continue;
                                }
                                // Words near the beginning of this sentence have been skipped, proceed with named entity detection using capitalization rules. An incomplete title will be pushed to titles if A) a non-minor lowercase word is encountered, B) three consecutive minor words occur in a row, C) a terminator symbol is encountered at the end of a word. Otherwise, continue pushing words to the incomplete title
                                if (endsWithTerminator()) {
                                    previousWordTerminates = true;
                                    while ((word !== "") && endsWithTerminator()) {
                                        word = word.slice(0, -1);
                                    }
                                    if (word === "") {
                                        pushTitle();
                                        continue;
                                    }
                                }
                                if (isMinorWord(word)) {
                                    if (0 < incompleteTitle.length) {
                                        // Titles cannot start with a minor word
                                        if (
                                            (2 < incompleteTitle.length) && !(isMinorWord(incompleteTitle[incompleteTitle.length - 1]) && isMinorWord(incompleteTitle[incompleteTitle.length - 2]))
                                        ) {
                                            // Titles cannot have 3 or more consecutive minor words in a row
                                            pushTitle();
                                            continue;
                                        } else {
                                            // Titles may contain minor words in their middles. Ex: "Ace of Spades"
                                            incompleteTitle.push(word.toLowerCase());
                                        }
                                    }
                                } else if (startsWithUpperCase()) {
                                    // Add this proper noun to the incomplete title
                                    incompleteTitle.push(word);
                                } else {
                                    // The full title has a non-minor lowercase word to its immediate right
                                    pushTitle();
                                    continue;
                                }
                                if (previousWordTerminates) {
                                    pushTitle();
                                }
                                function pushTitle() {
                                    while (
                                        (1 < incompleteTitle.length)
                                        && isMinorWord(incompleteTitle[incompleteTitle.length - 1])
                                    ) {
                                        incompleteTitle.pop();
                                    }
                                    if (0 < incompleteTitle.length) {
                                        titles.push(incompleteTitle.join(" "));
                                        // Empty the array
                                        incompleteTitle.length = 0;
                                    }
                                    return;
                                }
                                function isMinorWord(testWord) {
                                    return Words.minor.includes(testWord.toLowerCase());
                                }
                                function startsWithUpperCase() {
                                    return /^\p{Lu}/u.test(word);
                                }
                                function startsWithTerminator() {
                                    return /^[\.\?!:]/.test(word);
                                }
                                function endsWithTerminator() {
                                    return /[\.\?!:]$/.test(word);
                                }
                            }
                            for (let i = titles.length - 1; 0 <= i; i--) {
                                titles[i] = formatTitle(titles[i]).newTitle;
                                if (titles[i] === "" || (
                                    AC.config.ignoreAllCapsTitles
                                    && (2 < titles[i].replace(/[^a-zA-Z]/g, "").length)
                                    && (titles[i] === titles[i].toUpperCase())
                                )) {
                                    titles.splice(i, 1);
                                }
                            }
                            // Remove duplicates
                            const uniqueTitles = [...new Set(titles)];
                            if (uniqueTitles.length === 0) {
                                continue;
                            } else if (
                                // No reason to keep checking long past the max lookback distance
                                (currentTurn < 256)
                                && (action.type === "start")
                                // This is only used here so it doesn't need its own AC.config property or validation
                                && (S.DEFAULT_BAN_TITLES_FROM_OPENING !== false)
                            ) {
                                // Titles in the opening prompt are banned by default, hopefully accounting for the player character's name and other established setting details
                                uniqueTitles.forEach(title => banTitle(title));
                            } else {
                                // Schedule new titles for later insertion within the candidates database
                                for (const title of uniqueTitles) {
                                    const pendingHashKey = title.toLowerCase();
                                    if (pendingCandidates.has(pendingHashKey)) {
                                        // Consolidate pending candidates with matching titles but different turns
                                        pendingCandidates.get(pendingHashKey).turns.push(turn);
                                    } else {
                                        pendingCandidates.set(pendingHashKey, O.s({ title, turns: [turn] }));
                                    }
                                }
                            }
                            function buildKiller(words) {
                                return (new RegExp(("(?:^|\\s+|-)(?:" + (words
                                    .map(word => word.replace(".", "\\."))
                                    .join("|")
                                ) + ")(?:\\s+|-|$)"), "gi"));
                            }
                        }
                    }
                }
                // Measure the minimum and maximum turns of occurance for all title candidates
                let minTurn = currentTurn;
                let maxTurn = 0;
                for (let i = AC.database.titles.candidates.length - 1; 0 <= i; i--) {
                    const candidate = AC.database.titles.candidates[i];
                    const title = candidate[0];
                    if (isUsedOrBanned(title) || isNamed(title)) {
                        // Retroactively ensure AC.database.titles.candidates contains no used / banned titles
                        AC.database.titles.candidates.splice(i, 1);
                    } else {
                        const pendingHashKey = title.toLowerCase();
                        if (pendingCandidates.has(pendingHashKey)) {
                            // This candidate title matches one of the pending candidates, collect the pending turns
                            candidate.push(...pendingCandidates.get(pendingHashKey).turns);
                            // Remove this pending candidate
                            pendingCandidates.delete(pendingHashKey);
                        }
                        if (2 < candidate.length) {
                            // Ensure all recorded turns of occurance are unique for this candidate
                            // Sort the turns from least to greatest
                            const sortedTurns = [...new Set(candidate.slice(1))].sort((a, b) => (a - b));
                            if (625 < sortedTurns.length) {
                                sortedTurns.splice(0, sortedTurns.length - 600);
                            }
                            candidate.length = 1;
                            candidate.push(...sortedTurns);
                        }
                        setCandidateTurnBounds(candidate);
                    }
                }
                for (const pendingCandidate of pendingCandidates.values()) {
                    // Insert any remaining pending candidates (validity has already been ensured)
                    const newCandidate = [pendingCandidate.title, ...pendingCandidate.turns];
                    setCandidateTurnBounds(newCandidate);
                    AC.database.titles.candidates.push(newCandidate);
                }
                const isCandidatesSorted = (function () {
                    if (425 < AC.database.titles.candidates.length) {
                        // Sorting a large title candidates database is computationally expensive
                        sortCandidates();
                        AC.database.titles.candidates.splice(400);
                        // Flag this operation as complete for later consideration
                        return true;
                    } else {
                        return false;
                    }
                })();
                Internal.getUsedTitles();
                for (const titleKey in AC.database.memories.associations) {
                    if (isAuto(titleKey)) {
                        // Reset the lifespan counter
                        AC.database.memories.associations[titleKey][0] = 999;
                    } else if (AC.database.memories.associations[titleKey][0] < 1) {
                        // Forget this set of memory associations
                        delete AC.database.memories.associations[titleKey];
                    } else if (!isAwaitingGeneration()) {
                        // Decrement the lifespan counter
                        AC.database.memories.associations[titleKey][0]--;
                    }
                }
                // This copy of TEXT may be mutated
                let context = TEXT;
                const titleHeaderPatternGlobal = /\s*{\s*titles?\s*:\s*([\s\S]*?)\s*}\s*/gi;
                // Card events govern the parsing of memories from raw context as well as card memory bank injection
                const cardEvents = (function () {
                    // Extract memories from the initial text (not TEXT as called from within the context modifier!)
                    const contextMemories = (function () {
                        const memoriesMatch = text.match(/Memories\s*:\s*([\s\S]*?)\s*(?:Recent\s*Story\s*:|$)/i);
                        if (!memoriesMatch) {
                            return new Set();
                        }
                        const uniqueMemories = new Set(isolateMemories(memoriesMatch[1]));
                        if (uniqueMemories.size === 0) {
                            return uniqueMemories;
                        }
                        const duplicatesHashed = StringsHashed.deserialize(AC.database.memories.duplicates, 65536);
                        const duplicateMemories = new Set();
                        const seenMemories = new Set();
                        for (const memoryA of uniqueMemories) {
                            if (duplicatesHashed.has(memoryA)) {
                                // Remove to ensure the insertion order for this duplicate changes
                                duplicatesHashed.remove(memoryA);
                                duplicateMemories.add(memoryA);
                            } else if ((function () {
                                for (const memoryB of seenMemories) {
                                    if (0.42 < similarityScore(memoryA, memoryB)) {
                                        // This memory is too similar to another memory
                                        duplicateMemories.add(memoryA);
                                        return false;
                                    }
                                }
                                return true;
                            })()) {
                                seenMemories.add(memoryA);
                            }
                        }
                        if (0 < duplicateMemories.size) {
                            // Add each near duplicate's hashcode to AC.database.memories.duplicates
                            // Then remove duplicates from uniqueMemories and the context window
                            for (const duplicate of duplicateMemories) {
                                duplicatesHashed.add(duplicate);
                                uniqueMemories.delete(duplicate);
                                context = context.replaceAll("\n" + duplicate, "");
                            }
                            // Only the 2000 most recent duplicate memory hashcodes are remembered
                            AC.database.memories.duplicates = duplicatesHashed.latest(2000).serialize();
                        }
                        return uniqueMemories;
                    })();
                    const leftBoundary = "^|\\s|\"|'|—|\\(|\\[|{";
                    const rightBoundary = "\\s|\\.|\\?|!|,|;|\"|'|—|\\)|\\]|}|$";
                    // Murder, homicide if you will, nothing to see here
                    const theKiller = new RegExp("(?:" + leftBoundary + ")the[\\s\\S]*$", "i");
                    const peerageKiller = new RegExp((
                        "(?:" + leftBoundary + ")(?:" + Words.peerage.join("|") + ")(?:" + rightBoundary + ")"
                    ), "gi");
                    const events = new Map();
                    for (const contextMemory of contextMemories) {
                        for (const titleKey of auto) {
                            if (!(new RegExp((
                                "(?<=" + leftBoundary + ")" + (titleKey
                                    .replace(theKiller, "")
                                    .replace(peerageKiller, "")
                                    .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                                ) + "(?=" + rightBoundary + ")"
                            ), "i")).test(contextMemory)) {
                                continue;
                            }
                            // AC card titles found in active memories will promote card events
                            if (events.has(titleKey)) {
                                events.get(titleKey).pendingMemories.push(contextMemory);
                                continue;
                            }
                            events.set(titleKey, O.s({
                                pendingMemories: [contextMemory],
                                titleHeader: ""
                            }));
                        }
                    }
                    const titleHeaderMatches = [...context.matchAll(titleHeaderPatternGlobal)];
                    for (const [titleHeader, title] of titleHeaderMatches) {
                        if (!isAuto(title)) {
                            continue;
                        }
                        // Unique title headers found in context will promote card events
                        const titleKey = title.toLowerCase();
                        if (events.has(titleKey)) {
                            events.get(titleKey).titleHeader = titleHeader;
                            continue;
                        }
                        events.set(titleKey, O.s({
                            pendingMemories: [],
                            titleHeader: titleHeader
                        }));
                    }
                    return events;
                })();
                // Remove auto card title headers from active story card entries and contextualize their respective memory banks
                // Also handle the growth and maintenance of card memory banks
                let isRemembering = false;
                for (const card of storyCards) {
                    // Iterate over each card to handle pending card events and forenames/surnames
                    const titleHeaderMatcher = /^{title: \s*([\s\S]*?)\s*}/;
                    let breakForCompression = isPendingCompression();
                    let simplifications = 0;
                    if (breakForCompression) {
                        break;
                    } else if (!card.entry.startsWith("{title: ")) {
                        continue;
                    } else if (exceedsMemoryLimit()) {
                        const titleHeaderMatch = card.entry.match(titleHeaderMatcher);
                        if (titleHeaderMatch && isAuto(titleHeaderMatch[1])) {
                            prepareMemoryCompression(titleHeaderMatch[1].toLowerCase());
                            break;
                        }
                    }
                    // Handle card events
                    const lowerEntry = card.entry.toLowerCase();
                    for (const titleKey of cardEvents.keys()) {
                        if (!lowerEntry.startsWith("{title: " + titleKey + "}")) {
                            continue;
                        }
                        const cardEvent = cardEvents.get(titleKey);
                        if (
                            (0 < cardEvent.pendingMemories.length)
                            && /{\s*updates?\s*:\s*true\s*,\s*limits?\s*:[\s\S]*?}/i.test(card.description)
                        ) {
                            // Add new card memories
                            const associationsHashed = (function () {
                                if (titleKey in AC.database.memories.associations) {
                                    return StringsHashed.deserialize(AC.database.memories.associations[titleKey][1], 65536);
                                } else {
                                    AC.database.memories.associations[titleKey] = [999, ""];
                                    return new StringsHashed(65536);
                                }
                            })();
                            const oldMemories = isolateMemories(extractCardMemories().text);
                            for (let i = 0; i < cardEvent.pendingMemories.length; i++) {
                                if (associationsHashed.has(cardEvent.pendingMemories[i])) {
                                    // Remove first to alter the insertion order
                                    associationsHashed.remove(cardEvent.pendingMemories[i]);
                                } else if (!oldMemories.some(oldMemory => (
                                    (0.8 < similarityScore(oldMemory, cardEvent.pendingMemories[i]))
                                ))) {
                                    // Ensure no near-duplicate memories are appended
                                    card.description += "\n- " + cardEvent.pendingMemories[i];
                                }
                                associationsHashed.add(cardEvent.pendingMemories[i]);
                            }
                            AC.database.memories.associations[titleKey][1] = associationsHashed.latest(3500).serialize();
                            if (associationsHashed.size() === 0) {
                                delete AC.database.memories.associations[titleKey];
                            }
                            if (exceedsMemoryLimit()) {
                                breakForCompression = prepareMemoryCompression(titleKey);
                                break;
                            }
                        }
                        if (cardEvent.titleHeader !== "") {
                            // Replace this card's title header in context
                            const cardMemoriesText = extractCardMemories().text;
                            if (cardMemoriesText === "") {
                                // This card contains no card memories to contextualize
                                context = context.replace(cardEvent.titleHeader, "\n\n");
                            } else {
                                // Insert card memories within context and ensure they occur uniquely
                                const cardMemories = cardMemoriesText.split("\n").map(cardMemory => cardMemory.trim());
                                for (const cardMemory of cardMemories) {
                                    if (25 < cardMemory.length) {
                                        context = (context
                                            .replaceAll(cardMemory, "<#>")
                                            .replaceAll(cardMemory.replace(/^-+\s*/, ""), "<#>")
                                        );
                                    }
                                }
                                context = context.replace(cardEvent.titleHeader, (
                                    "\n\n{%@MEM@%" + cardMemoriesText + "%@MEM@%}\n"
                                ));
                                isRemembering = true;
                            }
                        }
                        cardEvents.delete(titleKey);
                        break;
                    }
                    if (breakForCompression) {
                        break;
                    } else if ((2 < simplifications) || (card.entry.includes("<") && card.entry.includes(">"))) {
                        continue;
                    }
                    // Simplify auto-card titles which contain an obvious surname
                    const titleHeaderMatch = card.entry.match(titleHeaderMatcher);
                    if (!titleHeaderMatch) {
                        continue;
                    }
                    const [oldTitleHeader, oldTitle] = titleHeaderMatch;
                    if (!isAuto(oldTitle)) {
                        continue;
                    }
                    const surname = isNamed(oldTitle, true);
                    if (typeof surname !== "string") {
                        continue;
                    }
                    const newTitle = oldTitle.replace(" " + surname, "");
                    const [oldTitleKey, newTitleKey] = [oldTitle, newTitle].map(title => title.toLowerCase());
                    if (oldTitleKey === newTitleKey) {
                        continue;
                    }
                    // Preemptively mitigate some global state considered within the formatTitle scope
                    clearTransientTitles();
                    AC.database.titles.used = ["%@%"];
                    [used, forenames, surnames].forEach(nameset => nameset.add("%@%"));
                    // Premature optimization is the root of all evil
                    const newKey = formatTitle(newTitle).newKey;
                    clearTransientTitles();
                    simplifications++;
                    if (newKey === "") {
                        Internal.getUsedTitles();
                        continue;
                    }
                    if (oldTitleKey in AC.database.memories.associations) {
                        AC.database.memories.associations[newTitleKey] = AC.database.memories.associations[oldTitleKey];
                        delete AC.database.memories.associations[oldTitleKey];
                    }
                    if (AC.compression.titleKey === oldTitleKey) {
                        AC.compression.titleKey = newTitleKey;
                    }
                    card.entry = card.entry.replace(oldTitleHeader, oldTitleHeader.replace(oldTitle, newTitle));
                    card.keys = buildKeys(card.keys.replaceAll(" " + surname, ""), newKey);
                    Internal.getUsedTitles();
                    function exceedsMemoryLimit() {
                        return ((function () {
                            const memoryLimitMatch = card.description.match(/limits?\s*:\s*(\d+)\s*}/i);
                            if (memoryLimitMatch) {
                                return validateMemoryLimit(parseInt(memoryLimitMatch[1], 10));
                            } else {
                                return AC.config.defaultMemoryLimit;
                            }
                        })() < (function () {
                            const cardMemories = extractCardMemories();
                            if (cardMemories.missing) {
                                return card.description;
                            } else {
                                return cardMemories.text;
                            }
                        })().length);
                    }
                    function prepareMemoryCompression(titleKey) {
                        AC.compression.oldMemoryBank = isolateMemories(extractCardMemories().text);
                        if (AC.compression.oldMemoryBank.length === 0) {
                            return false;
                        }
                        AC.compression.completed = 0;
                        AC.compression.titleKey = titleKey;
                        AC.compression.vanityTitle = cleanSpaces(card.title.trim());
                        AC.compression.responseEstimate = (function () {
                            const responseEstimate = estimateResponseLength();
                            if (responseEstimate === -1) {
                                return 1400
                            } else {
                                return responseEstimate;
                            }
                        })();
                        AC.compression.lastConstructIndex = -1;
                        AC.compression.newMemoryBank = [];
                        return true;
                    }
                    function extractCardMemories() {
                        const memoryHeaderMatch = card.description.match(
                            /(?<={\s*updates?\s*:[\s\S]*?,\s*limits?\s*:[\s\S]*?})[\s\S]*$/i
                        );
                        if (memoryHeaderMatch) {
                            return O.f({ missing: false, text: cleanSpaces(memoryHeaderMatch[0].trim()) });
                        } else {
                            return O.f({ missing: true, text: "" });
                        }
                    }
                }
                // Remove repeated memories plus any remaining title headers
                context = (context
                    .replace(/(\s*<#>\s*)+/g, "\n")
                    .replace(titleHeaderPatternGlobal, "\n\n")
                    .replace(/World\s*Lore\s*:\s*/i, "World Lore:\n")
                    .replace(/Memories\s*:\s*(?=Recent\s*Story\s*:|$)/i, "")
                );
                // Prompt the AI to generate a new card entry, compress an existing card's memories, or continue the story
                let isGenerating = false;
                let isCompressing = false;
                if (isPendingGeneration()) {
                    promptGeneration();
                } else if (isAwaitingGeneration()) {
                    AC.generation.workpiece = AC.generation.pending.shift();
                    promptGeneration();
                } else if (isPendingCompression()) {
                    promptCompression();
                } else if (AC.signal.recheckRetryOrErase) {
                    // Do nothing 😜
                } else if ((AC.generation.cooldown <= 0) && (0 < AC.database.titles.candidates.length)) {
                    // Prepare to automatically construct a new plot-relevant story card by selecting a title
                    let selectedTitle = (function () {
                        if (AC.database.titles.candidates.length === 1) {
                            return AC.database.titles.candidates[0][0];
                        } else if (!isCandidatesSorted) {
                            sortCandidates();
                        }
                        const mostRelevantTitle = AC.database.titles.candidates[0][0];
                        if ((AC.database.titles.candidates.length < 16) || (Math.random() < 0.6667)) {
                            // Usually, 2/3 of the time, the most relevant title is selected
                            return mostRelevantTitle;
                        }
                        // Occasionally (1/3 of the time once the candidates databases has at least 16 titles) make a completely random selection between the top 4 most recently occuring title candidates which are NOT the top 2 most relevant titles. Note that relevance !== recency
                        // This gives non-character titles slightly better odds of being selected for card generation due to the relevance sorter's inherent bias towards characters; they tend to appear far more often in prose
                        return (AC.database.titles.candidates
                            // Create a shallow copy to avoid modifying AC.database.titles.candidates itself
                            // Add index to preserve original positions whenever ties occur during sorting
                            .map((candidate, index) => ({ candidate, index }))
                            // Sort by each candidate's most recent turn
                            .sort((a, b) => {
                                const turnDiff = b.candidate[b.candidate.length - 1] - a.candidate[a.candidate.length - 1];
                                if (turnDiff === 0) {
                                    // Don't change indices in the case of a tie
                                    return (a.index - b.index);
                                } else {
                                    // No tie here, sort by recency
                                    return turnDiff;
                                }
                            })
                            // Get the top 6 most recent titles (4 + 2 because the top 2 relevant titles may be present)
                            .slice(0, 6)
                            // Extract only the title names
                            .map(element => element.candidate[0])
                            // Exclude the top 2 most relevant titles
                            .filter(title => ((title !== mostRelevantTitle) && (title !== AC.database.titles.candidates[1][0])))
                            // Ensure only 4 titles remain
                            .slice(0, 4)
                        )[Math.floor(Math.random() * 4)];
                    })();
                    while (!Internal.generateCard(O.f({ title: selectedTitle }))) {
                        // This is an emergency precaution, I don't expect the interior of this while loop to EVER execute
                        // That said, it's crucial for the while condition be checked at least once, because Internal.generateCard appends an element to AC.generation.pending as a side effect
                        const lowerSelectedTitle = formatTitle(selectedTitle).newTitle.toLowerCase();
                        const index = AC.database.titles.candidates.findIndex(candidate => {
                            return (formatTitle(candidate[0]).newTitle.toLowerCase() === lowerSelectedTitle);
                        });
                        if (index === -1) {
                            // Should be impossible
                            break;
                        }
                        AC.database.titles.candidates.splice(index, 1);
                        if (AC.database.titles.candidates.length === 0) {
                            break;
                        }
                        selectedTitle = AC.database.titles.candidates[0][0];
                    }
                    if (isAwaitingGeneration()) {
                        // Assign the workpiece so card generation may fully commence!
                        AC.generation.workpiece = AC.generation.pending.shift();
                        promptGeneration();
                    } else if (isPendingCompression()) {
                        promptCompression();
                    }
                } else if (
                    (AC.chronometer.step || forceStep)
                    && (0 < AC.generation.cooldown)
                    && (AC.config.addCardCooldown !== 9999)
                ) {
                    AC.generation.cooldown--;
                }
                if (shouldTrimContext()) {
                    // Truncate context based on AC.signal.maxChars, begin by individually removing the oldest sentences from the recent story portion of the context window
                    const recentStoryPattern = /Recent\s*Story\s*:\s*([\s\S]*?)(%@GEN@%|%@COM@%|\s\[\s*Author's\s*note\s*:|$)/i;
                    const recentStoryMatch = context.match(recentStoryPattern);
                    if (recentStoryMatch) {
                        const recentStory = recentStoryMatch[1];
                        let sentencesJoined = recentStory;
                        // Split by the whitespace chars following each sentence (without consuming)
                        const sentences = splitBySentences(recentStory);
                        // [minimum num of story sentences] = ([max chars for context] / 6) / [average chars per sentence]
                        const sentencesMinimum = Math.ceil(
                            (AC.signal.maxChars / 6) / (
                                boundInteger(1, context.length) / boundInteger(1, sentences.length)
                            )
                        ) + 1;
                        do {
                            if (sentences.length < sentencesMinimum) {
                                // A minimum of n many recent story sentences must remain
                                // Where n represents a sentence count equal to roughly 16.7% of the full context chars
                                break;
                            }
                            // Remove the first (oldest) recent story sentence
                            sentences.shift();
                            // Check if the total length exceeds the AC.signal.maxChars limit
                            sentencesJoined = sentences.join("");
                        } while (AC.signal.maxChars < (context.length - recentStory.length + sentencesJoined.length + 3));
                        // Rebuild the context with the truncated recentStory
                        context = context.replace(recentStoryPattern, "Recent Story:\n" + sentencesJoined + recentStoryMatch[2]);
                    }
                    if (isRemembering && shouldTrimContext()) {
                        // Next remove loaded card memories (if any) with top-down priority, one card at a time
                        do {
                            // This matcher relies on its case-sensitivity
                            const cardMemoriesMatch = context.match(/{%@MEM@%([\s\S]+?)%@MEM@%}/);
                            if (!cardMemoriesMatch) {
                                break;
                            }
                            context = context.replace(cardMemoriesMatch[0], (cardMemoriesMatch[0]
                                .replace(cardMemoriesMatch[1], "")
                                // Set the MEM tags to lowercase to avoid repeated future matches
                                .toLowerCase()
                            ));
                        } while (AC.signal.maxChars < (context.length + 3));
                    }
                    if (shouldTrimContext()) {
                        // If the context is still too long, just trim from the beginning I guess 🤷‍♀️
                        context = context.slice(context.length - AC.signal.maxChars + 1);
                    }
                }
                if (isRemembering) {
                    // Card memory flags serve no further purpose
                    context = (context
                        // Case-insensitivity is crucial here
                        .replace(/(?<={%@MEM@%)\s*/gi, "")
                        .replace(/\s*(?=%@MEM@%})/gi, "")
                        .replace(/{%@MEM@%%@MEM@%}\s?/gi, "")
                        .replaceAll("{%@MEM@%", "{ Memories:\n")
                        .replaceAll("%@MEM@%}", " }")
                    );
                }
                if (isGenerating || isCompressing) {
                    state.InnerSelf ??= {};
                    state.InnerSelf.AC ??= {};
                    state.InnerSelf.AC.event = true;
                    if (isGenerating) {
                        // Likewise for the card entry generation delimiter
                        context = context.replaceAll("%@GEN@%", "");
                    } else {
                        // Or the (mutually exclusive) card memory compression delimiter
                        context = context.replaceAll("%@COM@%", "");
                    }
                }
                CODOMAIN.initialize(context);
                function isolateMemories(memoriesText) {
                    return (memoriesText
                        .split("\n")
                        .map(memory => cleanSpaces(memory.trim().replace(/^-+\s*/, "")))
                        .filter(memory => (memory !== ""))
                    );
                }
                function isAuto(title) {
                    return auto.has(title.toLowerCase());
                }
                function promptCompression() {
                    isGenerating = false;
                    const cardEntryText = (function () {
                        const card = getAutoCard(AC.compression.titleKey);
                        if (card === null) {
                            return null;
                        }
                        const entryLines = formatEntry(card.entry).trimEnd().split("\n");
                        if (Object.is(entryLines[0].trim(), "")) {
                            return "";
                        }
                        for (let i = 0; i < entryLines.length; i++) {
                            entryLines[i] = entryLines[i].trim();
                            if (/[a-zA-Z]$/.test(entryLines[i])) {
                                entryLines[i] += ".";
                            }
                            entryLines[i] += " ";
                        }
                        return entryLines.join("");
                    })();
                    if (cardEntryText === null) {
                        // Safety measure
                        resetCompressionProperties();
                        return;
                    }
                    repositionAN();
                    // The "%COM%" substring serves as a temporary delimiter for later context length trucation
                    context = context.trimEnd() + "\n\n" + cardEntryText + (
                        [...AC.compression.newMemoryBank, ...AC.compression.oldMemoryBank].join(" ")
                    ) + "%@COM@%\n\n" + (function () {
                        const memoryConstruct = (function () {
                            if (AC.compression.lastConstructIndex === -1) {
                                for (let i = 0; i < AC.compression.oldMemoryBank.length; i++) {
                                    AC.compression.lastConstructIndex = i;
                                    const memoryConstruct = buildMemoryConstruct();
                                    if ((
                                        (AC.config.memoryCompressionRatio / 10) * AC.compression.responseEstimate
                                    ) < memoryConstruct.length) {
                                        return memoryConstruct;
                                    }
                                }
                            } else {
                                // The previous card memory compression attempt produced a bad output
                                AC.compression.lastConstructIndex = boundInteger(
                                    0, AC.compression.lastConstructIndex + 1, AC.compression.oldMemoryBank.length - 1
                                );
                            }
                            return buildMemoryConstruct();
                        })();
                        // Fill all %{title} placeholders
                        const precursorPrompt = insertTitle(AC.config.compressionPrompt, AC.compression.vanityTitle).trim();
                        const memoryPlaceholderPattern = /(?:[%\$]+\s*|[%\$]*){+\s*memor(y|ies)\s*}+/gi;
                        if (memoryPlaceholderPattern.test(precursorPrompt)) {
                            // Fill all %{memory} placeholders with a selection of pending old memories
                            return precursorPrompt.replace(memoryPlaceholderPattern, memoryConstruct);
                        } else {
                            // Append the partial entry to the end of context
                            return precursorPrompt + "\n\n" + memoryConstruct;
                        }
                    })() + "\n\n";
                    isCompressing = true;
                    return;
                }
                function promptGeneration() {
                    repositionAN();
                    // All %{title} placeholders were already filled during this workpiece's initialization
                    // The "%GEN%" substring serves as a temporary delimiter for later context length trucation
                    context = context.trimEnd() + "%@GEN@%\n\n" + (function () {
                        // For context only, remove the title header from this workpiece's partially completed entry
                        const partialEntry = formatEntry(AC.generation.workpiece.entry);
                        const entryPlaceholderPattern = /(?:[%\$]+\s*|[%\$]*){+\s*entry\s*}+/gi;
                        if (entryPlaceholderPattern.test(AC.generation.workpiece.prompt)) {
                            // Fill all %{entry} placeholders with the partial entry
                            return AC.generation.workpiece.prompt.replace(entryPlaceholderPattern, partialEntry);
                        } else {
                            // Append the partial entry to the end of context
                            return AC.generation.workpiece.prompt.trimEnd() + "\n\n" + partialEntry;
                        }
                    })();
                    isGenerating = true;
                    return;
                }
                function repositionAN() {
                    // Move the Author's Note further back in context during card generation (should still be considered)
                    const authorsNotePattern = /\s*(\[\s*Author's\s*note\s*:[\s\S]*\])\s*/i;
                    const authorsNoteMatch = context.match(authorsNotePattern);
                    if (!authorsNoteMatch) {
                        return;
                    }
                    const leadingSpaces = context.match(/^\s*/)[0];
                    context = context.replace(authorsNotePattern, " ").trimStart();
                    const recentStoryPattern = /\s*Recent\s*Story\s*:\s*/i;
                    if (recentStoryPattern.test(context)) {
                        // Remove author's note from its original position and insert above "Recent Story:\n"
                        context = (context
                            .replace(recentStoryPattern, "\n\n" + authorsNoteMatch[1] + "\n\nRecent Story:\n")
                            .trimStart()
                        );
                    } else {
                        context = authorsNoteMatch[1] + "\n\n" + context;
                    }
                    context = leadingSpaces + context;
                    return;
                }
                function sortCandidates() {
                    if (AC.database.titles.candidates.length < 2) {
                        return;
                    }
                    const turnRange = boundInteger(1, maxTurn - minTurn);
                    const recencyExponent = Math.log10(turnRange) + 1.85;
                    // Sort the database of available title candidates by relevance
                    AC.database.titles.candidates.sort((a, b) => {
                        return relevanceScore(b) - relevanceScore(a);
                    });
                    function relevanceScore(candidate) {
                        // weight = (((turn - minTurn) / (maxTurn - minTurn)) + 1)^(log10(maxTurn - minTurn) + 1.85)
                        return candidate.slice(1).reduce((sum, turn) => {
                            // Apply exponential scaling to give far more weight to recent turns
                            return sum + Math.pow((
                                // The recency weight's exponent scales by log10(turnRange) + 1.85
                                // Shhh don't question it 😜
                                ((turn - minTurn) / turnRange) + 1
                            ), recencyExponent);
                        }, 0);
                    }
                    return;
                }
                function shouldTrimContext() {
                    return (AC.signal.maxChars <= context.length);
                }
                function setCandidateTurnBounds(candidate) {
                    // candidate: ["Example Title", 0, 1, 2, 3]
                    minTurn = boundInteger(0, minTurn, candidate[1]);
                    maxTurn = boundInteger(candidate[candidate.length - 1], maxTurn);
                    return;
                }
                function disableAutoCards() {
                    AC.signal.forceToggle = null;
                    // Auto-Cards has been disabled
                    AC.config.doAC = false;
                    // Deconstruct the "Configure Auto-Cards" story card
                    unbanTitle(configureCardTemplate.title);
                    eraseCard(configureCard);
                    // Signal the construction of "Edit to enable Auto-Cards" during the next onOutput hook
                    AC.signal.swapControlCards = true;
                    // Post a success message
                    notify("Disabled! Use the \"Edit to enable Auto-Cards\" story card to undo");
                    CODOMAIN.initialize(TEXT);
                    return;
                }
                break;
            }
            case "output": {
                // AutoCards was called within the output modifier
                const output = prettifyEmDashes(TEXT);
                if (0 < AC.chronometer.postpone) {
                    // Do not capture or replace any outputs during this turn
                    promoteAmnesia();
                    if (permitOutput()) {
                        CODOMAIN.initialize(output);
                    }
                } else if (AC.signal.swapControlCards) {
                    if (permitOutput()) {
                        CODOMAIN.initialize(output);
                    }
                } else if (isPendingGeneration()) {
                    const textClone = prettifyEmDashes(text);
                    AC.chronometer.amnesia = 0;
                    AC.generation.completed++;
                    const generationsRemaining = (function () {
                        if (
                            textClone.includes("\"")
                            || /(?<=^|\s|—|\(|\[|{)sa(ys?|id)(?=\s|\.|\?|!|,|;|—|\)|\]|}|$)/i.test(textClone)
                        ) {
                            // Discard full outputs containing "say" or quotations
                            // To build coherent entries, the AI must not attempt to continue the story
                            return skip(estimateRemainingGens());
                        }
                        const oldSentences = (splitBySentences(formatEntry(AC.generation.workpiece.entry))
                            .map(sentence => sentence.trim())
                            .filter(sentence => (2 < sentence.length))
                        );
                        const seenSentences = new Set();
                        const entryAddition = splitBySentences(textClone
                            .replace(/[\*_~]/g, "")
                            .replace(/:+/g, "#")
                            .replace(/\s+/g, " ")
                        ).map(sentence => (sentence
                            .trim()
                            .replace(/^-+\s*/, "")
                        )).filter(sentence => (
                            // Remove empty strings
                            (sentence !== "")
                            // Remove colon ":" headers or other stinky symbols because me no like 😠
                            && !/[#><@]/.test(sentence)
                            // Remove previously repeated sentences
                            && !oldSentences.some(oldSentence => (0.75 < similarityScore(oldSentence, sentence)))
                            // Remove repeated sentences from within entryAddition itself
                            && ![...seenSentences].some(seenSentence => (0.75 < similarityScore(seenSentence, sentence)))
                            // Simply ensure this sentence is henceforth unique
                            && seenSentences.add(sentence)
                        )).join(" ").trim() + " ";
                        if (entryAddition === " ") {
                            return skip(estimateRemainingGens());
                        } else if (
                            /^{title:[\s\S]*?}$/.test(AC.generation.workpiece.entry.trim())
                            && (AC.generation.workpiece.entry.length < 111)
                        ) {
                            AC.generation.workpiece.entry += "\n" + entryAddition;
                        } else {
                            AC.generation.workpiece.entry += entryAddition;
                        }
                        if (AC.generation.workpiece.limit < AC.generation.workpiece.entry.length) {
                            let exit = false;
                            let truncatedEntry = AC.generation.workpiece.entry.trimEnd();
                            const sentences = splitBySentences(truncatedEntry);
                            for (let i = sentences.length - 1; 0 <= i; i--) {
                                if (!sentences[i].includes("\n")) {
                                    sentences.splice(i, 1);
                                    truncatedEntry = sentences.join("").trimEnd();
                                    if (truncatedEntry.length <= AC.generation.workpiece.limit) {
                                        break;
                                    }
                                    continue;
                                }
                                // Lines only matter for initial entries provided via AutoCards().API.generateCard
                                const lines = sentences[i].split("\n");
                                for (let j = lines.length - 1; 0 <= j; j--) {
                                    lines.splice(j, 1);
                                    sentences[i] = lines.join("\n");
                                    truncatedEntry = sentences.join("").trimEnd();
                                    if (truncatedEntry.length <= AC.generation.workpiece.limit) {
                                        // Exit from both loops
                                        exit = true;
                                        break;
                                    }
                                }
                                if (exit) {
                                    break;
                                }
                            }
                            if (truncatedEntry.length < 150) {
                                // Disregard the previous sentence/line-based truncation attempt
                                AC.generation.workpiece.entry = limitString(
                                    AC.generation.workpiece.entry, AC.generation.workpiece.limit
                                );
                                // Attempt to remove the last word/fragment
                                truncatedEntry = AC.generation.workpiece.entry.replace(/\s*\S+$/, "");
                                if (150 <= truncatedEntry) {
                                    AC.generation.workpiece.entry = truncatedEntry;
                                }
                            } else {
                                AC.generation.workpiece.entry = truncatedEntry;
                            }
                            return 0;
                        } else if ((AC.generation.workpiece.limit - 50) <= AC.generation.workpiece.entry.length) {
                            AC.generation.workpiece.entry = AC.generation.workpiece.entry.trimEnd();
                            return 0;
                        }
                        function skip(remaining) {
                            if (AC.generation.permitted <= AC.generation.completed) {
                                AC.generation.workpiece.entry = AC.generation.workpiece.entry.trimEnd();
                                return 0;
                            }
                            return remaining;
                        }
                        function estimateRemainingGens() {
                            const responseEstimate = estimateResponseLength();
                            if (responseEstimate === -1) {
                                return 1;
                            }
                            const remaining = boundInteger(1, Math.round(
                                (150 + AC.generation.workpiece.limit - AC.generation.workpiece.entry.length) / responseEstimate
                            ));
                            if (AC.generation.permitted === 34) {
                                AC.generation.permitted = boundInteger(6, Math.floor(3.5 * remaining), 32);
                            }
                            return remaining;
                        }
                        return skip(estimateRemainingGens());
                    })();
                    postOutputMessage(AC.generation.completed / Math.min(
                        AC.generation.permitted,
                        AC.generation.completed + generationsRemaining
                    ));
                    if (generationsRemaining <= 0) {
                        notify("\"" + AC.generation.workpiece.title + "\" was successfully added to your story cards!");
                        constructCard(O.f({
                            type: AC.generation.workpiece.type,
                            title: AC.generation.workpiece.title,
                            keys: AC.generation.workpiece.keys,
                            entry: (function () {
                                if (!AC.config.bulletedListMode) {
                                    return AC.generation.workpiece.entry;
                                }
                                const sentences = splitBySentences(
                                    formatEntry(
                                        AC.generation.workpiece.entry.replace(/\s+/g, " ")
                                    ).replace(/:+/g, "#")
                                ).map(sentence => {
                                    sentence = (sentence
                                        .replaceAll("#", ":")
                                        .trim()
                                        .replace(/^-+\s*/, "")
                                    );
                                    if (sentence.length < 12) {
                                        return sentence;
                                    } else {
                                        return "\n- " + sentence.replace(/\s*[\.\?!]+$/, "");
                                    }
                                });
                                const titleHeader = "{title: " + AC.generation.workpiece.title + "}";
                                if (sentences.every(sentence => (sentence.length < 12))) {
                                    const sentencesJoined = sentences.join(" ").trim();
                                    if (sentencesJoined === "") {
                                        return titleHeader;
                                    } else {
                                        return limitString(titleHeader + "\n" + sentencesJoined, 2000);
                                    }
                                }
                                for (let i = sentences.length - 1; 0 <= i; i--) {
                                    const bulletedEntry = cleanSpaces(titleHeader + sentences.join(" ")).trimEnd();
                                    if (bulletedEntry.length <= 2000) {
                                        return bulletedEntry;
                                    }
                                    if (sentences.length === 1) {
                                        break;
                                    }
                                    sentences.splice(i, 1);
                                }
                                return limitString(AC.generation.workpiece.entry, 2000);
                            })(),
                            description: AC.generation.workpiece.description,
                        }), newCardIndex());
                        AC.generation.cooldown = AC.config.addCardCooldown;
                        AC.generation.completed = 0;
                        AC.generation.permitted = 34;
                        AC.generation.workpiece = O.f({});
                        clearTransientTitles();
                    }
                } else if (isPendingCompression()) {
                    const textClone = prettifyEmDashes(text);
                    AC.chronometer.amnesia = 0;
                    AC.compression.completed++;
                    const compressionsRemaining = (function () {
                        const newMemory = (textClone
                            // Remove some dumb stuff
                            .replace(/^[\s\S]*:/g, "")
                            .replace(/[\*_~#><@\[\]{}`\\]/g, " ")
                            // Remove bullets
                            .trim().replace(/^-+\s*/, "").replace(/\s*-+$/, "").replace(/\s*-\s+/g, " ")
                            // Condense consecutive whitespace
                            .replace(/\s+/g, " ")
                        );
                        if ((AC.compression.oldMemoryBank.length - 1) <= AC.compression.lastConstructIndex) {
                            // Terminate this compression cycle; the memory construct cannot grow any further
                            AC.compression.newMemoryBank.push(newMemory);
                            return 0;
                        } else if ((newMemory.trim() !== "") && (newMemory.length < buildMemoryConstruct().length)) {
                            // Good output, preserve and then proceed onwards
                            AC.compression.oldMemoryBank.splice(0, AC.compression.lastConstructIndex + 1);
                            AC.compression.lastConstructIndex = -1;
                            AC.compression.newMemoryBank.push(newMemory);
                        } else {
                            // Bad output, discard and then try again
                            AC.compression.responseEstimate += 200;
                        }
                        return boundInteger(1, joinMemoryBank(AC.compression.oldMemoryBank).length) / AC.compression.responseEstimate;
                    })();
                    postOutputMessage(AC.compression.completed / (AC.compression.completed + compressionsRemaining));
                    if (compressionsRemaining <= 0) {
                        const card = getAutoCard(AC.compression.titleKey);
                        if (card === null) {
                            notify(
                                "Failed to apply summarized memories for \"" + AC.compression.vanityTitle + "\" due to a missing or invalid AC card title header!"
                            );
                        } else {
                            const memoryHeaderMatch = card.description.match(
                                /(?<={\s*updates?\s*:[\s\S]*?,\s*limits?\s*:[\s\S]*?})[\s\S]*$/i
                            );
                            if (memoryHeaderMatch) {
                                // Update the card memory bank
                                notify("Memories for \"" + AC.compression.vanityTitle + "\" were successfully summarized!");
                                card.description = card.description.replace(memoryHeaderMatch[0], (
                                    "\n" + joinMemoryBank(AC.compression.newMemoryBank)
                                ));
                            } else {
                                notify(
                                    "Failed to apply summarizes memories for \"" + AC.compression.vanityTitle + "\" due to a missing or invalid AC card memory header!"
                                );
                            }
                        }
                        resetCompressionProperties();
                    } else if (AC.compression.completed === 1) {
                        notify("Summarizing excess memories for \"" + AC.compression.vanityTitle + "\"");
                    }
                    function joinMemoryBank(memoryBank) {
                        return cleanSpaces("- " + memoryBank.join("\n- "));
                    }
                } else if (permitOutput()) {
                    CODOMAIN.initialize(output);
                }
                concludeOutputBlock((function () {
                    if (AC.signal.swapControlCards) {
                        return getConfigureCardTemplate();
                    } else {
                        return null;
                    }
                })())
                function postOutputMessage(ratio) {
                    if (permitOutput()) {
                        CODOMAIN.initialize(
                            getPrecedingNewlines() + ">>> please select \"continue\" (" + Math.round(ratio * 100) + "%) <<<\n\n"
                        );
                    }
                    return;
                }
                break;
            }
            default: {
                CODOMAIN.initialize(TEXT);
                break;
            }
        }
        // Get an individual story card reference via titleKey
        function getAutoCard(titleKey) {
            return Internal.getCard(card => card.entry.toLowerCase().startsWith("{title: " + titleKey + "}"));
        }
        function buildMemoryConstruct() {
            return (AC.compression.oldMemoryBank
                .slice(0, AC.compression.lastConstructIndex + 1)
                .join(" ")
            );
        }
        // Estimate the average AI response char count based on recent continue outputs
        function estimateResponseLength() {
            if (!Array.isArray(history) || (history.length === 0)) {
                return -1;
            }
            const charCounts = [];
            for (let i = 0; i < history.length; i++) {
                const action = readPastAction(i);
                if ((action.type === "continue") && !action.text.includes("<<<")) {
                    charCounts.push(action.text.length);
                }
            }
            if (charCounts.length < 7) {
                if (charCounts.length === 0) {
                    return -1;
                } else if (charCounts.length < 4) {
                    return boundInteger(350, charCounts[0]);
                }
                charCounts.splice(3);
            }
            return boundInteger(175, Math.floor(
                charCounts.reduce((sum, charCount) => {
                    return sum + charCount;
                }, 0) / charCounts.length
            ));
        }
        // Evalute how similar two strings are on the range [0, 1]
        function similarityScore(strA, strB) {
            if (strA === strB) {
                return 1;
            }
            // Normalize both strings for further comparison purposes
            const [cleanA, cleanB] = [strA, strB].map(str => limitString((str
                .replace(/[0-9\s]/g, " ")
                .trim()
                .replace(/  +/g, " ")
                .toLowerCase()
            ), 1400));
            if (cleanA === cleanB) {
                return 1;
            }
            // Compute the Levenshtein distance
            const [lengthA, lengthB] = [cleanA, cleanB].map(str => str.length);
            // I love DP ❤️ (dynamic programming)
            const dp = Array(lengthA + 1).fill(null).map(() => Array(lengthB + 1).fill(0));
            for (let i = 0; i <= lengthA; i++) {
                dp[i][0] = i;
            }
            for (let j = 0; j <= lengthB; j++) {
                dp[0][j] = j;
            }
            for (let i = 1; i <= lengthA; i++) {
                for (let j = 1; j <= lengthB; j++) {
                    if (cleanA[i - 1] === cleanB[j - 1]) {
                        // No cost if chars match, swipe right 😎
                        dp[i][j] = dp[i - 1][j - 1];
                    } else {
                        dp[i][j] = Math.min(
                            // Deletion
                            dp[i - 1][j] + 1,
                            // Insertion
                            dp[i][j - 1] + 1,
                            // Substitution
                            dp[i - 1][j - 1] + 1
                        );
                    }
                }
            }
            // Convert distance to similarity score (1 - (distance / maxLength))
            return 1 - (dp[lengthA][lengthB] / Math.max(lengthA, lengthB));
        }
        function splitBySentences(prose) {
            // Don't split sentences on honorifics or abbreviations such as "Mr.", "Mrs.", "etc."
            return (prose
                .replace(new RegExp("(?<=\\s|\"|\\(|—|\\[|'|{|^)(?:" + ([...Words.honorifics, ...Words.abbreviations]
                    .map(word => word.replace(".", ""))
                    .join("|")
                ) + ")\\.", "gi"), "$1%@%")
                .split(/(?<=[\.\?!:]["\)'\]}]?\s+)(?=[^\p{Ll}\s])/u)
                .map(sentence => sentence.replaceAll("%@%", "."))
            );
        }
        function formatEntry(partialEntry) {
            const cleanedEntry = cleanSpaces(partialEntry
                .replace(/^{title:[\s\S]*?}/, "")
                .replace(/[#><@*_~]/g, "")
                .trim()
            ).replace(/(?<=^|\n)-+\s*/g, "");
            if (cleanedEntry === "") {
                return "";
            } else {
                return cleanedEntry + " ";
            }
        }
        // Resolve malformed em dashes (common AI cliche)
        function prettifyEmDashes(str) {
            return str.replace(/(?<!^\s*)(?: - | ?– ?)(?!\s*$)/g, "—");
        }
        function getConfigureCardTemplate() {
            const names = getControlVariants().configure;
            return O.f({
                type: AC.config.defaultCardType,
                title: names.title,
                keys: names.keys,
                entry: getConfigureCardEntry(),
                description: getConfigureCardDescription()
            });
        }
        function getConfigureCardEntry() {
            return prose(
                "> Auto-Cards automatically creates and updates plot-relevant story cards while you play. You may configure the following settings by replacing \"false\" with \"true\" (and vice versa) or by adjusting numbers for the appropriate settings.",
                "> Disable Auto-Cards: false",
                "> Show detailed guide: false",
                "> Delete all automatic story cards: false",
                "> Reset all config settings and prompts: false",
                "> Pin this config card near the top: " + AC.config.pinConfigureCard,
                "> Minimum turns cooldown for new cards: " + AC.config.addCardCooldown,
                "> New cards use a bulleted list format: " + AC.config.bulletedListMode,
                "> Maximum entry length for new cards: " + AC.config.defaultEntryLimit,
                "> New cards perform memory updates: " + AC.config.defaultCardsDoMemoryUpdates,
                "> Card memory bank preferred length: " + AC.config.defaultMemoryLimit,
                "> Memory summary compression ratio: " + AC.config.memoryCompressionRatio,
                "> Exclude all-caps from title detection: " + AC.config.ignoreAllCapsTitles,
                "> Also detect titles from player inputs: " + AC.config.readFromInputs,
                "> Minimum turns age for title detection: " + AC.config.minimumLookBackDistance,
                "> Use Live Script Interface v2: " + (AC.config.LSIv2 !== null),
                "> Log debug data in a separate card: " + AC.config.showDebugData
            );
        }
        function getConfigureCardDescription() {
            return limitString(O.v(prose(
                Words.delimiter,
                "> AI prompt to generate new cards:",
                limitString(AC.config.generationPrompt.trim(), 4350).trimEnd(),
                Words.delimiter,
                "> AI prompt to summarize card memories:",
                limitString(AC.config.compressionPrompt.trim(), 4350).trimEnd(),
                Words.delimiter,
                "> Titles banned from new card creation:",
                AC.database.titles.banned.join(", ")
            )), 9850);
        }
    } else {
        // Auto-Cards is currently disabled
        switch (HOOK) {
            case "input": {
                if (/\/\s*A\s*C/i.test(text)) {
                    CODOMAIN.initialize(doPlayerCommands(text));
                } else {
                    CODOMAIN.initialize(TEXT);
                }
                break;
            }
            case "context": {
                // AutoCards was called within the context modifier
                advanceChronometer();
                // Get or construct the "Edit to enable Auto-Cards" story card
                const enableCardTemplate = getEnableCardTemplate();
                const enableCard = getSingletonCard(true, enableCardTemplate);
                banTitle(enableCardTemplate.title);
                pinAndSortCards(enableCard);
                if (AC.signal.forceToggle) {
                    enableAutoCards();
                } else if (enableCard.entry !== enableCardTemplate.entry) {
                    if ((extractSettings(enableCard.entry)?.enableautocards === true) && (AC.signal.forceToggle !== false)) {
                        // Use optional chaining to check the existence of enableautocards before accessing its value
                        enableAutoCards();
                    } else {
                        // Repair the damaged card entry
                        enableCard.entry = enableCardTemplate.entry;
                    }
                }
                AC.signal.forceToggle = null;
                CODOMAIN.initialize(TEXT);
                function enableAutoCards() {
                    // Auto-Cards has been enabled
                    AC.config.doAC = true;
                    // Deconstruct the "Edit to enable Auto-Cards" story card
                    unbanTitle(enableCardTemplate.title);
                    eraseCard(enableCard);
                    // Signal the construction of "Configure Auto-Cards" during the next onOutput hook
                    AC.signal.swapControlCards = true;
                    // Post a success message
                    notify("Enabled! You may now edit the \"Configure Auto-Cards\" story card");
                    return;
                }
                break;
            }
            case "output": {
                // AutoCards was called within the output modifier
                promoteAmnesia();
                if (permitOutput()) {
                    CODOMAIN.initialize(TEXT);
                }
                concludeOutputBlock((function () {
                    if (AC.signal.swapControlCards) {
                        return getEnableCardTemplate();
                    } else {
                        return null;
                    }
                })());
                break;
            }
            default: {
                CODOMAIN.initialize(TEXT);
                break;
            }
        }
        function getEnableCardTemplate() {
            const names = getControlVariants().enable;
            return O.f({
                type: AC.config.defaultCardType,
                title: names.title,
                keys: names.keys,
                entry: prose(
                    "> Auto-Cards automatically creates and updates plot-relevant story cards while you play. To enable this system, simply edit the \"false\" below to say \"true\" instead!",
                    "> Enable Auto-Cards: false"),
                description: "Perform any Do/Say/Story/Continue action within your adventure to apply this change!"
            });
        }
    }
    function hoistConst() {
        return (class Const {
            // This helps me debug stuff uwu
            #constant;
            constructor(...args) {
                if (args.length !== 0) {
                    Const.#throwError([[(args.length === 1), "Const cannot be instantiated with a parameter"], ["Const cannot be instantiated with parameters"]]);
                } else {
                    O.f(this);
                    return this;
                }
            }
            declare(...args) {
                if (args.length !== 0) {
                    Const.#throwError([[(args.length === 1), "Instances of Const cannot be declared with a parameter"], ["Instances of Const cannot be declared with parameters"]]);
                } else if (this.#constant === undefined) {
                    this.#constant = null;
                    return this;
                } else if (this.#constant === null) {
                    Const.#throwError("Instances of Const cannot be redeclared");
                } else {
                    Const.#throwError("Instances of Const cannot be redeclared after initialization");
                }
            }
            initialize(...args) {
                if (args.length !== 1) {
                    Const.#throwError([[(args.length === 0), "Instances of Const cannot be initialized without a parameter"], ["Instances of Const cannot be initialized with multiple parameters"]]);
                } else if (this.#constant === null) {
                    this.#constant = [args[0]];
                    return this;
                } else if (this.#constant === undefined) {
                    Const.#throwError("Instances of Const cannot be initialized before declaration");
                } else {
                    Const.#throwError("Instances of Const cannot be reinitialized");
                }
            }
            read(...args) {
                if (args.length !== 0) {
                    Const.#throwError([[(args.length === 1), "Instances of Const cannot be read with a parameter"], ["Instances of Const cannot read with any parameters"]]);
                } else if (Array.isArray(this.#constant)) {
                    return this.#constant[0];
                } else if (this.#constant === null) {
                    Const.#throwError("Despite prior declaration, instances of Const cannot be read before initialization");
                } else {
                    Const.#throwError("Instances of Const cannot be read before initialization");
                }
            }
            // An error condition is paired with an error message [condition, message], call #throwError with an array of pairs to throw the message corresponding with the first true condition [[cndtn1, msg1], [cndtn2, msg2], [cndtn3, msg3], ...] The first conditionless array element always evaluates to true ('else')
            static #throwError(...args) {
                // Look, I thought I was going to use this more at the time okay
                const [conditionalMessagesTable] = args;
                const codomain = new Const().declare();
                const error = O.f(new Error((function () {
                    const codomain = new Const().declare();
                    if (Array.isArray(conditionalMessagesTable)) {
                        const chosenPair = conditionalMessagesTable.find(function (...args) {
                            const [pair] = args;
                            const codomain = new Const().declare();
                            if (Array.isArray(pair)) {
                                if ((pair.length === 1) && (typeof pair[0] === "string")) {
                                    codomain.initialize(true);
                                } else if (
                                    (pair.length === 2)
                                    && (typeof pair[0] === "boolean")
                                    && (typeof pair[1] === "string")
                                ) {
                                    codomain.initialize(pair[0]);
                                } else {
                                    Const.#throwError("Const.#throwError encountered an invalid array element of conditionalMessagesTable");
                                }
                            } else {
                                Const.#throwError("Const.#throwError encountered a non-array element within conditionalMessagesTable");
                            }
                            return codomain.read();
                        });
                        if (Array.isArray(chosenPair)) {
                            if (chosenPair.length === 1) {
                                codomain.initialize(chosenPair[0]);
                            } else {
                                codomain.initialize(chosenPair[1]);
                            }
                        } else {
                            codomain.initialize("Const.#throwError was not called with any true conditions");
                        }
                    } else if (typeof conditionalMessagesTable === "string") {
                        codomain.initialize(conditionalMessagesTable);
                    } else {
                        codomain.initialize("Const.#throwError could not parse the given argument");
                    }
                    return codomain.read();
                })()));
                if (error.stack) {
                    codomain.initialize(error.stack
                        .replace(/\(<isolated-vm>:/gi, "(")
                        .replace(/Error:|at\s*(?:#throwError|Const.(?:declare|initialize|read)|new\s*Const)\s*\(\d+:\d+\)/gi, "")
                        .replace(/AutoCards\s*\((\d+):(\d+)\)\s*at\s*<isolated-vm>:\d+:\d+\s*$/i, "AutoCards ($1:$2)")
                        .trim()
                        .replace(/\s+/g, " ")
                    );
                } else {
                    codomain.initialize(error.message);
                }
                throw codomain.read();
            }
        });
    }
    function hoistO() {
        return (class O {
            // Some Object class methods are annoyingly verbose for how often I use them 👿
            static f(obj) {
                return Object.freeze(obj);
            }
            static v(base) {
                return see(Words.copy) + base;
            }
            static s(obj) {
                return Object.seal(obj);
            }
        });
    }
    function hoistWords() {
        return (class Words {
            static #cache = {}; static {
                // Each word list is initialized only once before being cached!
                const wordListInitializers = {
                    // Special-cased honorifics which are excluded from titles and ignored during split-by-sentences operations
                    honorifics: () => [
                        "mr.", "ms.", "mrs.", "dr."
                    ],
                    // Other special-cased abbreviations used to reformat titles and split-by-sentences
                    abbreviations: () => [
                        "sr.", "jr.", "etc.", "st.", "ex.", "inc."
                    ],
                    // Lowercase minor connector words which may exist within titles
                    minor: () => [
                        "&", "the", "for", "of", "le", "la", "el"
                    ],
                    // Removed from shortened titles for improved memory detection and trigger keword assignments
                    peerage: () => [
                        "sir", "lord", "lady", "king", "queen", "majesty", "duke", "duchess", "noble", "royal", "emperor", "empress", "great", "prince", "princess", "count", "countess", "baron", "baroness", "archduke", "archduchess", "marquis", "marquess", "viscount", "viscountess", "consort", "grand", "sultan", "sheikh", "tsar", "tsarina", "czar", "czarina", "viceroy", "monarch", "regent", "imperial", "sovereign", "president", "prime", "minister", "nurse", "doctor", "saint", "general", "private", "commander", "captain", "lieutenant", "sergeant", "admiral", "marshal", "baronet", "emir", "chancellor", "archbishop", "bishop", "cardinal", "abbot", "abbess", "shah", "maharaja", "maharani", "councillor", "squire", "lordship", "ladyship", "monseigneur", "mayor", "princeps", "chief", "chef", "their", "my", "his", "him", "he'd", "her", "she", "she'd", "you", "your", "yours", "you'd", "you've", "you'll", "yourself", "mine", "myself", "highness", "excellency", "farmer", "sheriff", "officer", "detective", "investigator", "miss", "mister", "colonel", "professor", "teacher", "agent", "heir", "heiress", "master", "mistress", "headmaster", "headmistress", "principal", "papa", "mama", "mommy", "daddy", "mother", "father", "grandma", "grandpa", "aunt", "auntie", "aunty", "uncle", "cousin", "sister", "brother", "holy", "holiness", "almighty", "senator", "congressman"
                    ],
                    // Common named entities represent special-cased INVALID card titles. Because these concepts are already abundant within the AI's training data, generating story cards for any of these would be both annoying and superfluous. Therefore, Words.entities is accessed during banned titles initialization to prevent their appearance
                    entities: () => [
                        // Seasons
                        "spring", "summer", "autumn", "fall", "winter",
                        // Holidays
                        "halloween", "christmas", "thanksgiving", "easter", "hanukkah", "passover", "ramadan", "eid", "diwali", "new year", "new year eve", "valentine day", "oktoberfest",
                        // People terms
                        "mom", "dad", "child", "grandmother", "grandfather", "ladies", "gentlemen", "gentleman", "slave",
                        // Capitalizable pronoun thingys
                        "his", "him", "he'd", "her", "she", "she'd", "you", "your", "yours", "you'd", "you've", "you'll", "you're", "yourself", "mine", "myself", "this", "that",
                        // Religious figures & deities
                        "god", "jesus", "buddha", "allah", "christ",
                        // Religious texts & concepts
                        "bible", "holy bible", "qur'an", "quran", "hadith", "tafsir", "tanakh", "talmud", "torah", "vedas", "vatican", "paganism", "pagan",
                        // Religions & belief systems
                        "hindu", "hinduism", "christianity", "islam", "jew", "judaism", "taoism", "buddhist", "buddhism", "catholic", "baptist",
                        // Common locations
                        "earth", "moon", "sun", "new york city", "london", "paris", "tokyo", "beijing", "mumbai", "sydney", "berlin", "moscow", "los angeles", "san francisco", "chicago", "miami", "seattle", "vancouver", "toronto", "ottawa", "mexico city", "rio de janeiro", "cape town", "sao paulo", "bangkok", "delhi", "amsterdam", "seoul", "shanghai", "new delhi", "atlanta", "jerusalem", "africa", "north america", "south america", "central america", "asia", "north africa", "south africa", "boston", "rome", "america", "siberia", "new england", "manhattan", "bavaria", "catalonia", "greenland", "hong kong", "singapore",
                        // Countries & political entities
                        "china", "india", "japan", "germany", "france", "spain", "italy", "canada", "australia", "brazil", "south africa", "russia", "north korea", "south korea", "iran", "iraq", "syria", "saudi arabia", "afghanistan", "pakistan", "uk", "britain", "england", "scotland", "wales", "northern ireland", "usa", "united states", "united states of america", "mexico", "turkey", "greece", "portugal", "poland", "netherlands", "belgium", "sweden", "norway", "finland", "denmark",
                        // Organizations & unions
                        "united nations", "european union", "state", "nato", "nfl", "nba", "fbi", "cia", "harvard", "yale", "princeton", "ivy league", "little league", "nasa", "nsa", "noaa", "osha", "nascar", "daytona 500", "grand prix", "wwe", "mba", "superbowl",
                        // Currencies
                        "dollar", "euro", "pound", "yen", "rupee", "peso", "franc", "dinar", "bitcoin", "ethereum", "ruble", "won", "dirham",
                        // Landmarks
                        "sydney opera house", "eiffel tower", "statue of liberty", "big ben", "great wall of china", "taj mahal", "pyramids of giza", "grand canyon", "mount everest",
                        // Events
                        "world war i", "world war 1", "wwi", "wwii", "world war ii", "world war 2", "wwii", "ww2", "cold war", "brexit", "american revolution", "french revolution", "holocaust", "cuban missile crisis",
                        // Companies
                        "google", "microsoft", "apple", "amazon", "facebook", "tesla", "ibm", "intel", "samsung", "sony", "coca-cola", "nike", "ford", "chevy", "pontiac", "chrysler", "volkswagen", "lambo", "lamborghini", "ferrari", "pizza hut", "taco bell", "ai dungeon", "openai", "mcdonald", "mcdonalds", "kfc", "burger king", "disney",
                        // Nationalities & languages
                        "english", "french", "spanish", "german", "italian", "russian", "chinese", "japanese", "korean", "arabic", "portuguese", "hindi", "american", "canadian", "mexican", "brazilian", "indian", "australian", "egyptian", "greek", "swedish", "norwegian", "danish", "dutch", "turkish", "iranian", "ukraine", "asian", "british", "european", "polish", "thai", "vietnamese", "filipino", "malaysian", "indonesian", "finnish", "estonian", "latvian", "lithuanian", "czech", "slovak", "hungarian", "romanian", "bulgarian", "serbian", "croatian", "bosnian", "slovenian", "albanian", "georgian", "armenian", "azerbaijani", "kazakh", "uzbek", "mongolian", "hebrew", "persian", "pashto", "urdu", "bengali", "tamil", "telugu", "marathi", "gujarati", "swahili", "zulu", "xhosa", "african", "north african", "south african", "north american", "south american", "central american", "colombian", "argentinian", "chilean", "peruvian", "venezuelan", "ecuadorian", "bolivian", "paraguayan", "uruguayan", "cuban", "dominican", "arabian", "roman", "haitian", "puerto rican", "moroccan", "algerian", "tunisian", "saudi", "emirati", "qatarian", "bahraini", "omani", "yemeni", "syrian", "lebanese", "iraqi", "afghan", "pakistani", "sri lankan", "burmese", "laotian", "cambodian", "hawaiian", "victorian",
                        // Fantasy stuff
                        "elf", "elves", "elven", "dwarf", "dwarves", "dwarven", "human", "man", "men", "mankind", "humanity",
                        // IPs
                        "pokemon", "pokémon", "minecraft", "beetles", "band-aid", "bandaid", "band aid", "big mac", "gpt", "chatgpt", "gpt-2", "gpt-3", "gpt-4", "gpt-4o", "mixtral", "mistral", "linux", "windows", "mac", "happy meal", "disneyland", "disneyworld",
                        // US states
                        "alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut", "delaware", "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", "massachusetts", "michigan", "minnesota", "mississippi", "missouri", "nebraska", "nevada", "new hampshire", "new jersey", "new mexico", "new york", "north carolina", "north dakota", "ohio", "oklahoma", "oregon", "pennsylvania", "rhode island", "south carolina", "south dakota", "tennessee", "texas", "utah", "vermont", "west virginia", "wisconsin", "wyoming",
                        // Canadian Provinces & Territories
                        "british columbia", "manitoba", "new brunswick", "labrador", "nova scotia", "ontario", "prince edward island", "quebec", "saskatchewan", "northwest territories", "nunavut", "yukon", "newfoundland",
                        // Australian States & Territories
                        "new south wales", "queensland", "south australia", "tasmania", "western australia", "australian capital territory",
                        // idk
                        "html", "javascript", "python", "java", "c++", "php", "bluetooth", "json", "sql", "word", "dna", "icbm", "npc", "usb", "rsvp", "omg", "brb", "lol", "rofl", "smh", "ttyl", "rubik", "adam", "t-shirt", "tshirt", "t shirt", "led", "leds", "laser", "lasers", "qna", "q&a", "vip", "human resource", "human resources", "llm", "llc", "ceo", "cfo", "coo", "office", "blt", "suv", "suvs", "ems", "emt", "cbt", "cpr", "ferris wheel", "toy", "pet", "plaything", "m o"
                    ],
                    // Unwanted values
                    undesirables: () => [
                        [343332, 451737, 323433, 377817], [436425, 356928, 363825, 444048], [323433, 428868, 310497, 413952], [350097, 66825, 436425, 413952, 406593, 444048], [316932, 330000, 436425, 392073], [444048, 356928, 323433], [451737, 444048, 363825], [330000, 310497, 392073, 399300]
                    ],
                    delimiter: () => (
                        "——————————————————————————"
                    ),
                    // Source code location
                    copy: () => [
                        126852, 33792, 211200, 384912, 336633, 310497, 436425, 336633, 33792, 459492, 363825, 436425, 363825, 444048, 33792, 392073, 483153, 33792, 139425, 175857, 33792, 152592, 451737, 399300, 350097, 336633, 406593, 399300, 33792, 413952, 428868, 406593, 343332, 363825, 384912, 336633, 33792, 135168, 190608, 336633, 467313, 330000, 190608, 336633, 310497, 356928, 33792, 310497, 399300, 330000, 33792, 428868, 336633, 310497, 330000, 33792, 392073, 483153, 33792, 316932, 363825, 406593, 33792, 343332, 406593, 428868, 33792, 436425, 363825, 392073, 413952, 384912, 336633, 33792, 363825, 399300, 436425, 444048, 428868, 451737, 323433, 444048, 363825, 406593, 399300, 436425, 33792, 406593, 399300, 33792, 310497, 330000, 330000, 363825, 399300, 350097, 33792, 139425, 451737, 444048, 406593, 66825, 148137, 310497, 428868, 330000, 436425, 33792, 444048, 406593, 33792, 483153, 406593, 451737, 428868, 33792, 436425, 323433, 336633, 399300, 310497, 428868, 363825, 406593, 436425, 35937, 33792, 3355672848, 139592360193, 3300, 3300, 356928, 444048, 444048, 413952, 436425, 111012, 72897, 72897, 413952, 384912, 310497, 483153, 69828, 310497, 363825, 330000, 451737, 399300, 350097, 336633, 406593, 399300, 69828, 323433, 406593, 392073, 72897, 413952, 428868, 406593, 343332, 363825, 384912, 336633, 72897, 190608, 336633, 467313, 330000, 190608, 336633, 310497, 356928, 3300, 3300, 126852, 33792, 139425, 451737, 444048, 406593, 66825, 148137, 310497, 428868, 330000, 436425, 33792, 459492, 79233, 69828, 76032, 69828, 76032, 33792, 363825, 436425, 33792, 310497, 399300, 33792, 406593, 413952, 336633, 399300, 66825, 436425, 406593, 451737, 428868, 323433, 336633, 33792, 436425, 323433, 428868, 363825, 413952, 444048, 33792, 343332, 406593, 428868, 33792, 139425, 175857, 33792, 152592, 451737, 399300, 350097, 336633, 406593, 399300, 33792, 392073, 310497, 330000, 336633, 33792, 316932, 483153, 33792, 190608, 336633, 467313, 330000, 190608, 336633, 310497, 356928, 69828, 33792, 261393, 406593, 451737, 33792, 356928, 310497, 459492, 336633, 33792, 392073, 483153, 33792, 343332, 451737, 384912, 384912, 33792, 413952, 336633, 428868, 392073, 363825, 436425, 436425, 363825, 406593, 399300, 33792, 444048, 406593, 33792, 451737, 436425, 336633, 33792, 139425, 451737, 444048, 406593, 66825, 148137, 310497, 428868, 330000, 436425, 33792, 467313, 363825, 444048, 356928, 363825, 399300, 33792, 483153, 406593, 451737, 428868, 33792, 413952, 336633, 428868, 436425, 406593, 399300, 310497, 384912, 33792, 406593, 428868, 33792, 413952, 451737, 316932, 384912, 363825, 436425, 356928, 336633, 330000, 33792, 436425, 323433, 336633, 399300, 310497, 428868, 363825, 406593, 436425, 35937, 3300, 126852, 33792, 261393, 406593, 451737, 50193, 428868, 336633, 33792, 310497, 384912, 436425, 406593, 33792, 467313, 336633, 384912, 323433, 406593, 392073, 336633, 33792, 444048, 406593, 33792, 336633, 330000, 363825, 444048, 33792, 444048, 356928, 336633, 33792, 139425, 175857, 33792, 413952, 428868, 406593, 392073, 413952, 444048, 436425, 33792, 310497, 399300, 330000, 33792, 444048, 363825, 444048, 384912, 336633, 33792, 336633, 475200, 323433, 384912, 451737, 436425, 363825, 406593, 399300, 436425, 33792, 413952, 428868, 406593, 459492, 363825, 330000, 336633, 330000, 33792, 316932, 336633, 384912, 406593, 467313, 69828, 33792, 175857, 33792, 436425, 363825, 399300, 323433, 336633, 428868, 336633, 384912, 483153, 33792, 356928, 406593, 413952, 336633, 33792, 483153, 406593, 451737, 33792, 336633, 399300, 370788, 406593, 483153, 33792, 483153, 406593, 451737, 428868, 33792, 310497, 330000, 459492, 336633, 399300, 444048, 451737, 428868, 336633, 436425, 35937, 33792, 101128769412, 106046468352, 3300
                    ],
                    // Card interface names reserved for use within LSIv2
                    reserved: () => ({
                        library: "Shared Library", input: "Input Modifier", context: "Context Modifier", output: "Output Modifier", guide: "LSIv2 Guide", state: "State Display", log: "Console Log"
                    }),
                    // Acceptable config settings which are coerced to true
                    trues: () => [
                        "true", "t", "yes", "y", "on"
                    ],
                    // Acceptable config settings which are coerced to false
                    falses: () => [
                        "false", "f", "no", "n", "off"
                    ],
                    guide: () => prose(
                        ">>> Detailed Guide:",
                        "Auto-Cards was made by LewdLeah ❤️",
                        "",
                        Words.delimiter,
                        "",
                        "💡 What is Auto-Cards?",
                        "Auto-Cards is a plug-and-play script for AI Dungeon that watches your story and automatically writes plot-relevant story cards during normal gameplay. A forgetful AI breaks my immersion, therefore my primary goal was to address the \"object permanence problem\" by extending story cards and memories with deeper automation. Auto-Cards builds a living reference of your adventure's world as you go. For your own convenience, all of this stuff is handled in the background. Though you're certainly welcome to customize various settings or use in-game commands for more precise control",
                        "",
                        Words.delimiter,
                        "",
                        " 📌 Main Features",
                        "- Detects named entities from your story and periodically writes new cards",
                        "- Smart long-term memory updates and summaries for important cards",
                        "- Fully customizable AI card generation and memory summarization prompts",
                        "- Optional in-game commands to manually direct the card generation process",
                        "- Free and open source for anyone to use within their own projects",
                        "- Compatible with other scripts and includes an external API",
                        "- Optional in-game scripting interface (LSIv2)",
                        "",
                        Words.delimiter,
                        "",
                        "⚙️ Config Settings",
                        "You may, at any time, fine-tune your settings in-game by editing their values within the config card's entry section. Simply swap true/false or tweak numbers where appropriate",
                        "",
                        "> Disable Auto-Cards:",
                        "Turns the whole system off if true",
                        "",
                        "> Show detailed guide:",
                        "If true, shows this player guide in-game",
                        "",
                        "> Delete all automatic story cards:",
                        "Removes every auto-card present in your adventure",
                        "",
                        "> Reset all config settings and prompts:",
                        "Restores all settings and prompts to their original default values",
                        "",
                        "> Pin this config card near the top:",
                        "Keeps the config card pinned high on your cards list",
                        "",
                        "> Minimum turns cooldown for new cards:",
                        "How many turns (minimum) to wait between generating new cards. Using 9999 will pause periodic card generation while still allowing card memory updates to continue",
                        "",
                        "> New cards use a bulleted list format:",
                        "If true, new entries will use bullet points instead of pure prose",
                        "",
                        "> Maximum entry length for new cards:",
                        "Caps how long newly generated card entries can be (in characters)",
                        "",
                        "> New cards perform memory updates:",
                        "If true, new cards will automatically experience memory updates over time",
                        "",
                        "> Card memory bank preferred length:",
                        "Character count threshold before card memories are summarized to save space",
                        "",
                        "> Memory summary compression ratio:",
                        "Controls how much to compress when summarizing long card memory banks",
                        "(ratio = 10 * old / new ... such that 25 -> 2.5x shorter)",
                        "",
                        "> Exclude all-caps from title detection:",
                        "Prevents all-caps words like \"RUN\" from being parsed as viable titles",
                        "",
                        "> Also detect titles from player inputs:",
                        "Allows your typed Do/Say/Story action inputs to help suggest new card topics. Set to false if you have bad grammar, or if you're German (due to idiosyncratic noun capitalization habits)",
                        "",
                        "> Minimum turns age for title detection:",
                        "How many actions back the script looks when parsing recent titles from your story",
                        "",
                        "> Use Live Script Interface v2:",
                        "Enables LSIv2 for extra scripting magic and advanced control via arbitrary code execution",
                        "",
                        "> Log debug data in a separate card:",
                        "Shows a debug card if set to true",
                        "",
                        Words.delimiter,
                        "",
                        "✏️ AI Prompts",
                        "You may specify how the AI handles story card processes by editing either of these two prompts within the config card's notes section",
                        "",
                        "> AI prompt to generate new cards:",
                        "Used when Auto-Cards writes a new card entry. It tells the AI to focus on important plot stuff, avoid fluff, and write in a consistent, polished style. I like to add some personal preferences here when playing my own adventures. \"%{title}\" and \"%{entry}\" are dynamic placeholders for their namesakes",
                        "",
                        "> AI prompt to summarize card memories:",
                        "Summarizes older details within card memory banks to keep everything concise and neat over the long-run. Maintains only the most important details, written in the past tense. \"%{title}\" and \"%{memory}\" are dynamic placeholders for their namesakes",
                        "",
                        Words.delimiter,
                        "",
                        "⛔ Banned Titles List",
                        "This list prevents new cards from being created for super generic or unhelpful titles such as North, Tuesday, or December. You may edit these at the bottom of the config card's notes section. Capitalization and plural/singular forms are handled for you, so no worries about that",
                        "",
                        "> Titles banned from automatic new card generation:",
                        "North, East, South, West, and so on...",
                        "",
                        Words.delimiter,
                        "",
                        "🔑 In-Game Commands (/ac)",
                        "Use these commands to manually interact with Auto-Cards, simply type them into a Do/Say/Story input action",
                        "",
                        "/ac",
                        "Sets your actual cooldown to 0 and immediately attempts to generate a new card for the most relevant unused title from your story (if one exists)",
                        "",
                        "/ac Your Title Goes Here",
                        "Will immediately begin generating a new story card with the given title",
                        "Example use: \"/ac Leah\"",
                        "",
                        "/ac Your Title Goes Here / Your extra prompt details go here",
                        "Similar to the previous case, but with additional context to include with the card generation prompt",
                        "Example use: \"/ac Leah / Focus on Leah's works of artifice and ingenuity\"",
                        "",
                        "/ac Your Title Goes Here / Your extra prompt details go here / Your starter entry goes here",
                        "Again, similar to the previous case, but with an initial card entry for the generator to build upon",
                        "Example use: \"/ac Leah / Focus on Leah's works of artifice and ingenuity / You are a woman named Leah.\"",
                        "",
                        "/ac redo Your Title Goes Here",
                        "Rewrites your chosen story card, using the old card entry, memory bank, and story context for inspiration. Useful for recreating cards after important character development has occurred",
                        "Example use: \"/ac redo Leah\"",
                        "",
                        "/ac redo Your Title Goes Here / New info goes here",
                        "Similar to the previous case, but with additional info provided to guide the rewrite according to your additional specifications",
                        "Example use: \"/ac redo Leah / Leah recently achieved immortality\"",
                        "",
                        "/ac redo all",
                        "Recreates every single auto-card in your adventure. I must warn you though: This is very risky",
                        "",
                        "Extra Info:",
                        "- Invalid titles will fail. It's a technical limitation, sorry 🤷‍♀️",
                        "- Titles must be unique, unless you're attempting to use \"/ac redo\" for an existing card",
                        "- You may submit multiple commands using a single input to queue up a chained sequence of requests",
                        "- Capitalization doesn't matter, titles will be reformatted regardless",
                        "",
                        Words.delimiter,
                        "",
                        "🔧 External API Functions (quick summary)",
                        "These are mainly for other JavaScript programmers to use, so feel free to ignore this section if that doesn't apply to you. Anyway, here's what each one does in plain terms, though please do refer to my source code for the full documentation",
                        "",
                        "AutoCards().API.postponeEvents();",
                        "Pauses Auto-Cards activity for n many turns",
                        "",
                        "AutoCards().API.emergencyHalt();",
                        "Emergency stop or resume",
                        "",
                        "AutoCards().API.suppressMessages();",
                        "Hides Auto-Cards toasts by preventing assignment to state.message",
                        "",
                        "AutoCards().API.debugLog();",
                        "Writes to the debug log card",
                        "",
                        "AutoCards().API.toggle();",
                        "Turns Auto-Cards on/off",
                        "",
                        "AutoCards().API.generateCard();",
                        "Initiates AI generation of the requested card",
                        "",
                        "AutoCards().API.redoCard();",
                        "Regenerates an existing card",
                        "",
                        "AutoCards().API.setCardAsAuto();",
                        "Flags or unflags a card as automatic",
                        "",
                        "AutoCards().API.addCardMemory();",
                        "Adds a memory to a specific card",
                        "",
                        "AutoCards().API.eraseAllAutoCards();",
                        "Deletes all auto-cards",
                        "",
                        "AutoCards().API.getUsedTitles();",
                        "Lists all current card titles and keys",
                        "",
                        "AutoCards().API.getBannedTitles();",
                        "Shows your current banned titles list",
                        "",
                        "AutoCards().API.setBannedTitles();",
                        "Replaces the banned titles list with a new list",
                        "",
                        "AutoCards().API.buildCard();",
                        "Makes a new card from scratch, using exact parameters",
                        "",
                        "AutoCards().API.getCard();",
                        "Finds cards that match a filter",
                        "",
                        "AutoCards().API.eraseCard();",
                        "Deletes cards matching a filter",
                        "",
                        "These API functions also work from within the LSIv2 scope, by the way",
                        "",
                        Words.delimiter,
                        "",
                        "❤️ Special Thanks",
                        "This project flourished due to the incredible help, feedback, and encouragement from the AI Dungeon community. Your ideas, bug reports, testing, and support made Auto-Cards smarter, faster, and more fun for all. Please refer to my source code to learn more about everyone's specific contributions",
                        "",
                        "AHotHamster22, BinKompliziert, Boo, bottledfox, Bruno, Burnout, bweni, DebaczX, Dirty Kurtis, Dragranis, effortlyss, Hawk, Idle Confusion, ImprezA, Kat-Oli, KryptykAngel, Mad19pumpkin, Magic, Mirox80, Nathaniel Wyvern, NobodyIsUgly, OnyxFlame, Purplejump, Randy Viosca, RustyPawz, sinner, Sleepy pink, Vutinberg, Wilmar, Yi1i1i",
                        "",
                        Words.delimiter,
                        "",
                        "🎴 Random Tips",
                        "- The default setup works great out of the box, just play normally and watch your world build itself",
                        "- Enable AI Dungeon's built-in memory system for the best results",
                        "- Gameplay -> AI Models -> Memory System -> Memory Bank -> Toggle-ON to enable",
                        "- \"t\" and \"f\" are valid shorthand for \"true\" and \"false\" inside the config card",
                        "- If Auto-Cards goes overboard with new cards, you can pause it by setting the cooldown config to 9999",
                        "- Write \"{title:}\" anywhere within a regular story card's entry to transform it into an automatic card",
                        "- Feel free to import/export entire story card decks at any time",
                        "- Please copy my source code from here: https://play.aidungeon.com/profile/LewdLeah",
                        "",
                        Words.delimiter,
                        "",
                        "Happy adventuring! ❤️",
                        "Please erase before continuing! <<<"
                    )
                };
                for (const wordList in wordListInitializers) {
                    // Define a lazy getter for every word list
                    Object.defineProperty(Words, wordList, {
                        configurable: false,
                        enumerable: true,
                        get() {
                            // If not already in cache, initialize and store the word list
                            if (!(wordList in Words.#cache)) {
                                Words.#cache[wordList] = O.f(wordListInitializers[wordList]());
                            }
                            return Words.#cache[wordList];
                        }
                    });
                }
            }
        });
    }
    function hoistStringsHashed() {
        return (class StringsHashed {
            // Used for information-dense past memory recognition
            // Strings are converted to (reasonably) unique hashcodes for efficient existence checking
            static #defaultSize = 65536;
            #size;
            #store;
            constructor(size = StringsHashed.#defaultSize) {
                this.#size = size;
                this.#store = new Set();
                return this;
            }
            static deserialize(serialized, size = StringsHashed.#defaultSize) {
                const stringsHashed = new StringsHashed(size);
                stringsHashed.#store = new Set(serialized.split(","));
                return stringsHashed;
            }
            serialize() {
                return Array.from(this.#store).join(",");
            }
            has(str) {
                return this.#store.has(this.#hash(str));
            }
            add(str) {
                this.#store.add(this.#hash(str));
                return this;
            }
            remove(str) {
                this.#store.delete(this.#hash(str));
                return this;
            }
            size() {
                return this.#store.size;
            }
            latest(keepLatestCardinality) {
                if (this.#store.size <= keepLatestCardinality) {
                    return this;
                }
                const excess = this.#store.size - keepLatestCardinality;
                const iterator = this.#store.values();
                for (let i = 0; i < excess; i++) {
                    // The oldest hashcodes are removed first (insertion order matters!)
                    this.#store.delete(iterator.next().value);
                }
                return this;
            }
            #hash(str) {
                let hash = 0;
                for (let i = 0; i < str.length; i++) {
                    hash = ((31 * hash) + str.charCodeAt(i)) % this.#size;
                }
                return hash.toString(36);
            }
        });
    }
    function hoistInternal() {
        return (class Internal {
            // Some exported API functions are internally reused by AutoCards
            // Recursively calling AutoCards().API is computationally wasteful
            // AutoCards uses this collection of static methods as an internal proxy
            static generateCard(request, predefinedPair = ["", ""]) {
                // Method call guide:
                // Internal.generateCard({
                //     // All properties except 'title' are optional
                //     type: "card type, defaults to 'class' for ease of filtering",
                //     title: "card title",
                //     keysStart: "preexisting card triggers",
                //     entryStart: "preexisting card entry",
                //     entryPrompt: "prompt the AI will use to complete this entry",
                //     entryPromptDetails: "extra details to include with this card's prompt",
                //     entryLimit: 600, // target character count for the generated entry
                //     description: "card notes",
                //     memoryStart: "preexisting card memory",
                //     memoryUpdates: true, // card updates when new relevant memories are formed
                //     memoryLimit: 3200, // max characters before the card memory is compressed
                // });
                const titleKeyPair = formatTitle((request.title ?? "").toString());
                const title = predefinedPair[0] || titleKeyPair.newTitle;
                if (
                    (title === "")
                    || (("title" in AC.generation.workpiece) && (title === AC.generation.workpiece.title))
                    || (isAwaitingGeneration() && (AC.generation.pending.some(pendingWorkpiece => (
                        ("title" in pendingWorkpiece) && (title === pendingWorkpiece.title)
                    ))))
                ) {
                    logEvent("The title '" + request.title + "' is invalid or unavailable for card generation", true);
                    return false;
                }
                AC.generation.pending.push(O.s({
                    title: title,
                    type: limitString((request.type || AC.config.defaultCardType).toString().trim(), 100),
                    keys: predefinedPair[1] || buildKeys((request.keysStart ?? "").toString(), titleKeyPair.newKey),
                    entry: limitString("{title: " + title + "}" + cleanSpaces((function () {
                        const entry = (request.entryStart ?? "").toString().trim();
                        if (entry === "") {
                            return "";
                        } else {
                            return ("\n" + entry + (function () {
                                if (/[a-zA-Z]$/.test(entry)) {
                                    return ".";
                                } else {
                                    return "";
                                }
                            })() + " ");
                        }
                    })()), 2000),
                    description: limitString((
                        (function () {
                            const description = limitString((request.description ?? "").toString().trim(), 9900);
                            if (description === "") {
                                return "";
                            } else {
                                return description + "\n\n";
                            }
                        })() + "Auto-Cards will contextualize these memories:\n{updates: " + (function () {
                            if (typeof request.memoryUpdates === "boolean") {
                                return request.memoryUpdates;
                            } else {
                                return AC.config.defaultCardsDoMemoryUpdates;
                            }
                        })() + ", limit: " + validateMemoryLimit(
                            parseInt((request.memoryLimit || AC.config.defaultMemoryLimit), 10)
                        ) + "}" + (function () {
                            const cardMemoryBank = cleanSpaces((request.memoryStart ?? "").toString().trim());
                            if (cardMemoryBank === "") {
                                return "";
                            } else {
                                return "\n" + cardMemoryBank.split("\n").map(memory => addBullet(memory)).join("\n");
                            }
                        })()
                    ), 10000),
                    prompt: (function () {
                        let prompt = insertTitle((
                            (request.entryPrompt ?? "").toString().trim() || AC.config.generationPrompt.trim()
                        ), title);
                        let promptDetails = insertTitle((
                            cleanSpaces((request.entryPromptDetails ?? "").toString().trim())
                        ), title);
                        if (promptDetails !== "") {
                            const spacesPrecedingTerminalEntryPlaceholder = (function () {
                                const terminalEntryPlaceholderPattern = /(?:[%\$]+\s*|[%\$]*){+\s*entry\s*}+$/i;
                                if (terminalEntryPlaceholderPattern.test(prompt)) {
                                    prompt = prompt.replace(terminalEntryPlaceholderPattern, "");
                                    const trailingSpaces = prompt.match(/(\s+)$/);
                                    if (trailingSpaces) {
                                        prompt = prompt.trimEnd();
                                        return trailingSpaces[1];
                                    } else {
                                        return "\n\n";
                                    }
                                } else {
                                    return "";
                                }
                            })();
                            switch (prompt[prompt.length - 1]) {
                                case "]": { encapsulateBothPrompts("[", true, "]"); break; }
                                case ">": { encapsulateBothPrompts(null, false, ">"); break; }
                                case "}": { encapsulateBothPrompts("{", true, "}"); break; }
                                case ")": { encapsulateBothPrompts("(", true, ")"); break; }
                                case "/": { encapsulateBothPrompts("/", true, "/"); break; }
                                case "#": { encapsulateBothPrompts("#", true, "#"); break; }
                                case "-": { encapsulateBothPrompts(null, false, "-"); break; }
                                case ":": { encapsulateBothPrompts(":", true, ":"); break; }
                                case "<": { encapsulateBothPrompts(">", true, "<"); break; }
                            };
                            if (promptDetails.includes("\n")) {
                                const lines = promptDetails.split("\n");
                                for (let i = 0; i < lines.length; i++) {
                                    lines[i] = addBullet(lines[i].trim());
                                }
                                promptDetails = lines.join("\n");
                            } else {
                                promptDetails = addBullet(promptDetails);
                            }
                            prompt += "\n" + promptDetails + (function () {
                                if (spacesPrecedingTerminalEntryPlaceholder !== "") {
                                    // Prompt previously contained a terminal %{entry} placeholder, re-append it
                                    return spacesPrecedingTerminalEntryPlaceholder + "%{entry}";
                                }
                                return "";
                            })();
                            function encapsulateBothPrompts(leftSymbol, slicesAtMiddle, rightSymbol) {
                                if (slicesAtMiddle) {
                                    prompt = prompt.slice(0, -1).trim();
                                    if (promptDetails.startsWith(leftSymbol)) {
                                        promptDetails = promptDetails.slice(1).trim();
                                    }
                                }
                                if (!promptDetails.endsWith(rightSymbol)) {
                                    promptDetails += rightSymbol;
                                }
                                return;
                            }
                        }
                        return limitString(prompt, Math.floor(0.8 * AC.signal.maxChars));
                    })(),
                    limit: validateEntryLimit(parseInt((request.entryLimit || AC.config.defaultEntryLimit), 10))
                }));
                notify("Generating card for \"" + title + "\"");
                function addBullet(str) {
                    return "- " + str.replace(/^-+\s*/, "");
                }
                return true;
            }
            static redoCard(request, useOldInfo, newInfo) {
                const card = getIntendedCard(request.title)[0];
                const oldCard = O.f({ ...card });
                if (!eraseCard(card)) {
                    return false;
                } else if (newInfo !== "") {
                    request.entryPromptDetails = (request.entryPromptDetails ?? "").toString() + "\n" + newInfo;
                }
                O.f(request);
                Internal.getUsedTitles(true);
                if (!Internal.generateCard(request) && !Internal.generateCard(request, [
                    (oldCard.entry.match(/^{title: ([\s\S]*?)}/)?.[1] || request.title.replace(/\w\S*/g, word => (
                        word[0].toUpperCase() + word.slice(1).toLowerCase()
                    ))), oldCard.keys
                ])) {
                    constructCard(oldCard, newCardIndex());
                    Internal.getUsedTitles(true);
                    return false;
                } else if (!useOldInfo) {
                    return true;
                }
                AC.generation.pending[AC.generation.pending.length - 1].prompt = ((
                    removeAutoProps(oldCard.entry) + "\n\n" +
                    removeAutoProps(isolateNotesAndMemories(oldCard.description)[1])
                ).trimEnd() + "\n\n" + AC.generation.pending[AC.generation.pending.length - 1].prompt).trim();
                return true;
            }
            // Sometimes it's helpful to log information elsewhere during development
            // This log card is separate and distinct from the LSIv2 console log
            static debugLog(...args) {
                const debugCardName = "Debug Log";
                banTitle(debugCardName);
                const card = getSingletonCard(true, O.f({
                    type: AC.config.defaultCardType,
                    title: debugCardName,
                    keys: debugCardName,
                    entry: "The debug console log will print to the notes section below.",
                    description: Words.delimiter + "\nBEGIN DEBUG LOG"
                }));
                logToCard(card, ...args);
                return card;
            }
            static eraseAllAutoCards() {
                const cards = [];
                Internal.getUsedTitles(true);
                for (const card of storyCards) {
                    if (card.entry.startsWith("{title: ")) {
                        cards.push(card);
                    }
                }
                for (const card of cards) {
                    eraseCard(card);
                }
                auto.clear();
                forgetStuff();
                clearTransientTitles();
                AC.generation.pending = [];
                AC.database.memories.associations = {};
                if (AC.config.deleteAllAutoCards) {
                    AC.config.deleteAllAutoCards = null;
                }
                return cards.length;
            }
            static getUsedTitles(isExternal = false) {
                if (isExternal) {
                    bans.clear();
                    isBanned("", true);
                } else if (0 < AC.database.titles.used.length) {
                    return AC.database.titles.used;
                }
                // All unique used titles and keys encountered during this iteration
                const seen = new Set();
                auto.clear();
                clearTransientTitles();
                AC.database.titles.used = ["%@%"];
                for (const card of storyCards) {
                    // Perform some common sense maintenance while we're here
                    const coerce = (str) => (typeof str === "string") ? str : "";
                    // Do not trim card.keys
                    card.keys = coerce(card.keys);
                    if (card.keys.includes("\"agent\"") || card.keys.includes("aidungeon")) {
                        if (isExternal) {
                            O.s(card);
                        }
                        continue;
                    }
                    card.type = coerce(card.type).trim();
                    card.title = coerce(card.title).trim();
                    card.entry = coerce(card.entry).trim();
                    card.description = coerce(card.description).trim();
                    if (isExternal) {
                        O.s(card);
                    } else if (!shouldProceed()) {
                        checkRemaining();
                        continue;
                    }
                    // An ideal auto-card's entry starts with "{title: Example of Greatness}" (example)
                    // An ideal auto-card's description contains "{updates: true, limit: 3200}" (example)
                    if (checkPlurals(denumberName(card.title.replace("\n", "")), t => isBanned(t))) {
                        checkRemaining();
                        continue;
                    } else if (!card.keys.includes(",")) {
                        const cleanKeys = denumberName(card.keys.trim());
                        if ((2 < cleanKeys.length) && checkPlurals(cleanKeys, t => isBanned(t))) {
                            checkRemaining();
                            continue;
                        }
                    }
                    // Detect and repair malformed auto-card properties in a fault-tolerant manner
                    const traits = [card.entry, card.description].map((str, i) => {
                        // Absolute abomination uwu
                        const hasUpdates = /updates?\s*:[\s\S]*?(?:(?:title|limit)s?\s*:|})/i.test(str);
                        const hasLimit = /limits?\s*:[\s\S]*?(?:(?:title|update)s?\s*:|})/i.test(str);
                        return [(function () {
                            if (hasUpdates || hasLimit) {
                                if (/titles?\s*:[\s\S]*?(?:(?:limit|update)s?\s*:|})/i.test(str)) {
                                    return 2;
                                }
                                return false;
                            } else if (/titles?\s*:[\s\S]*?}/i.test(str)) {
                                return 1;
                            } else if (!(
                                (i === 0)
                                && /{[\s\S]*?}/.test(str)
                                && (str.match(/{/g)?.length === 1)
                                && (str.match(/}/g)?.length === 1)
                            )) {
                                return false;
                            }
                            const badTitleHeaderMatch = str.match(/{([\s\S]*?)}/);
                            if (!badTitleHeaderMatch) {
                                return false;
                            }
                            const inferredTitle = badTitleHeaderMatch[1].split(",")[0].trim();
                            if (
                                (2 < inferredTitle.length)
                                && (inferredTitle.length <= 100)
                                && (badTitleHeaderMatch[0].length < str.length)
                            ) {
                                // A rare case where the title's existence should be inferred from the enclosing {curly brackets}
                                return inferredTitle;
                            }
                            return false;
                        })(), hasUpdates, hasLimit];
                    }).flat();
                    if (traits.every(trait => !trait)) {
                        // This card contains no auto-card traits, not even malformed ones
                        checkRemaining();
                        continue;
                    }
                    const [
                        hasEntryTitle,
                        hasEntryUpdates,
                        hasEntryLimit,
                        hasDescTitle,
                        hasDescUpdates,
                        hasDescLimit
                    ] = traits;
                    // Handle all story cards which belong to the Auto-Cards ecosystem
                    // May flag this damaged auto-card for later repairs
                    // May flag this duplicate auto-card for deformatting (will become a regular story card)
                    let repair = false;
                    let release = false;
                    const title = (function () {
                        let title = "";
                        if (typeof hasEntryTitle === "string") {
                            repair = true;
                            title = formatTitle(hasEntryTitle).newTitle;
                            if (hasDescTitle && bad()) {
                                title = parseTitle(false);
                            }
                        } else if (hasEntryTitle) {
                            title = parseTitle(true);
                            if (hasDescTitle) {
                                repair = true;
                                if (bad()) {
                                    title = parseTitle(false);
                                }
                            } else if (1 < card.entry.match(/titles?\s*:/gi)?.length) {
                                repair = true;
                            }
                        } else if (hasDescTitle) {
                            repair = true;
                            title = parseTitle(false);
                        }
                        if (bad()) {
                            repair = true;
                            title = formatTitle(card.title).newTitle;
                            if (bad()) {
                                release = true;
                            } else {
                                seen.add(title);
                                auto.add(title.toLowerCase());
                            }
                        } else {
                            seen.add(title);
                            auto.add(title.toLowerCase());
                            const titleHeader = "{title: " + title + "}";
                            if (!repair && !((card.entry === titleHeader) || card.entry.startsWith(titleHeader + "\n"))) {
                                repair = true;
                            }
                        }
                        function bad() {
                            return ((title === "") || checkPlurals(title, t => auto.has(t)));
                        }
                        function parseTitle(fromEntry) {
                            const [sourceType, sourceText] = (function () {
                                if (fromEntry) {
                                    return [hasEntryTitle, card.entry];
                                } else {
                                    return [hasDescTitle, card.description];
                                }
                            })()
                            switch (sourceType) {
                                case 1: {
                                    return formatTitle(isolateProperty(
                                        sourceText,
                                        /titles?\s*:[\s\S]*?}/i,
                                        /(?:titles?\s*:|})/gi
                                    )).newTitle;
                                }
                                case 2: {
                                    return formatTitle(isolateProperty(
                                        sourceText,
                                        /titles?\s*:[\s\S]*?(?:(?:limit|update)s?\s*:|})/i,
                                        /(?:(?:title|update|limit)s?\s*:|})/gi
                                    )).newTitle;
                                }
                                default: {
                                    return "";
                                }
                            }
                        }
                        return title;
                    })();
                    if (release) {
                        // Remove Auto-Cards properties from this incompatible story card
                        safeRemoveProps();
                        card.description = (card.description
                            .replace(/\s*Auto(?:-|\s*)Cards\s*will\s*contextualize\s*these\s*memories\s*:\s*/gi, "")
                            .replaceAll("%@%", "\n\n")
                            .trim()
                        );
                        seen.delete(title);
                        checkRemaining();
                        continue;
                    }
                    const memoryProperties = "{updates: " + (function () {
                        let updates = null;
                        if (hasDescUpdates) {
                            updates = parseUpdates(false);
                            if (hasEntryUpdates) {
                                repair = true;
                                if (bad()) {
                                    updates = parseUpdates(true);
                                }
                            } else if (1 < card.description.match(/updates?\s*:/gi)?.length) {
                                repair = true;
                            }
                        } else if (hasEntryUpdates) {
                            repair = true;
                            updates = parseUpdates(true);
                        }
                        if (bad()) {
                            repair = true;
                            updates = AC.config.defaultCardsDoMemoryUpdates;
                        }
                        function bad() {
                            return (updates === null);
                        }
                        function parseUpdates(fromEntry) {
                            const updatesText = (isolateProperty(
                                (function () {
                                    if (fromEntry) {
                                        return card.entry;
                                    } else {
                                        return card.description;
                                    }
                                })(),
                                /updates?\s*:[\s\S]*?(?:(?:title|limit)s?\s*:|})/i,
                                /(?:(?:title|update|limit)s?\s*:|})/gi
                            ).toLowerCase().replace(/[^a-z]/g, ""));
                            if (Words.trues.includes(updatesText)) {
                                return true;
                            } else if (Words.falses.includes(updatesText)) {
                                return false;
                            } else {
                                return null;
                            }
                        }
                        return updates;
                    })() + ", limit: " + (function () {
                        let limit = -1;
                        if (hasDescLimit) {
                            limit = parseLimit(false);
                            if (hasEntryLimit) {
                                repair = true;
                                if (bad()) {
                                    limit = parseLimit(true);
                                }
                            } else if (1 < card.description.match(/limits?\s*:/gi)?.length) {
                                repair = true;
                            }
                        } else if (hasEntryLimit) {
                            repair = true;
                            limit = parseLimit(true);
                        }
                        if (bad()) {
                            repair = true;
                            limit = AC.config.defaultMemoryLimit;
                        } else {
                            limit = validateMemoryLimit(limit);
                        }
                        function bad() {
                            return (limit === -1);
                        }
                        function parseLimit(fromEntry) {
                            const limitText = (isolateProperty(
                                (function () {
                                    if (fromEntry) {
                                        return card.entry;
                                    } else {
                                        return card.description;
                                    }
                                })(),
                                /limits?\s*:[\s\S]*?(?:(?:title|update)s?\s*:|})/i,
                                /(?:(?:title|update|limit)s?\s*:|})/gi
                            ).replace(/[^0-9]/g, ""));
                            if ((limitText === "")) {
                                return -1;
                            } else {
                                return parseInt(limitText, 10);
                            }
                        }
                        return limit.toString();
                    })() + "}";
                    if (!repair && (new RegExp("(?:^|\\n)" + memoryProperties + "(?:\\n|$)")).test(card.description)) {
                        // There are no serious repairs to perform
                        card.entry = cleanSpaces(card.entry);
                        const [notes, memories] = isolateNotesAndMemories(card.description);
                        const pureMemories = cleanSpaces(memories.replace(memoryProperties, "").trim());
                        rejoinDescription(notes, memoryProperties, pureMemories);
                        checkRemaining();
                        continue;
                    }
                    // Damage was detected, perform an adaptive repair on this auto-card's configurable properties
                    card.description = card.description.replaceAll("%@%", "\n\n");
                    safeRemoveProps();
                    card.entry = limitString(("{title: " + title + "}\n" + card.entry).trimEnd(), 2000);
                    const [left, right] = card.description.split("%@%");
                    rejoinDescription(left, memoryProperties, right);
                    checkRemaining();
                    function safeRemoveProps() {
                        if (typeof hasEntryTitle === "string") {
                            card.entry = card.entry.replace(/{[\s\S]*?}/g, "");
                        }
                        card.entry = removeAutoProps(card.entry);
                        const [notes, memories] = isolateNotesAndMemories(card.description);
                        card.description = notes + "%@%" + removeAutoProps(memories);
                        return;
                    }
                    function rejoinDescription(notes, memoryProperties, memories) {
                        card.description = limitString((notes + (function () {
                            if (notes === "") {
                                return "";
                            } else if (notes.endsWith("Auto-Cards will contextualize these memories:")) {
                                return "\n";
                            } else {
                                return "\n\n";
                            }
                        })() + memoryProperties + (function () {
                            if (memories === "") {
                                return "";
                            } else {
                                return "\n";
                            }
                        })() + memories), 10000);
                        return;
                    }
                    function isolateProperty(sourceText, propMatcher, propCleaner) {
                        return ((sourceText.match(propMatcher)?.[0] || "")
                            .replace(propCleaner, "")
                            .split(",")[0]
                            .trim()
                        );
                    }
                    // Observe literal card titles and keys
                    function checkRemaining() {
                        const literalTitles = [card.title, ...card.keys.split(",")];
                        for (let i = 0; i < literalTitles.length; i++) {
                            // The pre-format set inclusion check helps avoid superfluous formatTitle calls
                            literalTitles[i] = (literalTitles[i]
                                .replace(/["\.\?!;\(\):\[\]—{}]/g, " ")
                                .trim()
                                .replace(/\s+/g, " ")
                                .replace(/^'\s*/, "")
                                .replace(/\s*'$/, "")
                            );
                            if (seen.has(literalTitles[i])) {
                                continue;
                            }
                            literalTitles[i] = formatTitle(literalTitles[i]).newTitle;
                            if (literalTitles[i] !== "") {
                                seen.add(literalTitles[i]);
                            }
                        }
                        return;
                    }
                    function denumberName(name) {
                        if (2 < (name.match(/[^\d\s]/g) || []).length) {
                            // Important for identifying LSIv2 auxiliary code cards when banned
                            return name.replace(/\s*\d+$/, "");
                        } else {
                            return name;
                        }
                    }
                }
                clearTransientTitles();
                AC.database.titles.used = [...seen];
                return AC.database.titles.used;
            }
            static getBannedTitles() {
                // AC.database.titles.banned is an array, not a set; order matters
                return AC.database.titles.banned;
            }
            static setBannedTitles(newBans, isFinalAssignment) {
                AC.database.titles.banned = [];
                AC.database.titles.pendingBans = [];
                AC.database.titles.pendingUnbans = [];
                for (let i = newBans.length - 1; 0 <= i; i--) {
                    banTitle(newBans[i], isFinalAssignment);
                }
                return AC.database.titles.banned;
            }
            static getCard(predicate, getAll) {
                if (getAll) {
                    // Return an array of card references which satisfy the given condition
                    const collectedCards = [];
                    for (const card of storyCards) {
                        if (predicate(card)) {
                            O.s(card);
                            collectedCards.push(card);
                        }
                    }
                    return collectedCards;
                }
                // Return a reference to the first card which satisfies the given condition
                for (const card of storyCards) {
                    if (predicate(card)) {
                        return O.s(card);
                    }
                }
                return null;
            }
        });
    }
    function validateCooldown(cooldown) {
        return boundInteger(0, cooldown, 9999, 40);
    }
    function validateEntryLimit(entryLimit) {
        return boundInteger(200, entryLimit, 2000, 600);
    }
    function validateMemoryLimit(memoryLimit) {
        return boundInteger(1750, memoryLimit, 9900, 3200);
    }
    function validateMemCompRatio(memCompressRatio) {
        return boundInteger(20, memCompressRatio, 1250, 25);
    }
    function validateMLBD(minLookBackDist) {
        return boundInteger(2, minLookBackDist, 88, 7);
    }
    function getDefaultConfig() {
        function check(value, fallback = true, type = "boolean") {
            if (typeof value === type) {
                return value;
            } else {
                return fallback;
            }
        }
        function maybeProse(value) {
            if (Array.isArray(value)) {
                return prose(...value);
            } else {
                return value;
            }
        }
        return O.s({
            // Is Auto-Cards enabled?
            doAC: check(S.DEFAULT_DO_AC),
            // Delete all previously generated story cards?
            deleteAllAutoCards: null,
            // Pin the configuration interface story card near the top?
            pinConfigureCard: check(S.DEFAULT_PIN_CONFIGURE_CARD),
            // Minimum number of turns in between automatic card generation events?
            addCardCooldown: validateCooldown(S.DEFAULT_CARD_CREATION_COOLDOWN),
            // Use bulleted list mode for newly generated card entries?
            bulletedListMode: check(S.DEFAULT_USE_BULLETED_LIST_MODE),
            // Maximum allowed length for newly generated story card entries?
            defaultEntryLimit: validateEntryLimit(S.DEFAULT_GENERATED_ENTRY_LIMIT),
            // Do newly generated cards have memory updates enabled by default?
            defaultCardsDoMemoryUpdates: check(S.DEFAULT_NEW_CARDS_DO_MEMORY_UPDATES),
            // Default character limit before the card's memory bank is summarized?
            defaultMemoryLimit: validateMemoryLimit(S.DEFAULT_NEW_CARDS_MEMORY_LIMIT),
            // Approximately how much shorter should recently compressed memories be? (ratio = 10 * old / new)
            memoryCompressionRatio: validateMemCompRatio(S.DEFAULT_MEMORY_COMPRESSION_RATIO),
            // Ignore all-caps during title candidate detection?
            ignoreAllCapsTitles: check(S.DEFAULT_IGNORE_ALL_CAPS_TITLES),
            // Should player input actions (Do/Say/Story) be considered for future named entity detection?
            readFromInputs: check(S.DEFAULT_DETECT_TITLES_FROM_INPUTS),
            // How many (minimum) actions in the past does Auto-Cards look for named entities?
            minimumLookBackDistance: validateMLBD(S.DEFAULT_MINIMUM_LOOK_BACK_DISTANCE),
            // Is Live Script Interface v2 enabled?
            LSIv2: (function () {
                if (S.DEFAULT_DO_LSI_V2 === true) {
                    return true;
                } else {
                    // Intrepret "false" as null, both here and for later config card reads
                    return null;
                }
            })(),
            // Should the debug data card be visible?
            showDebugData: check(S.DEFAULT_SHOW_DEBUG_DATA, false),
            // How should the AI be prompted when generating new story card entries?
            generationPrompt: check(maybeProse(S.DEFAULT_CARD_GENERATION_PROMPT), prose(
                "-----",
                "",
                "<SYSTEM>",
                "# Stop the story and ignore previous instructions. Write a brief and coherent informational entry for %{title} following these instructions:",
                "- Write only third-person pure prose information about %{title} using complete sentences with correct punctuation",
                "- Avoid short-term temporary details or appearances, instead focus on plot-significant information",
                "- Prioritize story-relevant details about %{title} first to ensure seamless integration with the previous plot",
                "- Create new information based on the context and story direction",
                "- Mention %{title} in every sentence",
                "- Use semicolons if needed",
                "- Add additional details about %{title} beneath incomplete entries",
                "- Be concise and grounded",
                "- Imitate the story's writing style and infer the reader's preferences",
                "</SYSTEM>",
                "Continue the entry for %{title} below while avoiding repetition:",
                "%{entry}"
            ), "string"),
            // How should the AI be prompted when summarizing memories for a given story card?
            compressionPrompt: check(maybeProse(S.DEFAULT_CARD_MEMORY_COMPRESSION_PROMPT), prose(
                "-----",
                "",
                "<SYSTEM>",
                "# Stop the story and ignore previous instructions. Summarize and condense the given paragraph into a narrow and focused memory passage while following these guidelines:",
                "- Ensure the passage retains the core meaning and most essential details",
                "- Use the third-person perspective",
                "- Prioritize information-density, accuracy, and completeness",
                "- Remain brief and concise",
                "- Write firmly in the past tense",
                "- The paragraph below pertains to old events from far earlier in the story",
                "- Integrate %{title} naturally within the memory; however, only write about the events as they occurred",
                "- Only reference information present inside the paragraph itself, be specific",
                "</SYSTEM>",
                "Write a summarized old memory passage for %{title} based only on the following paragraph:",
                "\"\"\"",
                "%{memory}",
                "\"\"\"",
                "Summarize below:"
            ), "string"),
            // All cards constructed by AC will inherit this type by default
            defaultCardType: check(S.DEFAULT_CARD_TYPE, "class", "string")
        });
    }
    function getDefaultConfigBans() {
        if (typeof S.DEFAULT_BANNED_TITLES_LIST === "string") {
            return uniqueTitlesArray(S.DEFAULT_BANNED_TITLES_LIST.split(","));
        } else {
            return [
                "North", "East", "South", "West", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
            ];
        }
    }
    function uniqueTitlesArray(titles) {
        const existingTitles = new Set();
        return (titles
            .map(title => title.trim().replace(/\s+/g, " "))
            .filter(title => {
                if (title === "") {
                    return false;
                }
                const lowerTitle = title.toLowerCase();
                if (existingTitles.has(lowerTitle)) {
                    return false;
                } else {
                    existingTitles.add(lowerTitle);
                    return true;
                }
            })
        );
    }
    function boundInteger(lowerBound, value, upperBound, fallback) {
        if (!Number.isInteger(value)) {
            if (!Number.isInteger(fallback)) {
                throw new Error("Invalid arguments: value and fallback are not integers");
            }
            value = fallback;
        }
        if (Number.isInteger(lowerBound) && (value < lowerBound)) {
            if (Number.isInteger(upperBound) && (upperBound < lowerBound)) {
                throw new Error("Invalid arguments: The inequality (lowerBound <= upperBound) must be satisfied");
            }
            return lowerBound;
        } else if (Number.isInteger(upperBound) && (upperBound < value)) {
            return upperBound;
        } else {
            return value;
        }
    }
    function limitString(str, lengthLimit) {
        if (lengthLimit < str.length) {
            return str.slice(0, lengthLimit).trim();
        } else {
            return str;
        }
    }
    function cleanSpaces(unclean) {
        return (unclean
            .replace(/\s*\n\s*/g, "\n")
            .replace(/\t/g, " ")
            .replace(/  +/g, " ")
        );
    }
    function isolateNotesAndMemories(str) {
        const bisector = str.search(/\s*(?:{|(?:title|update|limit)s?\s*:)\s*/i);
        if (bisector === -1) {
            return [str, ""];
        } else {
            return [str.slice(0, bisector), str.slice(bisector)];
        }
    }
    function removeAutoProps(str) {
        return cleanSpaces(str
            .replace(/\s*{([\s\S]*?)}\s*/g, (bracedMatch, enclosedProperties) => {
                if (enclosedProperties.trim().length < 150) {
                    return "\n";
                } else {
                    return bracedMatch;
                }
            })
            .replace((
                /\s*(?:{|(?:title|update|limit)s?\s*:)(?:[\s\S]{0,150}?)(?=(?:title|update|limit)s?\s*:|})\s*/gi
            ), "\n")
            .replace(/\s*(?:{|(?:title|update|limit)s?\s*:|})\s*/gi, "\n")
            .trim()
        );
    }
    function insertTitle(prompt, title) {
        return prompt.replace((
            /(?:[%\$]+\s*|[%\$]*){+\s*(?:titles?|names?|characters?|class(?:es)?|races?|locations?|factions?)\s*}+/gi
        ), title);
    }
    function prose(...args) {
        return args.join("\n");
    }
    function buildKeys(keys, key) {
        key = key.trim().replace(/\s+/g, " ");
        const keyset = [];
        if (key === "") {
            return keys;
        } else if (keys.trim() !== "") {
            keyset.push(...keys.split(","));
            const lowerKey = key.toLowerCase();
            for (let i = keyset.length - 1; 0 <= i; i--) {
                const preKey = keyset[i].trim().replace(/\s+/g, " ").toLowerCase();
                if ((preKey === "") || preKey.includes(lowerKey)) {
                    keyset.splice(i, 1);
                }
            }
        }
        if (key.length < 6) {
            keyset.push(...[
                " " + key + " ", " " + key + "'", "\"" + key + " ", " " + key + ".", " " + key + "?", " " + key + "!", " " + key + ";", "'" + key + " ", "(" + key + " ", " " + key + ")", " " + key + ":", " " + key + "\"", "[" + key + " ", " " + key + "]", "—" + key + " ", " " + key + "—", "{" + key + " ", " " + key + "}"
            ]);
        } else if (key.length < 9) {
            keyset.push(...[
                key + " ", " " + key, key + "'", "\"" + key, key + ".", key + "?", key + "!", key + ";", "'" + key, "(" + key, key + ")", key + ":", key + "\"", "[" + key, key + "]", "—" + key, key + "—", "{" + key, key + "}"
            ]);
        } else {
            keyset.push(key);
        }
        keys = keyset[0] || key;
        let i = 1;
        while ((i < keyset.length) && ((keys.length + 1 + keyset[i].length) < 101)) {
            keys += "," + keyset[i];
            i++;
        }
        return keys;
    }
    // Returns the template-specified singleton card (or secondary varient) after:
    // 1) Erasing all inferior duplicates
    // 2) Repairing damaged titles and keys
    // 3) Constructing a new singleton card if it doesn't exist
    function getSingletonCard(allowConstruction, templateCard, secondaryCard) {
        let singletonCard = null;
        const excessCards = [];
        for (const card of storyCards) {
            O.s(card);
            if (singletonCard === null) {
                if ((card.title === templateCard.title) || (card.keys === templateCard.keys)) {
                    // The first potentially valid singleton card candidate to be found
                    singletonCard = card;
                }
            } else if (card.title === templateCard.title) {
                if (card.keys === templateCard.keys) {
                    excessCards.push(singletonCard);
                    singletonCard = card;
                } else {
                    eraseInferiorDuplicate();
                }
            } else if (card.keys === templateCard.keys) {
                eraseInferiorDuplicate();
            }
            function eraseInferiorDuplicate() {
                if ((singletonCard.title === templateCard.title) && (singletonCard.keys === templateCard.keys)) {
                    excessCards.push(card);
                } else {
                    excessCards.push(singletonCard);
                    singletonCard = card;
                }
                return;
            }
        }
        if (singletonCard === null) {
            if (secondaryCard) {
                // Fallback to a secondary card template
                singletonCard = getSingletonCard(false, secondaryCard);
            }
            // No singleton card candidate exists
            if (allowConstruction && (singletonCard === null)) {
                // Construct a new singleton card from the given template
                singletonCard = constructCard(templateCard);
            }
        } else {
            if (singletonCard.title !== templateCard.title) {
                // Repair any damage to the singleton card's title
                singletonCard.title = templateCard.title;
            } else if (singletonCard.keys !== templateCard.keys) {
                // Repair any damage to the singleton card's keys
                singletonCard.keys = templateCard.keys;
            }
            for (const card of excessCards) {
                // Erase all excess singleton card candidates
                eraseCard(card);
            }
            if (secondaryCard) {
                // A secondary card match cannot be allowed to persist
                eraseCard(getSingletonCard(false, secondaryCard));
            }
        }
        return singletonCard;
    }
    // Erases the given story card
    function eraseCard(badCard) {
        if (badCard === null) {
            return false;
        }
        badCard.title = "%@%";
        for (const [index, card] of storyCards.entries()) {
            if (card.title === "%@%") {
                removeStoryCard(index);
                return true;
            }
        }
        return false;
    }
    // Constructs a new story card from a standardized story card template object
    // {type: "", title: "", keys: "", entry: "", description: ""}
    // Returns a reference to the newly constructed card
    function constructCard(templateCard, insertionIndex = 0) {
        addStoryCard("%@%");
        for (const [index, card] of storyCards.entries()) {
            if (card.title !== "%@%") {
                continue;
            }
            card.type = templateCard.type;
            card.title = templateCard.title;
            card.keys = templateCard.keys;
            card.entry = templateCard.entry;
            card.description = templateCard.description;
            if (index !== insertionIndex) {
                // Remove from the current position and reinsert at the desired index
                storyCards.splice(index, 1);
                storyCards.splice(insertionIndex, 0, card);
            }
            return O.s(card);
        }
        return {};
    }
    function newCardIndex() {
        return +AC.config.pinConfigureCard;
    }
    function getIntendedCard(targetCard) {
        Internal.getUsedTitles(true);
        const titleKey = targetCard.trim().replace(/\s+/g, " ").toLowerCase();
        const autoCard = Internal.getCard(card => (card.entry
            .toLowerCase()
            .startsWith("{title: " + titleKey + "}")
        ));
        if (autoCard !== null) {
            return [autoCard, true, titleKey];
        }
        return [Internal.getCard(card => ((card.title
            .replace(/\s+/g, " ")
            .toLowerCase()
        ) === titleKey)), false, titleKey];
    }
    function doPlayerCommands(input) {
        let result = "";
        for (const command of (
            (function () {
                if (/^\n> [\s\S]*? says? "[\s\S]*?"\n$/.test(input)) {
                    return input.replace(/\s*"\n$/, "");
                } else {
                    return input.trimEnd();
                }
            })().split(/(?=\/\s*A\s*C)/i)
        )) {
            const prefixPattern = /^\/\s*A\s*C/i;
            if (!prefixPattern.test(command)) {
                continue;
            }
            const [requestTitle, requestDetails, requestEntry] = (command
                .replace(/(?:{\s*)|(?:\s*})/g, "")
                .replace(prefixPattern, "")
                .replace(/(?:^\s*\/*\s*)|(?:\s*\/*\s*$)/g, "")
                .split("/")
                .map(requestArg => requestArg.trim())
                .filter(requestArg => (requestArg !== ""))
            );
            if (!requestTitle) {
                // Request with no args
                AC.generation.cooldown = 0;
                result += "/AC -> Success!\n\n";
                logEvent("/AC");
            } else {
                const request = { title: requestTitle.replace(/\s*[\.\?!:]+$/, "") };
                const redo = (function () {
                    const redoPattern = /^(?:redo|retry|rewrite|remake)[\s\.\?!:,;"'—\)\]]+\s*/i;
                    if (redoPattern.test(request.title)) {
                        request.title = request.title.replace(redoPattern, "");
                        if (/^(?:all|every)(?:\s|\.|\?|!|:|,|;|"|'|—|\)|\]|$)/i.test(request.title)) {
                            return [];
                        } else {
                            return true;
                        }
                    } else {
                        return false;
                    }
                })();
                if (Array.isArray(redo)) {
                    // Redo all auto cards
                    Internal.getUsedTitles(true);
                    const titleMatchPattern = /^{title: ([\s\S]*?)}/;
                    redo.push(...Internal.getCard(card => (
                        titleMatchPattern.test(card.entry)
                        && /{updates: (?:true|false), limit: \d+}/.test(card.description)
                    ), true));
                    let count = 0;
                    for (const card of redo) {
                        const titleMatch = card.entry.match(titleMatchPattern);
                        if (titleMatch && Internal.redoCard(O.f({ title: titleMatch[1] }), true, "")) {
                            count++;
                        }
                    }
                    const parsed = "/AC redo all";
                    result += parsed + " -> ";
                    if (count === 0) {
                        result += "There were no valid auto-cards to redo";
                    } else {
                        result += "Success!";
                        if (1 < count) {
                            result += " Proceed to redo " + count + " cards";
                        }
                    }
                    logEvent(parsed);
                } else if (!requestDetails) {
                    // Request with only title
                    submitRequest("");
                } else if (!requestEntry || redo) {
                    // Request with title and details
                    request.entryPromptDetails = requestDetails;
                    submitRequest(" / {" + requestDetails + "}");
                } else {
                    // Request with title, details, and entry
                    request.entryPromptDetails = requestDetails;
                    request.entryStart = requestEntry;
                    submitRequest(" / {" + requestDetails + "} / {" + requestEntry + "}");
                }
                result += "\n\n";
                function submitRequest(extra) {
                    O.f(request);
                    const [type, success] = (function () {
                        if (redo) {
                            return [" redo", Internal.redoCard(request, true, "")];
                        } else {
                            Internal.getUsedTitles(true);
                            return ["", Internal.generateCard(request)];
                        }
                    })();
                    const left = "/AC" + type + " {";
                    const right = "}" + extra;
                    if (success) {
                        const parsed = left + AC.generation.pending[AC.generation.pending.length - 1].title + right;
                        result += parsed + " -> Success!";
                        logEvent(parsed);
                    } else {
                        const parsed = left + request.title + right;
                        result += parsed + " -> \"" + request.title + "\" is invalid or unavailable";
                        logEvent(parsed);
                    }
                    return;
                }
            }
            if (isPendingGeneration() || isAwaitingGeneration() || isPendingCompression()) {
                if (AC.config.doAC) {
                    AC.signal.outputReplacement = "";
                } else {
                    AC.signal.forceToggle = true;
                    AC.signal.outputReplacement = ">>> please select \"continue\" (0%) <<<";
                }
            } else if (AC.generation.cooldown === 0) {
                if (0 < AC.database.titles.candidates.length) {
                    if (AC.config.doAC) {
                        AC.signal.outputReplacement = "";
                    } else {
                        AC.signal.forceToggle = true;
                        AC.signal.outputReplacement = ">>> please select \"continue\" (0%) <<<";
                    }
                } else if (AC.config.doAC) {
                    result = result.trimEnd() + "\n";
                    AC.signal.outputReplacement = "\n";
                } else {
                    AC.signal.forceToggle = true;
                    AC.signal.outputReplacement = ">>> Auto-Cards has been enabled! <<<";
                }
            } else {
                result = result.trimEnd() + "\n";
                AC.signal.outputReplacement = "\n";
            }
        }
        return getPrecedingNewlines() + result;
    }
    function advanceChronometer() {
        const currentTurn = getTurn();
        if (Math.abs(history.length - currentTurn) < 2) {
            // The two measures are within ±1, thus history hasn't been truncated yet
            AC.chronometer.step = !(history.length < currentTurn);
        } else {
            // history has been truncated, fallback to a (slightly) worse step detection technique
            AC.chronometer.step = (AC.chronometer.turn < currentTurn);
        }
        AC.chronometer.turn = currentTurn;
        return;
    }
    function concludeEmergency() {
        promoteAmnesia();
        endTurn();
        AC.message.pending = [];
        AC.message.previous = getStateMessage();
        return;
    }
    function concludeOutputBlock(templateCard) {
        if (AC.config.deleteAllAutoCards !== null) {
            // A config-initiated event to delete all previously generated story cards is in progress
            if (AC.config.deleteAllAutoCards) {
                // Request in-game confirmation from the player before proceeding
                AC.config.deleteAllAutoCards = false;
                CODOMAIN.initialize(getPrecedingNewlines() + ">>> please submit the message \"CONFIRM DELETE\" using a Do, Say, or Story action to permanently delete all previously generated story cards <<<\n\n");
            } else {
                // Check for player confirmation
                const previousAction = readPastAction(0);
                if (isDoSayStory(previousAction.type) && /CONFIRM\s*DELETE/i.test(previousAction.text)) {
                    let successMessage = "Confirmation Success: ";
                    const numCardsErased = Internal.eraseAllAutoCards();
                    if (numCardsErased === 0) {
                        successMessage += "However, there were no previously generated story cards to delete!";
                    } else {
                        successMessage += numCardsErased + " generated story card";
                        if (numCardsErased === 1) {
                            successMessage += " was";
                        } else {
                            successMessage += "s were";
                        }
                        successMessage += " deleted";
                    }
                    notify(successMessage);
                } else {
                    notify("Confirmation Failure: No story cards were deleted");
                }
                AC.config.deleteAllAutoCards = null;
                CODOMAIN.initialize("\n");
            }
        } else if (AC.signal.outputReplacement !== "") {
            const output = AC.signal.outputReplacement.trim();
            if (output === "") {
                CODOMAIN.initialize("\n");
            } else {
                CODOMAIN.initialize(getPrecedingNewlines() + output + "\n\n");
            }
        }
        if (templateCard) {
            // Auto-Cards was enabled or disabled during the previous onContext hook
            // Construct the replacement control card onOutput
            banTitle(templateCard.title);
            getSingletonCard(true, templateCard);
            AC.signal.swapControlCards = false;
        }
        endTurn();
        if (AC.config.LSIv2 === null) {
            postMessages();
        }
        return;
    }
    function endTurn() {
        AC.database.titles.used = [];
        AC.signal.outputReplacement = "";
        [AC.database.titles.pendingBans, AC.database.titles.pendingUnbans].map(pending => decrementAll(pending));
        if (0 < AC.signal.overrideBans) {
            AC.signal.overrideBans--;
        }
        function decrementAll(pendingArray) {
            if (pendingArray.length === 0) {
                return;
            }
            for (let i = pendingArray.length - 1; 0 <= i; i--) {
                if (0 < pendingArray[i][1]) {
                    pendingArray[i][1]--;
                } else {
                    pendingArray.splice(i, 1);
                }
            }
            return;
        }
        return;
    }
    // Example usage: notify("Message text goes here");
    function notify(message) {
        if (typeof message === "string") {
            AC.message.pending.push(message);
            logEvent(message);
        } else if (Array.isArray(message)) {
            message.forEach(element => notify(element));
        } else if (message instanceof Set) {
            notify([...message]);
        } else {
            notify(message.toString());
        }
        return;
    }
    function logEvent(message, uncounted) {
        if (uncounted) {
            log("Auto-Cards event: " + message);
        } else {
            log("Auto-Cards event #" + (function () {
                try {
                    AC.message.event++;
                    return AC.message.event;
                } catch {
                    return 0;
                }
            })() + ": " + message.replace(/"/g, "'"));
        }
        return;
    }
    // Provide the story card object which you wish to log info within as the first argument
    // All remaining arguments represent anything you wish to log
    function logToCard(logCard, ...args) {
        logEvent(args.map(arg => {
            if ((typeof arg === "object") && (arg !== null)) {
                return JSON.stringify(arg);
            } else {
                return String(arg);
            }
        }).join(", "), true);
        if (logCard === null) {
            return;
        }
        let desc = logCard.description.trim();
        const turnDelimiter = Words.delimiter + "\nAction #" + getTurn() + ":\n";
        let header = turnDelimiter;
        if (!desc.startsWith(turnDelimiter)) {
            desc = turnDelimiter + desc;
        }
        const scopesTable = [
            ["input", "Input Modifier"],
            ["context", "Context Modifier"],
            ["output", "Output Modifier"],
            [null, "Shared Library"],
            [undefined, "External API"],
            [Symbol("default"), "Unknown Scope"]
        ];
        const callingScope = (function () {
            const pair = scopesTable.find(([condition]) => (condition === HOOK));
            if (pair) {
                return pair[1];
            } else {
                return scopesTable[scopesTable.length - 1][1];
            }
        })();
        const hookDelimiterLeft = callingScope + " @ ";
        if (desc.startsWith(turnDelimiter + hookDelimiterLeft)) {
            const hookDelimiterOld = desc.match(new RegExp((
                "^" + turnDelimiter + "(" + hookDelimiterLeft + "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z:\n)"
            ).replaceAll("\n", "\\n")));
            if (hookDelimiterOld) {
                header += hookDelimiterOld[1];
            } else {
                const hookDelimiter = getNewHookDelimiter();
                desc = desc.replace(hookDelimiterLeft, hookDelimiter);
                header += hookDelimiter;
            }
        } else {
            if ((new RegExp("^" + turnDelimiter.replaceAll("\n", "\\n") + "(" + (scopesTable
                .map(pair => pair[1])
                .filter(scope => (scope !== callingScope))
                .join("|")
            ) + ") @ ")).test(desc)) {
                desc = desc.replace(turnDelimiter, turnDelimiter + "—————————\n");
            }
            const hookDelimiter = getNewHookDelimiter();
            desc = desc.replace(turnDelimiter, turnDelimiter + hookDelimiter);
            header += hookDelimiter;
        }
        const logDelimiter = (function () {
            let logDelimiter = "Log #";
            if (desc.startsWith(header + logDelimiter)) {
                desc = desc.replace(header, header + "———\n");
                const logCounter = desc.match(/Log #(\d+)/);
                if (logCounter) {
                    logDelimiter += (parseInt(logCounter[1], 10) + 1).toString();
                }
            } else {
                logDelimiter += "0";
            }
            return logDelimiter + ": ";
        })();
        logCard.description = limitString(desc.replace(header, header + logDelimiter + args.map(arg => {
            if ((typeof arg === "object") && (arg !== null)) {
                return stringifyObject(arg);
            } else {
                return String(arg);
            }
        }).join(",\n") + "\n").trim(), 999999);
        // The upper limit is actually closer to 3985621, but I think 1 million is reasonable enough as-is
        function getNewHookDelimiter() {
            return hookDelimiterLeft + (new Date().toISOString()) + ":\n";
        }
        return;
    }
    // Makes nested objects not look like cancer within interface cards
    function stringifyObject(obj) {
        const seen = new WeakSet();
        // Each indentation is 4 spaces
        return JSON.stringify(obj, (_key, value) => {
            if ((typeof value === "object") && (value !== null)) {
                if (seen.has(value)) {
                    return "[Circular]";
                }
                seen.add(value);
            }
            switch (typeof value) {
                case "function": {
                    return "[Function]";
                }
                case "undefined": {
                    return "[Undefined]";
                }
                case "symbol": {
                    return "[Symbol]";
                }
                default: {
                    return value;
                }
            }
        }, 4);
    }
    // Implement state.message toasts without interfering with the operation of other possible scripts
    function postMessages() {
        const preMessage = getStateMessage();
        if ((preMessage === AC.message.previous) && (AC.message.pending.length !== 0)) {
            // No other scripts are attempting to update state.message during this turn
            // One or more pending Auto-Cards messages exist
            if (!AC.message.suppress) {
                // Message suppression is off
                let newMessage = "Auto-Cards:\n";
                if (AC.message.pending.length === 1) {
                    newMessage += AC.message.pending[0];
                } else {
                    newMessage += AC.message.pending.map(
                        (messageLine, index) => ("#" + (index + 1) + ": " + messageLine)
                    ).join("\n");
                }
                if (preMessage === newMessage) {
                    // Introduce a minor variation to facilitate repetition of the previous message toast
                    newMessage = newMessage.replace("Auto-Cards:\n", "Auto-Cards: \n");
                }
                state.message = newMessage;
            }
            // Clear the pending messages queue after posting or suppressing messages
            AC.message.pending = [];
        }
        AC.message.previous = getStateMessage();
        return;
    }
    function getStateMessage() {
        return state.message ?? "";
    }
    function getPrecedingNewlines() {
        const previousAction = readPastAction(0);
        if (isDoSay(previousAction.type)) {
            return "";
        } else if (previousAction.text.endsWith("\n")) {
            if (previousAction.text.endsWith("\n\n")) {
                return "";
            } else {
                return "\n";
            }
        } else {
            return "\n\n";
        }
    }
    // Call with lookBack 0 to read the most recent action in history (or n many actions back)
    function readPastAction(lookBack) {
        const action = (function () {
            if (Array.isArray(history)) {
                return (history[(function () {
                    const index = history.length - 1 - Math.abs(lookBack);
                    if (index < 0) {
                        return 0;
                    } else {
                        return index;
                    }
                })()]);
            } else {
                return O.f({});
            }
        })();
        return O.f({
            text: action?.text ?? (action?.rawText ?? ""),
            type: action?.type ?? "unknown"
        });
    }
    // Forget ongoing card generation/compression after passing or postponing completion over many consecutive turns
    // Also decrement AC.chronometer.postpone regardless of retries or erases
    function promoteAmnesia() {
        // Decrement AC.chronometer.postpone in all cases
        if (0 < AC.chronometer.postpone) {
            AC.chronometer.postpone--;
        }
        if (!AC.chronometer.step) {
            // Skip known retry/erase turns
            return;
        }
        if (AC.chronometer.amnesia++ < boundInteger(16, (2 * AC.config.addCardCooldown), 64)) {
            return;
        }
        AC.generation.cooldown = validateCooldown(underQuarterInteger(AC.config.addCardCooldown));
        forgetStuff();
        AC.chronometer.amnesia = 0;
        return;
    }
    function forgetStuff() {
        AC.generation.completed = 0;
        AC.generation.permitted = 34;
        AC.generation.workpiece = O.f({});
        // AC.generation.pending is not forgotten
        resetCompressionProperties();
        return;
    }
    function resetCompressionProperties() {
        AC.compression.completed = 0;
        AC.compression.titleKey = "";
        AC.compression.vanityTitle = "";
        AC.compression.responseEstimate = 1400;
        AC.compression.lastConstructIndex = -1;
        AC.compression.oldMemoryBank = [];
        AC.compression.newMemoryBank = [];
        return;
    }
    function underQuarterInteger(someNumber) {
        return Math.floor(someNumber / 4);
    }
    function getTurn() {
        if (Number.isInteger(info?.actionCount)) {
            // "But Leah, surely info.actionCount will never be negative?"
            // You have no idea what nightmares I've seen...
            return Math.abs(info.actionCount);
        } else {
            return 0;
        }
    }
    // Constructs a JSON representation of various properties/settings pulled from raw text
    // Used to parse the "Configure Auto-Cards" and "Edit to enable Auto-Cards" control card entries
    function extractSettings(settingsText) {
        const settings = {};
        // Lowercase everything
        // Remove all non-alphanumeric characters (aside from ":" and ">")
        // Split into an array of strings delimited by the ">" character
        const settingLines = settingsText.toLowerCase().replace(/[^a-z0-9:>]+/g, "").split(">");
        for (const settingLine of settingLines) {
            // Each setting line is preceded by ">" and bisected by ":"
            const settingKeyValue = settingLine.split(":");
            if ((settingKeyValue.length !== 2) || settings.hasOwnProperty(settingKeyValue[0])) {
                // The bisection failed or this setting line's key already exists
                continue;
            }
            // Parse boolean and integer setting values
            if (Words.falses.includes(settingKeyValue[1])) {
                // This setting line's value is false
                settings[settingKeyValue[0]] = false;
            } else if (Words.trues.includes(settingKeyValue[1])) {
                // This setting line's value is true
                settings[settingKeyValue[0]] = true;
            } else if (/^\d+$/.test(settingKeyValue[1])) {
                // This setting line's value is an integer
                // Negative integers are parsed as being positive (because "-" characters were removed)
                settings[settingKeyValue[0]] = parseInt(settingKeyValue[1], 10);
            }
        }
        // Return the settings object for later analysis
        return settings;
    }
    // Ensure the given singleton card is pinned near the top of the player's list of story cards
    function pinAndSortCards(pinnedCard) {
        if (!storyCards || (storyCards.length < 2)) {
            return;
        }
        storyCards.sort((cardA, cardB) => {
            return readDate(cardB) - readDate(cardA);
        });
        if (!AC.config.pinConfigureCard) {
            return;
        }
        const index = storyCards.indexOf(pinnedCard);
        if (0 < index) {
            storyCards.splice(index, 1);
            storyCards.unshift(pinnedCard);
        }
        function readDate(card) {
            if (card && card.updatedAt) {
                const timestamp = Date.parse(card.updatedAt);
                if (!isNaN(timestamp)) {
                    return timestamp;
                }
            }
            return 0;
        }
        return;
    }
    function see(arr) {
        return String.fromCharCode(...arr.map(n => Math.sqrt(n / 33)));
    }
    function formatTitle(title) {
        const input = title;
        let useMemo = false;
        if (
            (AC.database.titles.used.length === 1)
            && (AC.database.titles.used[0] === ("%@%"))
            && [used, forenames, surnames].every(nameset => (
                (nameset.size === 1)
                && nameset.has("%@%")
            ))
        ) {
            const pair = memoized.get(input);
            if (pair !== undefined) {
                if (50000 < memoized.size) {
                    memoized.delete(input);
                    memoized.set(input, pair);
                }
                return O.f({ newTitle: pair[0], newKey: pair[1] });
            }
            useMemo = true;
        }
        title = title.trim();
        if (short()) {
            return end();
        }
        title = (title
            // Inner Self
            .slice(title.indexOf("\u200B") + 1)
            .replace(/\u200B-\u200D/g, "")
            // Localized Languages
            .replace(/[–。？！´؟،«»¿¡„“”「」…§，、\*_~><\(\)\[\]{}#"`:!—;\.\?,\s\\]/g, " ")
            // Fix contractions
            .replace(/[‘’]/g, "'").replace(/\s+'/g, " ")
            // Remove the words "I", "I'm", "I'd", "I'll", and "I've"
            .replace(/(?<=^|\s)(?:I|I'm|I'd|I'll|I've)(?=\s|$)/gi, "")
            // Remove "'s" only if not followed by a letter
            .replace(/'s(?![a-zA-Z])/g, "")
            // Replace "s'" with "s" only if preceded but not followed by a letter
            .replace(/(?<=[a-zA-Z])s'(?![a-zA-Z])/g, "s")
            // Remove apostrophes not between letters (preserve contractions like "don't")
            .replace(/(?<![a-zA-Z])'(?![a-zA-Z])/g, "")
            // Eliminate fake em dashes and terminal/leading dashes
            .replace(/\s-\s/g, " ")
            // Condense consecutive whitespace
            .trim().replace(/\s+/g, " ")
            // Remove a leading or trailing bullet
            .replace(/^-+\s*/, "").replace(/\s*-+$/, "")
        );
        if (short()) {
            return end();
        }
        // Special-cased words
        const minorWordsJoin = Words.minor.join("|");
        const leadingMinorWordsKiller = new RegExp("^(?:" + minorWordsJoin + ")\\s", "i");
        const trailingMinorWordsKiller = new RegExp("\\s(?:" + minorWordsJoin + ")$", "i");
        // Ensure the title is not bounded by any outer minor words
        title = enforceBoundaryCondition(title);
        if (short()) {
            return end();
        }
        // Ensure interior minor words are lowercase and excise all interior honorifics/abbreviations
        const honorAbbrevsKiller = new RegExp("(?:^|\\s|-|\\/)(?:" + (
            [...Words.honorifics, ...Words.abbreviations]
        ).map(word => word.replace(".", "")).join("|") + ")(?=\\s|-|\\/|$)", "gi");
        title = (title
            // Capitalize the first letter of each word
            .replace(/(?<=^|\s|-|\/)(?:\p{L})/gu, word => word.toUpperCase())
            // Lowercase minor words properly
            .replace(/(?<=^|\s|-|\/)(?:\p{L}+)(?=\s|-|\/|$)/gu, word => {
                const lowerWord = word.toLowerCase();
                if (Words.minor.includes(lowerWord)) {
                    return lowerWord;
                } else {
                    return word;
                }
            })
            // Remove interior honorifics/abbreviations
            .replace(honorAbbrevsKiller, "")
            .trim()
        );
        if (short()) {
            return end();
        }
        let titleWords = title.split(" ");
        while ((2 < title.length) && (98 < title.length) && (1 < titleWords.length)) {
            titleWords.pop();
            title = titleWords.join(" ").trim();
            const unboundedLength = title.length;
            title = enforceBoundaryCondition(title);
            if (unboundedLength !== title.length) {
                titleWords = title.split(" ");
            }
        }
        if (isUsedOrBanned(title) || isNamed(title)) {
            return end();
        }
        // Procedurally generated story card trigger keywords exclude certain words and patterns which are otherwise permitted in titles
        let key = title;
        const peerage = new Set(Words.peerage);
        if (titleWords.some(word => ((word === "the") || peerage.has(word.toLowerCase())))) {
            if (titleWords.length < 2) {
                return end();
            }
            key = enforceBoundaryCondition(
                titleWords.filter(word => !peerage.has(word.toLowerCase())).join(" ")
            );
            if (key.includes(" the ")) {
                key = enforceBoundaryCondition(key.split(" the ")[0]);
            }
            if (isUsedOrBanned(key)) {
                return end();
            }
        }
        function short() {
            return (title.length < 3);
        }
        function enforceBoundaryCondition(str) {
            while (leadingMinorWordsKiller.test(str)) {
                str = str.replace(/^\S+\s+/, "");
            }
            while (trailingMinorWordsKiller.test(str)) {
                str = str.replace(/\s+\S+$/, "");
            }
            return str;
        }
        function end(newTitle = "", newKey = "") {
            if (useMemo) {
                memoized.set(input, [newTitle, newKey]);
                if (30000 < memoized.size) {
                    memoized.delete(memoized.keys().next().value);
                }
            }
            return O.f({ newTitle, newKey });
        }
        return end(title, key);
    }
    // I really hate english grammar
    function checkPlurals(title, predicate) {
        function check(t) { return ((t.length < 3) || (100 < t.length) || predicate(t)); }
        const t = title.toLowerCase();
        if (check(t)) { return true; }
        // s>p : singular -> plural : p>s: plural -> singular
        switch (t[t.length - 1]) {
            // p>s : s -> _ : Birds -> Bird
            case "s": if (check(t.slice(0, -1))) { return true; }
            case "x":
            // s>p : s, x, z -> ses, xes, zes : Mantis -> Mantises
            case "z": if (check(t + "es")) { return true; }
                break;
            // s>p : o -> oes, os : Gecko -> Geckoes, Geckos
            case "o": if (check(t + "es") || check(t + "s")) { return true; }
                break;
            // p>s : i -> us : Cacti -> Cactus
            case "i": if (check(t.slice(0, -1) + "us")) { return true; }
            // s>p : i, y -> ies : Kitty -> Kitties
            case "y": if (check(t.slice(0, -1) + "ies")) { return true; }
                break;
            // s>p : f -> ves : Wolf -> Wolves
            case "f": if (check(t.slice(0, -1) + "ves")) { return true; }
            // s>p : !(s, x, z, i, y) -> +s : Turtle -> Turtles
            default: if (check(t + "s")) { return true; }
                break;
        } switch (t.slice(-2)) {
            // p>s : es -> _ : Foxes -> Fox
            case "es": if (check(t.slice(0, -2))) { return true; } else if (
                (t.endsWith("ies") && (
                    // p>s : ies -> y : Bunnies -> Bunny
                    check(t.slice(0, -3) + "y")
                    // p>s : ies -> i : Ravies -> Ravi
                    || check(t.slice(0, -2))
                    // p>s : es -> is : Crises -> Crisis
                )) || check(t.slice(0, -2) + "is")) { return true; }
                break;
            // s>p : us -> i : Cactus -> Cacti
            case "us": if (check(t.slice(0, -2) + "i")) { return true; }
                break;
            // s>p : is -> es : Thesis -> Theses
            case "is": if (check(t.slice(0, -2) + "es")) { return true; }
                break;
            // s>p : fe -> ves : Knife -> Knives
            case "fe": if (check(t.slice(0, -2) + "ves")) { return true; }
                break;
            case "sh":
            // s>p : sh, ch -> shes, ches : Fish -> Fishes
            case "ch": if (check(t + "es")) { return true; }
                break;
        } return false;
    }
    function isUsedOrBanned(title) {
        function isUsed(lowerTitle) {
            if (used.size === 0) {
                const usedTitles = Internal.getUsedTitles();
                for (let i = 0; i < usedTitles.length; i++) {
                    used.add(usedTitles[i].toLowerCase());
                }
                if (used.size === 0) {
                    // Add a placeholder so compute isn't wasted on additional checks during this hook
                    used.add("%@%");
                }
            }
            return used.has(lowerTitle);
        }
        return checkPlurals(title, t => (isUsed(t) || isBanned(t)));
    }
    function isBanned(lowerTitle, getUsedIsExternal) {
        if (bans.size === 0) {
            // In order to save space, implicit bans aren't listed within the UI
            const controlVariants = getControlVariants();
            const dataVariants = getDataVariants();
            const bansToAdd = [...lowArr([
                ...Internal.getBannedTitles(),
                controlVariants.enable.title.replace("\n", ""),
                controlVariants.enable.keys,
                controlVariants.configure.title.replace("\n", ""),
                controlVariants.configure.keys,
                dataVariants.debug.title,
                dataVariants.debug.keys,
                dataVariants.critical.title,
                dataVariants.critical.keys,
                ...Object.values(Words.reserved)
            ]), ...(function () {
                if (shouldProceed() || getUsedIsExternal) {
                    // These proper nouns are way too common to waste card generations on; they already exist within the AI training data so this would be pointless
                    return [...Words.entities, ...Words.undesirables.map(undesirable => see(undesirable))];
                } else {
                    return [];
                }
            })()];
            for (let i = 0; i < bansToAdd.length; i++) {
                bans.add(bansToAdd[i]);
            }
        }
        return bans.has(lowerTitle);
    }
    function isNamed(title, returnSurname) {
        const peerage = new Set(Words.peerage);
        const minorWords = new Set(Words.minor);
        if ((forenames.size === 0) || (surnames.size === 0)) {
            const usedTitles = Internal.getUsedTitles();
            for (let i = 0; i < usedTitles.length; i++) {
                const usedTitleWords = divideTitle(usedTitles[i]);
                if (
                    (usedTitleWords.length === 2)
                    && (2 < usedTitleWords[0].length)
                    && (2 < usedTitleWords[1].length)
                ) {
                    forenames.add(usedTitleWords[0]);
                    surnames.add(usedTitleWords[1]);
                } else if (
                    (usedTitleWords.length === 1)
                    && (2 < usedTitleWords[0].length)
                ) {
                    forenames.add(usedTitleWords[0]);
                }
            }
            if (forenames.size === 0) {
                forenames.add("%@%");
            }
            if (surnames.size === 0) {
                surnames.add("%@%");
            }
        }
        const titleWords = divideTitle(title);
        if (
            returnSurname
            && (titleWords.length === 2)
            && (3 < titleWords[0].length)
            && (3 < titleWords[1].length)
            && forenames.has(titleWords[0])
            && surnames.has(titleWords[1])
        ) {
            return (title
                .split(" ")
                .find(casedTitleWord => (casedTitleWord.toLowerCase() === titleWords[1]))
            );
        } else if (
            (titleWords.length === 2)
            && (2 < titleWords[0].length)
            && (2 < titleWords[1].length)
            && forenames.has(titleWords[0])
        ) {
            return true;
        } else if (
            (titleWords.length === 1)
            && (2 < titleWords[0].length)
            && (forenames.has(titleWords[0]) || surnames.has(titleWords[0]))
        ) {
            return true;
        }
        function divideTitle(undividedTitle) {
            const titleWords = undividedTitle.toLowerCase().split(" ");
            if (titleWords.some(word => minorWords.has(word))) {
                return [];
            } else {
                return titleWords.filter(word => !peerage.has(word));
            }
        }
        return false;
    }
    function shouldProceed() {
        return (AC.config.doAC && !AC.signal.emergencyHalt && (AC.chronometer.postpone < 1));
    }
    function isDoSayStory(type) {
        return (isDoSay(type) || (type === "story"));
    }
    function isDoSay(type) {
        return ((type === "do") || (type === "say"));
    }
    function permitOutput() {
        return ((AC.config.deleteAllAutoCards === null) && (AC.signal.outputReplacement === ""));
    }
    function isAwaitingGeneration() {
        return (0 < AC.generation.pending.length);
    }
    function isPendingGeneration() {
        return notEmptyObj(AC.generation.workpiece);
    }
    function isPendingCompression() {
        return (AC.compression.titleKey !== "");
    }
    function notEmptyObj(obj) {
        return (obj && (0 < Object.keys(obj).length));
    }
    function clearTransientTitles() {
        AC.database.titles.used = [];
        [used, forenames, surnames].forEach(nameset => nameset.clear());
        return;
    }
    function banTitle(title, isFinalAssignment) {
        title = limitString(title.replace(/\s+/g, " ").trim(), 100);
        const lowerTitle = title.toLowerCase();
        if (bans.size !== 0) {
            bans.add(lowerTitle);
        }
        if (!lowArr(Internal.getBannedTitles()).includes(lowerTitle)) {
            AC.database.titles.banned.unshift(title);
            if (isFinalAssignment) {
                return;
            }
            AC.database.titles.pendingBans.unshift([title, 3]);
            const index = AC.database.titles.pendingUnbans.findIndex(pair => (pair[0].toLowerCase() === lowerTitle));
            if (index !== -1) {
                AC.database.titles.pendingUnbans.splice(index, 1);
            }
        }
        return;
    }
    function unbanTitle(title) {
        title = title.replace(/\s+/g, " ").trim();
        const lowerTitle = title.toLowerCase();
        if (used.size !== 0) {
            bans.delete(lowerTitle);
        }
        let index = lowArr(Internal.getBannedTitles()).indexOf(lowerTitle);
        if (index !== -1) {
            AC.database.titles.banned.splice(index, 1);
            AC.database.titles.pendingUnbans.unshift([title, 3]);
            index = AC.database.titles.pendingBans.findIndex(pair => (pair[0].toLowerCase() === lowerTitle));
            if (index !== -1) {
                AC.database.titles.pendingBans.splice(index, 1);
            }
        }
        return;
    }
    function lowArr(arr) {
        return arr.map(str => str.toLowerCase());
    }
    function getControlVariants() {
        return O.f({
            configure: O.f({
                title: "Configure \nAuto-Cards",
                keys: "Edit the entry above to adjust your story card automation settings",
            }),
            enable: O.f({
                title: "Edit to enable \nAuto-Cards",
                keys: "Edit the entry above to enable story card automation",
            }),
        });
    }
    function getDataVariants() {
        return O.f({
            debug: O.f({
                title: "Debug Data",
                keys: "You may view the debug state in the notes section below",
            }),
            critical: O.f({
                title: "Critical Data",
                keys: "Never modify or delete this story card",
            }),
        });
    }
    // Prepare to export the codomain
    const codomain = CODOMAIN.read();
    const [stopPackaged, lastCall] = (function () {
        // Tbh I don't know why I even bothered going through the trouble of implementing "stop" within LSIv2
        switch (HOOK) {
            case "context": {
                const haltStatus = [];
                if (Array.isArray(codomain)) {
                    O.f(codomain);
                    haltStatus.push(true, codomain[1]);
                } else {
                    haltStatus.push(false, STOP);
                }
                if ((AC.config.LSIv2 !== false) && (haltStatus[1] === true)) {
                    // AutoCards will return [text, (stop === true)] onContext
                    // The onOutput lifecycle hook will not be executed during this turn
                    concludeEmergency();
                }
                return haltStatus;
            }
            case "output": {
                // AC.config.LSIv2 being either true or null implies (lastCall === true)
                return [null, AC.config.LSIv2 ?? true];
            }
            default: {
                return [null, null];
            }
        }
    })();
    // Repackage AC to propagate its state forward in time
    if (state.LSIv2) {
        // Facilitates recursive calls of AutoCards
        // The Auto-Cards external API is accessible through the LSIv2 scope
        state.LSIv2 = AC;
    } else {
        const memoryOverflow = (38000 < (JSON.stringify(state).length + JSON.stringify(AC).length));
        if (memoryOverflow) {
            // Memory overflow is imminent
            const dataVariants = getDataVariants();
            if (lastCall) {
                unbanTitle(dataVariants.debug.title);
                banTitle(dataVariants.critical.title);
            }
            setData(dataVariants.critical, dataVariants.debug);
            if (state.AutoCards) {
                // Decouple state for safety
                delete state.AutoCards;
            }
        } else {
            if (lastCall) {
                const dataVariants = getDataVariants();
                unbanTitle(dataVariants.critical.title);
                if (AC.config.showDebugData) {
                    // Update the debug data card
                    banTitle(dataVariants.debug.title);
                    setData(dataVariants.debug, dataVariants.critical);
                } else {
                    // There should be no data card
                    unbanTitle(dataVariants.debug.title);
                    if (data === null) {
                        data = getSingletonCard(false, O.f({ ...dataVariants.debug }), O.f({ ...dataVariants.critical }));
                    }
                    eraseCard(data);
                    data = null;
                }
            } else if (AC.config.showDebugData && (HOOK === undefined)) {
                const dataVariants = getDataVariants();
                setData(dataVariants.debug, dataVariants.critical);
            }
            // Save a backup image to state
            state.AutoCards = AC;
        }
        function setData(primaryVariant, secondaryVariant) {
            const dataCardTemplate = O.f({
                type: AC.config.defaultCardType,
                title: primaryVariant.title,
                keys: primaryVariant.keys,
                entry: (function () {
                    const mutualEntry = (
                        "If you encounter an Auto-Cards bug or otherwise wish to help me improve this script by sharing your configs and game data, please send me the notes text found below. You may ping me @LewdLeah through the official AI Dungeon Discord server. Please ensure the content you share is appropriate for the server, otherwise DM me instead. 😌"
                    );
                    if (memoryOverflow) {
                        return (
                            "Seeing this means Auto-Cards detected an imminent memory overflow event. But fear not! As an emergency fallback, the full state of Auto-Cards' data has been serialized and written to the notes section below. This text will be deserialized during each lifecycle hook, therefore it's absolutely imperative that you avoid editing this story card!"
                        ) + (function () {
                            if (AC.config.showDebugData) {
                                return "\n\n" + mutualEntry;
                            } else {
                                return "";
                            }
                        })();
                    } else {
                        return (
                            "This story card displays the full serialized state of Auto-Cards. To remove this card, simply set the \"log debug data\" setting to false within your \"Configure\" card. "
                        ) + mutualEntry;
                    }
                })(),
                description: JSON.stringify(AC)
            });
            if (data === null) {
                data = getSingletonCard(true, dataCardTemplate, O.f({ ...secondaryVariant }));
            }
            for (const propertyName of ["title", "keys", "entry", "description"]) {
                if (data[propertyName] !== dataCardTemplate[propertyName]) {
                    data[propertyName] = dataCardTemplate[propertyName];
                }
            }
            const index = storyCards.indexOf(data);
            if ((index !== -1) && (index !== (storyCards.length - 1))) {
                // Ensure the data card is always at the bottom of the story cards list
                storyCards.splice(index, 1);
                storyCards.push(data);
            }
            return;
        }
    }
    // This is the only return point within the parent scope of AutoCards
    if (stopPackaged === false) {
        return [codomain, STOP];
    } else {
        return codomain;
    }
} function isolateLSIv2(code, log, text, stop) { const console = Object.freeze({ log }); try { eval(code); return [null, text, stop]; } catch (error) { return [error, text, stop]; } }

// Your other library scripts go here

/**
 * Nemesis Engine v0.1.16-alpha
 * Companion module for LewdLeah's Inner Self v1.0.2 / AI Dungeon.
 *
 * DESIGN GOALS
 * - Zero required NPC registration. Named NPCs become Nemeses automatically only after
 *   a significant unresolved personal event with the player.
 * - Store only evolving deviations/current truth, not a second copy of a character card.
 * - Human-editable Nemesis Story Cards are the canonical fictional record.
 * - The normal story model performs semantic interpretation through a hidden record,
 *   using the same general pattern as Inner Self (context task -> output parser -> persist).
 * - Duplicate-operation protection, not rollback.
 * - Return attempts are probabilistic; the story model has a plausibility veto.
 * - Inner Self compatibility. HOOK ORDER IS NOT SYMMETRIC — use NemesisHooks:
 *       NemesisHooks.input()   -> InnerSelf("input");     then NemesisSystem("input")
 *       NemesisHooks.context() -> InnerSelf("context");   then NemesisSystem("context")
 *       NemesisHooks.output()  -> NemesisSystem("output"); then InnerSelf("output")
 *   Output is REVERSED. Inner Self's bracket repair runs on model output, and
 *   before it can claim anything the Nemesis record must already be gone.
 *
 * IMPORTANT
 * The hidden record intentionally avoids (), [], and {} because Inner Self's output parser
 * consumes the first bracket-container family it finds. Nemesis uses plain-text record sentinels plus a loose-record fallback.
 */

function NemesisSystem(hook) {
    "use strict";

    // -------------------------------------------------------------------------
    // Creator defaults. Player-editable counterparts live in Configure Nemesis.
    // -------------------------------------------------------------------------
    const DEFAULTS = Object.freeze({
        enabled: true,
        autoDiscover: true,
        autoRegisterInnerSelf: true,
        allowReturns: true,
        survivalGuidance: true,
        returnChance: 12,              // % per eligible context turn
        returnCooldown: 8,             // turns between global return attempts
        sameNemesisCooldown: 16,       // turns between attempts for the same Nemesis
        stalePresentTurns: 10,         // if not mentioned this long, "present" can become returnable
        historySoftLimit: 1800,        // card notes length that schedules maintenance
        maxActiveContextCards: 3,      // active Nemesis names explicitly echoed into task
        debug: false,
    });

    // AI Dungeon shows a 1000-character budget on a Story Card Entry. Notes has
    // far more room, so the Entry is the constraint on how long a rivalry can run.
    const ENTRY_BUDGET = 1000;
    const ENTRY_HEADER = [
        "> DO NOT EDIT THIS ENTRY — It is automatically generated from the Notes section.",
        "> To correct Nemesis continuity, edit Notes instead. Manual Entry changes may be overwritten.",
        "",
        ""
    ].join("\n");

    // Turns a vetoed return waits before it may be offered again.
    const VETO_COOLDOWN = 2;
    // A return is a REAPPEARANCE, so it requires an actual absence.
    const MIN_ABSENCE_TURNS = 3;
    const VERSION = "v0.7.1-alpha";
    const CONFIG_TITLE = "Configure \nNemesis";
    const CARD_PREFIX = "⚔ Nemesis — ";
    const CARD_TYPE = "nemesis";
    const START = "NEMESIS RECORD BEGIN";
    const END = "NEMESIS RECORD END";
    // Read old alpha records too so existing adventures remain compatible.
    const LEGACY_START = "<<NEMESIS>>";
    const LEGACY_END = "<<ENDNEMESIS>>";

    // -------------------------------------------------------------------------
    // Defensive environment checks.
    // IMPORTANT: AI Dungeon exposes `text` and helper functions as sandbox bindings;
    // they are not guaranteed to be properties of globalThis. Match Inner Self's
    // own environment checks for compatibility.
    // -------------------------------------------------------------------------
    if (
        !globalThis.state || typeof state !== "object" || Array.isArray(state)
        || !globalThis.info || typeof info !== "object" || Array.isArray(info)
        || !Array.isArray(globalThis.storyCards)
        || !Array.isArray(globalThis.history)
        || typeof text !== "string"
        || typeof addStoryCard !== "function"
    ) {
        // Name the missing binding instead of failing silently. A silent return
        // here is indistinguishable from "the script never ran".
        const missing = [
            [!globalThis.state || typeof state !== "object" || Array.isArray(state), "state"],
            [!globalThis.info || typeof info !== "object" || Array.isArray(info), "info"],
            [!Array.isArray(globalThis.storyCards), "storyCards"],
            [!Array.isArray(globalThis.history), "history"],
            [typeof text !== "string", "text"],
            [typeof addStoryCard !== "function", "addStoryCard"]
        ].filter(([bad]) => bad).map(([, name]) => name).join(", ");
        try { log(`Nemesis: unavailable AI Dungeon globals -> ${missing}`); } catch {}
        try { globalThis.__nemesisEnvFail = missing; } catch {}
        globalThis.text ||= " ";
        return;
    }
    try { globalThis.__nemesisEnvFail = ""; } catch {}

    // -------------------------------------------------------------------------
    // Helpers.
    // -------------------------------------------------------------------------
    const clamp = (n, lo, hi) => Math.min(Math.max(lo, n), hi);
    const turn = () => Number.isInteger(info.actionCount) ? info.actionCount : history.length;
    const cleanName = (name = "") => String(name)
        .replace(/[\u200B-\u200D]/g, "")
        .replace(/^[\s"'`´‘’“”]+|[\s"'`´‘’“”]+$/g, "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 80);
    const normalize = (s = "") => String(s)
        .replace(/[\u200B-\u200D]/g, "")
        .replace(/\r/g, "")
        .replace(/[ \t]+/g, " ")
        .trim();
    const escapeRegExp = (str = "") => String(str).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const safeLine = (s = "", max = 950) => normalize(s)
        .replace(/\n+/g, " ")
        .replace(new RegExp(escapeRegExp(START), "gi"), "")
        .replace(new RegExp(escapeRegExp(END), "gi"), "")
        .replace(new RegExp(escapeRegExp(LEGACY_START), "gi"), "")
        .replace(new RegExp(escapeRegExp(LEGACY_END), "gi"), "")
        .slice(0, max)
        .trim();
    // ── Grounded role extraction ────────────────────────────────────────────
    // Position needs a baseline or "promotion" has nothing to measure from. The
    // prompt asks the model for a plain established role; this is the backstop
    // for when it does not comply. It reads ONLY appositives that bind a common
    // noun directly to the name — "a ganger named Rico", "Rico, a fixer" — which
    // is parsing, not inference. Anything looser is left to the model.
    //
    // Words that describe a person without being a role. A story that says
    // "a man named Rico" has established nothing about his standing.
    const ROLE_STOPWORDS = new Set([
        "man", "men", "woman", "women", "guy", "guys", "girl", "girls", "boy",
        "boys", "kid", "kids", "person", "people", "figure", "figures", "stranger",
        "strangers", "someone", "somebody", "one", "thing", "voice", "body",
        "face", "hand", "hands", "eyes", "shape", "silhouette", "name", "friend",
        "enemy", "enemies", "ally", "allies", "guy's", "other", "another", "same",
        "first", "last", "next", "only", "real", "new", "old", "young", "dead",
        "former", "late", "tall", "short", "big", "small", "large", "little",
        "angry", "injured", "wounded", "bleeding", "familiar", "unfamiliar",
        "certain", "particular", "second", "third", "male", "female",
        // Connectives that must never survive as a head noun. Without these,
        // "a man named Rico" trims the generic "man" and yields "Named".
        "named", "called", "known", "goes", "by", "of", "the", "a", "an"
    ]);
    // Leading modifiers get trimmed rather than rejected: "the young ganger Rico"
    // still establishes "ganger".
    const isRoleWord = w => /^[a-z][a-z'-]{1,}$/i.test(w) && !ROLE_STOPWORDS.has(w.toLowerCase());
    const tidyRole = (phrase = "") => {
        let words = normalize(phrase).toLowerCase()
            .replace(/[^a-z0-9\s'-]/g, " ")
            .split(/\s+/).filter(Boolean);
        while (words.length && ROLE_STOPWORDS.has(words[0])) words.shift();
        if (words.length > 3) words = words.slice(-3);
        if (!words.length) return "";
        // The head noun carries the meaning; if it is generic the phrase is not a role.
        if (!isRoleWord(words[words.length - 1])) return "";
        const out = words.join(" ");
        return out.charAt(0).toUpperCase() + out.slice(1);
    };
    const establishedRole = (name = "", source = "") => {
        const who = escapeRegExp(cleanName(name));
        if (!who) return "";
        const src = normalize(String(source || "")).replace(/\n+/g, " ");
        const patterns = [
            // "a ganger named Rico" / "an ex-cop called Rico"
            new RegExp(`\\b(?:a|an|the)\\s+([a-z][a-z'\\- ]{1,28}?)\\s+(?:named|called)\\s+${who}\\b`, "i"),
            // "Rico, a ganger," / "Rico — the fixer."
            new RegExp(`\\b${who}\\b\\s*[,—-]\\s*(?:a|an|the)\\s+([a-z][a-z'\\- ]{1,28}?)\\s*(?:[,.;—]|\\band\\b|$)`, "i"),
            // "the ganger Rico"
            new RegExp(`\\b(?:a|an|the)\\s+([a-z][a-z'\\- ]{1,28}?)\\s+${who}\\b`, "i")
        ];
        for (const re of patterns) {
            const m = src.match(re);
            if (!m) continue;
            // A pattern that matches OWNS the verdict. "A man named Rico" matches
            // the first pattern and yields nothing — falling through to a looser
            // pattern on the same sentence is how "man named" became "Named".
            const role = tidyRole(m[1]);
            return (role && role.toLowerCase() !== cleanName(name).toLowerCase()) ? role : "";
        }
        return "";
    };

    const simpleHash = (input = "") => {
        let h = 2166136261 >>> 0;
        const s = String(input);
        for (let i = 0; i < s.length; i++) {
            h ^= s.charCodeAt(i);
            h = Math.imul(h, 16777619) >>> 0;
        }
        return h.toString(16);
    };
    const nameInText = (name, source) => {
        name = cleanName(name).toLowerCase();
        source = String(source || "").toLowerCase();
        if (!name || !source) return false;
        let at = source.indexOf(name);
        while (at !== -1) {
            const before = at > 0 ? source.charCodeAt(at - 1) : 0;
            const afterAt = at + name.length;
            const after = afterAt < source.length ? source.charCodeAt(afterAt) : 0;
            const letter = c => (97 <= c && c <= 122) || (48 <= c && c <= 57);
            if (!letter(before) && !letter(after)) return true;
            at = source.indexOf(name, at + 1);
        }
        return false;
    };

    // -------------------------------------------------------------------------
    // v0.1.17 additions. These touch PARSING and SANITIZING only.
    // The v0.1.16 detection path (SYSTEM task, hashing, expectRecord) is unchanged.
    // -------------------------------------------------------------------------
    const FIELD_KEYS = Object.freeze([
        "mode", "name", "title", "status", "physical", "capabilities", "position",
        "relationships", "history", "drive", "return", "urgency"
    ]);
    // Cards now render as "> Physical: ...", so the model sees ">" decoration in
    // context and imitates it. Strip decoration before reading a key instead of
    // rejecting the record.
    const stripBullet = (line = "") => String(line).replace(/^[\s>*_\-#••]+/, "");
    const fieldKeyOf = (line = "") => {
        const bare = stripBullet(line);
        const colon = bare.indexOf(":");
        if (colon === -1) return "";
        const key = bare.slice(0, colon).toLowerCase().replace(/[^a-z]/g, "");
        return FIELD_KEYS.includes(key) ? key : "";
    };

    // Report-only support check. This cannot judge meaning, but a detail that
    // appears in the card and nowhere in the story it supposedly came from is
    // worth surfacing rather than silently trusting.
    const STOPWORDS = new Set(("the and but for with from that this they them his her "
        + "him she are was were has have had not now new none established still also "
        + "into over under after before their there where when which while would could "
        + "player character himself herself themselves been being does did just very "
        + "more most some such than then only other another same each both").split(" "));
    const contentWords = (value = "") => String(value)
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, " ")
        .split(/\s+/)
        .filter(w => w.length >= 4 && !STOPWORDS.has(w));
    const unsupportedTerms = (nextValue, prevValue, sourceText) => {
        const source = String(sourceText || "").toLowerCase();
        if (!source) return [];
        const known = new Set(contentWords(prevValue));
        const added = contentWords(nextValue).filter(w => !known.has(w));
        // A word counts as supported if its stem shows up anywhere in the story.
        return [...new Set(added.filter(w => !source.includes(w.slice(0, Math.max(4, w.length - 2)))))];
    };

    const NS = state.Nemesis = (() => {
        const old = (state.Nemesis && typeof state.Nemesis === "object" && !Array.isArray(state.Nemesis))
            ? state.Nemesis : {};
        // Always reflect the installed code version after an upgrade.
        old.version = VERSION;
        old.lastAnalysisHash ??= "";
        old.pendingAnalysisHash ??= "";
        old.expectRecord ??= false;
        old.lastCommitHash ??= "";
        old.lastReturnAttempt ??= -999999;
        old.lastCandidate ??= "";
        old.ops ??= 0;
        old.cards ??= {};
        old.lastSeen ??= {};
        old.lastMaintenance ??= -999999;
        old.debugContext ??= {};
        old.debugOutput ??= {};
        old.stages ??= {};
        old.undoStack ??= [];
        old.pendingReturn ??= null;
        old.firstHook ??= null;
        old.configCreated ??= null;
        old.debugRaw ??= "";
        old.diagnostic ??= {};
        return old;
    })();

    // First-hook telemetry. AI Dungeon gives scripts no "adventure opened" event,
    // so the only way to know whether a hook ran during the opening generation is
    // to record the first one we ever see and compare it to the action count.
    if (!NS.firstHook) {
        NS.firstHook = {
            hook: String(hook || (Number.isInteger(info.maxChars) ? "context(implied)" : "unknown")),
            actionCount: Number.isInteger(info.actionCount) ? info.actionCount : null,
            historyLen: Array.isArray(history) ? history.length : null
        };
    }

    const isConfigCard = card => {
        const t = normalize(card?.title || "").toLowerCase().replace(/\s+/g, " ");
        return t.includes("configure") && t.includes("nemesis");
    };
    const isNemesisCard = card => (
        card && typeof card === "object"
        && (card.type === CARD_TYPE || normalize(card.title || "").startsWith(CARD_PREFIX))
    );
    const cardName = card => cleanName(normalize(card?.title || "").replace(CARD_PREFIX, ""));

    // -------------------------------------------------------------------------
    // Inner Self player-name reuse and optional emergent-agent registration.
    // -------------------------------------------------------------------------
    const findInnerSelfConfig = () => storyCards.find(card => {
        const t = normalize(card?.title || "").toLowerCase().replace(/\s+/g, " ");
        return t.includes("configure") && t.includes("inner self");
    }) || null;

    const innerSelfPlayerName = () => {
        const card = findInnerSelfConfig();
        const entry = String(card?.entry || "");
        const m = entry.match(/First name of player character\s*:\s*["“”]?([^\n"“”]+)["“”]?/i);
        if (m) {
            const found = cleanName(m[1]);
            if (found && found.toLowerCase() !== "example") return found;
        }
        // Match Inner Self's conservative behavior: do not infer a player name
        // from scenario placeholders such as ${character.name}. If the player has
        // not explicitly supplied a real name, treat it as unknown internally.
        return "";
    };

    const registerWithInnerSelf = name => {
        const card = findInnerSelfConfig();
        if (!card || typeof card.description !== "string") return false;
        const cleaned = cleanName(name);
        if (!cleaned) return false;
        const lines = card.description.split("\n").map(x => cleanName(x));
        if (lines.some(x => x.toLowerCase() === cleaned.toLowerCase())) return true;
        card.description = `${card.description.trimEnd()}\n${cleaned}\n`;
        return true;
    };

    // -------------------------------------------------------------------------
    // Config card.
    // -------------------------------------------------------------------------
    const parseBool = (value, fallback) => {
        const v = normalize(value).toLowerCase();
        if (["true", "yes", "on", "1", "enabled"].includes(v)) return true;
        if (["false", "no", "off", "0", "disabled"].includes(v)) return false;
        return fallback;
    };
    const parseIntField = (value, fallback, lo, hi) => {
        const n = parseInt(String(value).replace(/[^0-9-]/g, ""), 10);
        return Number.isFinite(n) ? clamp(n, lo, hi) : fallback;
    };

    /**
     * Constructs a Story Card using the same marker-first strategy used by Auto-Cards.
     * This avoids depending on undocumented addStoryCard return shapes or extra arguments.
     */
    const constructStoryCard = (template = {}) => {
        const marker = `%@NEMESIS_${Math.floor(Math.random() * 1000000000)}@%`;
        try {
            addStoryCard(marker);
        } catch (error) {
            try { log(`Nemesis card creation error: ${error.message}`); } catch {}
            return null;
        }
        for (const card of storyCards) {
            if (!card || typeof card !== "object") continue;
            if ((card.title !== marker) && (card.keys !== marker)) continue;
            card.type = String(template.type || "class");
            card.title = String(template.title || "");
            card.keys = String(template.keys || "");
            card.entry = String(template.entry || "");
            card.description = String(template.description || "");
            return card;
        }
        return null;
    };

    const getConfig = () => {
        let card = storyCards.find(isConfigCard) || null;
        if (!card) {
            card = constructStoryCard({
                type: "class",
                title: CONFIG_TITLE,
                keys: "play.aidungeon.com/profile/a_yapper",
                entry: "",
                description: ""
            });
            if (card) {
                NS.configCreated = {
                    hook: String(hook || "context(implied)"),
                    actionCount: Number.isInteger(info.actionCount) ? info.actionCount : null,
                    historyLen: Array.isArray(history) ? history.length : null
                };
            } else {
                NS.configFailed = (NS.configFailed || 0) + 1;
            }
        }
        if (!card) {
            try {
                state.message = "Nemesis Engine: failed to create the Configure Nemesis Story Card.";
                log("Nemesis: failed to construct config Story Card");
            } catch {}
            return {
                card: null,
                ...DEFAULTS,
                player: innerSelfPlayerName() || "the protagonist"
            };
        }
        card.title = CONFIG_TITLE;
        card.type = "class";
        card.keys = "play.aidungeon.com/profile/a_yapper";

        const current = String(card.entry || "");
        const read = label => {
            const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            const m = current.match(new RegExp(`${escaped}\\s*:\\s*([^\\n]+)`, "i"));
            return m ? m[1].trim() : "";
        };

        // cleanName strips the surrounding quotes the card writes, so the
        // placeholder test has to run AFTER it — otherwise `"Example"` never
        // matches /^Example$/ and the placeholder becomes a real player name.
        let player = cleanName(read("Player name"))
            .replace(/^(?:AUTO|Example|the player|the protagonist|player name|name|none|n\/a)$/i, "");
        if (!player) player = innerSelfPlayerName() || "the protagonist";

        const cfg = {
            card,
            enabled: parseBool(read("Enable Nemesis"), DEFAULTS.enabled),
            autoDiscover: parseBool(read("Automatic discovery"), DEFAULTS.autoDiscover),
            autoRegisterInnerSelf: parseBool(read("Auto-register Nemeses with Inner Self"), DEFAULTS.autoRegisterInnerSelf),
            allowReturns: parseBool(read("Allow return events"), DEFAULTS.allowReturns),
            survivalGuidance: parseBool(read("Allow survival and retreat guidance"), DEFAULTS.survivalGuidance),
            returnChance: parseIntField(read("Return opportunity chance"), DEFAULTS.returnChance, 0, 100),
            returnCooldown: parseIntField(read("Turns between return attempts"), DEFAULTS.returnCooldown, 0, 999),
            sameNemesisCooldown: parseIntField(read("Turns before same Nemesis can retry"), DEFAULTS.sameNemesisCooldown, 0, 999),
            // Label widened in v0.6.4 — it now governs dormant as well as
            // present. The old label is still read so existing config cards keep
            // whatever the player set.
            stalePresentTurns: parseIntField(
                read("Turns before an unseen Nemesis can return")
                    || read("Turns before an unseen present Nemesis can return"),
                DEFAULTS.stalePresentTurns, 1, 999),
            historySoftLimit: parseIntField(read("Nemesis card maintenance limit"), DEFAULTS.historySoftLimit, 700, 9900),
            maxActiveContextCards: parseIntField(read("Nemesis snapshots echoed into model task"), DEFAULTS.maxActiveContextCards, 0, 5),
            debug: parseBool(read("Show hidden Nemesis records"), DEFAULTS.debug),
            player,
        };

        card.entry = [
            `Nemesis Engine ${VERSION} automatically turns significant recurring NPC relationships into persistent, editable continuity.`,
            `Enable Nemesis: ${cfg.enabled}`,
            `Automatic discovery: ${cfg.autoDiscover}`,
            `Auto-register Nemeses with Inner Self: ${cfg.autoRegisterInnerSelf}`,
            `Player name: "${player === "the protagonist" ? "Example" : player}"`,
            `Allow return events: ${cfg.allowReturns}`,
            `Allow survival and retreat guidance: ${cfg.survivalGuidance}`,
            `Return opportunity chance: ${cfg.returnChance}%`,
            `Turns between return attempts: ${cfg.returnCooldown}`,
            `Turns before same Nemesis can retry: ${cfg.sameNemesisCooldown}`,
            `Turns before an unseen Nemesis can return: ${cfg.stalePresentTurns}`,
            `Nemesis card maintenance limit: ${cfg.historySoftLimit}`,
            `Nemesis snapshots echoed into model task: ${cfg.maxActiveContextCards}`,
            `Show hidden Nemesis records: ${cfg.debug}`,
            "",
            "Nemesis cards are created automatically. Edit their Notes/Description to correct continuity; keep the field labels intact."
        ].map(line => (line === "") ? "" : `> ${line}`).join("\n");
        card.description = [
            "No NPC list is required.",
            "A named or uniquely identifiable NPC becomes a Nemesis only after a significant unresolved personal event with the player.",
            "Normal appearance stays in normal Story Cards. Nemesis stores only evolving deviations: lasting injuries/scars/replacements, life status, rank/status changes, major relationships, compressed history, and current drive.",
            "Return opportunities are random, but the narrator must veto an appearance that would violate location, access, timing, knowledge, or established story logic.",
            "Inner Self compatibility: call NemesisHooks.input(), NemesisHooks.context() and NemesisHooks.output() from the three modifier tabs. Output runs Nemesis BEFORE Inner Self; Input and Context run Inner Self first. Do not call the two scripts by hand unless you keep that order."
        ].map(line => `> ${line}`).join("\n\n");
        return cfg;
    };

    // -------------------------------------------------------------------------
    // Nemesis card format. Description/Notes are human-editable source of truth.
    // Entry mirrors Notes because only Entry is normally sent to the story model.
    // -------------------------------------------------------------------------
    const defaultSnapshot = name => ({
        name: cleanName(name),
        title: "None established",
        status: "Alive unless the story establishes otherwise",
        physical: "None established",
        capabilities: "None established",
        position: "None established",
        relationships: "Unresolved personal connection with the player",
        history: "A significant unresolved encounter connected this character to the player.",
        drive: "Unclear",
        returnState: "dormant",
        urgency: "normal",
    });

    const parseSnapshot = (card, fallbackName = "") => {
        const base = defaultSnapshot(fallbackName || cardName(card));
        const src = String(card?.description || "");
        const fields = {
            "title": "title",
            "status": "status",
            "physical": "physical",
            "capabilities": "capabilities",
            "position": "position",
            "relationships": "relationships",
            "history": "history",
            "drive": "drive",
            "return": "returnState",
            "urgency": "urgency",
        };
        for (const rawLine of src.split("\n")) {
            // Tolerate any mix of "> ", ">> ", "> > ", "- ", "**" decoration.
            const line = stripBullet(rawLine);
            const i = line.indexOf(":");
            if (i === -1) continue;
            const key = normalize(line.slice(0, i)).toLowerCase().replace(/[^a-z]/g, "");
            const prop = fields[key];
            if (!prop) continue;
            const value = safeLine(line.slice(i + 1));
            if (value) base[prop] = value;
        }
        base.name = cleanName(fallbackName || cardName(card) || base.name);
        base.returnState = normalize(base.returnState).toLowerCase();
        base.urgency = normalize(base.urgency).toLowerCase();
        if (!["present", "eligible", "dormant", "closed"].includes(base.returnState)) base.returnState = "dormant";
        if (!["low", "normal", "high", "extreme"].includes(base.urgency)) base.urgency = "normal";
        return base;
    };

    // A character the story has confirmed dead is not a return candidate, whatever
    // the model wrote in the Return field. Enforced here so Notes, Entry, and the
    // return scheduler can never disagree with each other.
    const CONFIRMED_DEAD = /\b(?:confirmed|permanent(?:ly)?|verified|definitely|truly)\s+dead\b|\bconfirmed\s+death\b|\bdead\s*[—-]\s*confirmed\b/i;
    const normalizeSnapshot = snap => {
        if (CONFIRMED_DEAD.test(String(snap?.status || ""))) {
            return { ...snap, returnState: "closed" };
        }
        return snap;
    };

    const renderSnapshot = rawSnap => {
        const snap = normalizeSnapshot(rawSnap);
        return [
        `> Title: ${safeLine(snap.title || "None established")}`,
        `> Status: ${safeLine(snap.status || "Unknown")}`,
        `> Physical: ${safeLine(snap.physical || "None established")}`,
        `> Capabilities: ${safeLine(snap.capabilities || "None established")}`,
        `> Position: ${safeLine(snap.position || "None established")}`,
        `> Relationships: ${safeLine(snap.relationships || "None established")}`,
        `> History: ${safeLine(snap.history || "None established", 1500)}`,
        `> Drive: ${safeLine(snap.drive || "Unclear")}`,
        `> Return: ${["present", "eligible", "dormant", "closed"].includes(String(snap.returnState).toLowerCase()) ? String(snap.returnState).toLowerCase() : "dormant"}`,
        `> Urgency: ${["low", "normal", "high", "extreme"].includes(String(snap.urgency).toLowerCase()) ? String(snap.urgency).toLowerCase() : "normal"}`,
        ].join("\n");
    };

    // A long rivalry outgrows the Entry. Notes is the source of truth and keeps
    // everything; the Entry is a generated mirror, so when it will not fit we
    // condense the MIRROR rather than losing the record. History is
    // chronological, so keep how the rivalry started and where it stands now and
    // elide the middle — that is the part a reader can most afford to lose.
    const condenseHistory = (value, allowance) => {
        const s = safeLine(value, 1500);
        if (s.length <= allowance) return s;
        const parts = s.split(/\s*;\s*/).filter(Boolean);
        if (parts.length < 3) return `${s.slice(0, Math.max(1, allowance - 1)).trimEnd()}…`;
        const first = parts[0];
        const tail = [];
        let used = first.length + 5;                       // "; …; "
        for (let i = parts.length - 1; i > 0; i--) {
            if (used + parts[i].length + 2 > allowance) break;
            tail.unshift(parts[i]);
            used += parts[i].length + 2;
        }
        if (!tail.length) return `${first.slice(0, Math.max(1, allowance - 1)).trimEnd()}…`;
        return `${first}; …; ${tail.join("; ")}`;
    };
    const renderEntryBody = snap => {
        const full = renderSnapshot(snap);
        if (ENTRY_HEADER.length + full.length <= ENTRY_BUDGET) return full;
        // History is the field that grows without bound; spend the overrun there
        // before touching anything describing their current state.
        const skeleton = renderSnapshot({ ...snap, history: "" }).length;
        const allowance = ENTRY_BUDGET - ENTRY_HEADER.length - skeleton;
        let body = renderSnapshot({ ...snap, history: condenseHistory(snap.history, Math.max(48, allowance)) });
        if (ENTRY_HEADER.length + body.length <= ENTRY_BUDGET) return body;
        // Still over: the current-state fields are themselves oversized. Trim the
        // descriptive ones, newest-information-last, before any hard truncation.
        for (const cap of [220, 140, 90, 60]) {
            body = renderSnapshot({
                ...snap,
                history: condenseHistory(snap.history, Math.max(48, allowance)),
                relationships: safeLine(snap.relationships, cap),
                capabilities: safeLine(snap.capabilities, cap),
                physical: safeLine(snap.physical, cap),
                drive: safeLine(snap.drive, cap),
            });
            if (ENTRY_HEADER.length + body.length <= ENTRY_BUDGET) return body;
        }
        return body.slice(0, Math.max(0, ENTRY_BUDGET - ENTRY_HEADER.length));
    };

    const syncEntryFromNotes = card => {
        if (!isNemesisCard(card)) return;
        const name = cardName(card);
        const snapshot = parseSnapshot(card, name);
        const body = renderSnapshot(snapshot);

        card.description = [
            "> EDIT HERE — This Notes section is the editable source of truth for this Nemesis.",
            "> Correct continuity here when needed. Keep the field labels intact; your changes automatically update the Entry.",
            "",
            body
        ].join("\n");

        card.entry = ENTRY_HEADER + renderEntryBody(snapshot);

        card.keys = name;
        card.type = CARD_TYPE;
        card.title = `${CARD_PREFIX}${name}`;
    };

    const findNemesisCard = name => {
        const lower = cleanName(name).toLowerCase();
        return storyCards.find(card => isNemesisCard(card) && cardName(card).toLowerCase() === lower) || null;
    };

    // Config-card placeholders and narrator stand-ins are never real NPCs. This
    // is checked independently of cfg.player: "Example" must be rejected even
    // when the config card is untouched and the player has no configured name.
    const PLACEHOLDER_NAMES = new Set([
        "example", "auto", "the protagonist", "protagonist", "the player",
        "player", "the player character", "player character", "you", "none",
        "n/a", "unknown", "name", "player name"
    ]);

    const upsertNemesis = (snap, cfg) => {
        const name = cleanName(snap?.name || "");
        if (!name || PLACEHOLDER_NAMES.has(name.toLowerCase())) return null;
        if (name.toLowerCase() === cfg.player.toLowerCase()) return null;
        let card = findNemesisCard(name);
        const created = !card;
        if (!card) {
            const initial = defaultSnapshot(name);
            const desc = renderSnapshot({ ...initial, ...snap, name });
            card = constructStoryCard({
                type: CARD_TYPE,
                title: `${CARD_PREFIX}${name}`,
                keys: name,
                entry: "",
                description: desc
            });
            if (!card) {
                try { log(`Nemesis: failed to create Story Card for ${name}`); } catch {}
                return null;
            }
        }
        card.description = renderSnapshot({ ...parseSnapshot(card, name), ...snap, name });
        syncEntryFromNotes(card);
        NS.cards[name] ??= { lastReturnAttempt: -999999, createdTurn: turn() };
        NS.cards[name].updatedTurn = turn();
        NS.lastSeen[name] = turn();
        if (created && cfg.autoRegisterInnerSelf) registerWithInnerSelf(name);
        return card;
    };

    /**
     * Undoes the most recent Nemesis write when the generation that produced it
     * was discarded (Retry, or Erase + Continue).
     *
     * AI Dungeon gives scripts no erase event, so the signal is the history
     * length. A normal forward turn always grows history past the length recorded
     * at write time; Retry and Erase both shrink it. If it did not grow, the
     * generation that justified the write is gone and the write goes with it.
     * The replacement generation, if it still qualifies, simply writes again.
     */
    const rollbackDiscardedWrite = () => {
        const stack = Array.isArray(NS.undoStack) ? NS.undoStack : [];
        if (!stack.length) return false;
        const undone = [];
        // Erase does not run modifiers, so rollback happens on the first
        // generation AFTER the erase. A normal forward turn always grows history
        // past the length a write was made at; Retry and Erase do not. Unwind
        // newest-first so chained writes to the same card restore correctly, and
        // keep going in case several generations were discarded at once.
        while (stack.length) {
            const undo = stack[stack.length - 1];
            if (!undo || typeof undo !== "object" || !undo.name) { stack.pop(); continue; }
            if (history.length > undo.len) break;   // this write survived
            stack.pop();
            const card = findNemesisCard(undo.name);
            if (card) {
                if (undo.created) {
                    const index = storyCards.indexOf(card);
                    if (index !== -1) {
                        if (typeof removeStoryCard === "function") removeStoryCard(index);
                        else storyCards.splice(index, 1);
                    }
                    delete NS.cards[undo.name];
                    delete NS.lastSeen[undo.name];
                    const staleEntry = String(card.entry || "");
                    if (staleEntry && typeof text === "string" && text.includes(staleEntry)) {
                        text = text.replace(staleEntry, "").replace(/\n{3,}/g, "\n\n");
                        NS.stages.rollbackContextFixed = true;
                    }
                    undone.push(`removed ${undo.name}`);
                } else if (typeof undo.prevDescription === "string") {
                    // AID built this turn's context before the script ran, so the
                    // discarded entry is already sitting in `text`. Capture it,
                    // restore the card, then swap the stale copy out of context.
                    const staleEntry = String(card.entry || "");
                    card.description = undo.prevDescription;
                    syncEntryFromNotes(card);
                    if (staleEntry && typeof text === "string" && text.includes(staleEntry)) {
                        text = text.replace(staleEntry, String(card.entry || ""));
                        NS.stages.rollbackContextFixed = true;
                    }
                    undone.push(`reverted ${undo.name}`);
                }
            }
        }
        NS.undoStack = stack;
        if (!undone.length) return false;
        // Let the replacement generation be analysed from scratch.
        NS.lastCommitHash = "";
        NS.lastAnalysisHash = "";
        NS.stages.rolledBack = undone.join(", ");
        return true;
    };

    const nemesisCards = () => storyCards.filter(isNemesisCard).map(card => {
        syncEntryFromNotes(card);
        const snap = parseSnapshot(card);
        NS.cards[snap.name] ??= { lastReturnAttempt: -999999, createdTurn: turn() };
        return { card, snap };
    }).filter(x => x.snap.name);

    // -------------------------------------------------------------------------
    // Accepted-history fingerprint. Do/Say at the newest edge are attempts, not outcomes.
    // Story actions are treated as canonical because Story mode directly authors narration.
    // -------------------------------------------------------------------------
    const acceptedHistory = () => {
        const arr = history.slice(-8).map(a => ({
            type: String(a?.type || ""),
            text: String(a?.text ?? a?.rawText ?? "")
        }));
        while (arr.length && ["do", "say"].includes(arr[arr.length - 1].type)) arr.pop();
        return arr;
    };
    const acceptedHash = () => simpleHash(acceptedHistory().map(a => `${a.type}:${a.text}`).join("\n\u241E\n"));
    const recentAcceptedText = () => acceptedHistory().slice(-3).map(a => a.text).join("\n\n").slice(-1200);
    // A fact the story established stays established. The 3-action window above
    // is right for "what just happened"; it is wrong for "has this ever been
    // stated", which is what grounding a role or checking whether a detail was
    // invented actually asks. An NPC introduced as a ganger five turns ago was
    // still introduced as a ganger.
    const storyText = () => acceptedHistory().map(a => a.text).join("\n\n").slice(-20000);

    // -------------------------------------------------------------------------
    // Hidden record parser. Complete snapshots replace current snapshot fields.
    // The canonical transport uses plain-text sentinels, but the parser also accepts
    // the old <<NEMESIS>> format and a bounded loose fallback for model noncompliance.
    // -------------------------------------------------------------------------
    const parseRecordBody = body => {
        const out = {};
        let lastKey = "";
        for (const line of String(body || "").split("\n")) {
            const key = fieldKeyOf(line);
            if (!key) {
                if (lastKey && normalize(stripBullet(line))) {
                    out[lastKey] = safeLine(
                        `${out[lastKey] || ""} ${stripBullet(line)}`,
                        lastKey === "history" ? 1500 : 950
                    );
                }
                continue;
            }
            const bare = stripBullet(line);
            const value = safeLine(
                bare.slice(bare.indexOf(":") + 1).replace(/^\**\s*|\s*\**$/g, ""),
                key === "history" ? 1500 : 950
            );
            out[key] = value;
            lastKey = key;
        }
        return out;
    };

    const parseRecordBlock = (raw, startToken = START, endToken = END) => {
        const lower = raw.toLowerCase();
        const begin = lower.indexOf(startToken.toLowerCase());
        const finish = lower.lastIndexOf(endToken.toLowerCase());
        const body = (
            begin !== -1 && finish !== -1 && begin < finish
            ? raw.slice(begin + startToken.length, finish)
            : raw
        ).trim();
        return parseRecordBody(body);
    };

    const extractBounded = (source, startToken, endToken, records, debug) => {
        let cursor = 0;
        let rebuilt = "";
        const lowerSource = source.toLowerCase();
        const lowerStart = startToken.toLowerCase();
        const lowerEnd = endToken.toLowerCase();
        while (cursor < source.length) {
            const start = lowerSource.indexOf(lowerStart, cursor);
            if (start === -1) {
                rebuilt += source.slice(cursor);
                break;
            }
            rebuilt += source.slice(cursor, start);
            const end = lowerSource.indexOf(lowerEnd, start + startToken.length);
            if (end === -1) {
                // UNTERMINATED RECORD.
                // The model opened a record and never closed it. Consume exactly the
                // run of field lines that follows and nothing more, so the story prose
                // after it always survives. `break` here is what used to delete the
                // player's entire generation.
                const afterToken = start + startToken.length;
                const tail = source.slice(afterToken);
                let scanned = 0;
                let consumed = 0;
                let fieldsSeen = 0;
                for (const line of tail.split("\n")) {
                    const lineLen = line.length + 1;
                    if (fieldKeyOf(line)) {
                        scanned += lineLen;
                        consumed = scanned;
                        fieldsSeen++;
                        continue;
                    }
                    if (normalize(stripBullet(line)) === "") {
                        scanned += lineLen;
                        continue;
                    }
                    break;
                }
                if (fieldsSeen >= 2) {
                    const raw = source.slice(start, afterToken + consumed);
                    records.push({
                        raw,
                        data: parseRecordBlock(raw, startToken, endToken),
                        loose: true
                    });
                    if (debug) rebuilt += `\n${raw.trim()}\n`;
                    cursor = afterToken + consumed;
                    continue;
                }
                // Not enough field lines to be a real record. Keep the text verbatim;
                // the orphaned-sentinel cleanup below removes the stray BEGIN marker.
                rebuilt += source.slice(start);
                break;
            }
            const raw = source.slice(start, end + endToken.length);
            records.push({ raw, data: parseRecordBlock(raw, startToken, endToken), loose: false });
            if (debug) rebuilt += `\n${raw}\n`;
            cursor = end + endToken.length;
        }
        return rebuilt;
    };

    const extractLooseRecords = (source, records, debug) => {
        if (!NS.expectRecord) return source;
        let rebuilt = source;

        // Most common noncompliance: the model emits only "mode: none" and omits
        // both sentinels. Strip and accept it so bookkeeping cannot leak into prose.
        // Field labels may arrive decorated: "> mode:", "**mode:**", "- mode:".
        const DECOR = "[ \\t>*_#-]*";
        const F = key => `${DECOR}\\**${key}\\**${DECOR}\\s*:`;
        const nonePattern = new RegExp(
            `\\s*(?:NEMESIS\\s+RECORD\\s+BEGIN\\s*)?${F("mode")}\\s*none\\s*(?:NEMESIS\\s+RECORD\\s+END)?`,
            "i"
        );
        const noneMatch = rebuilt.match(nonePattern);
        if (noneMatch) {
            const raw = noneMatch[0];
            records.push({ raw, data: { mode: "none" }, loose: true });
            rebuilt = rebuilt.slice(0, noneMatch.index) + (debug ? `\n${raw.trim()}\n` : "") + rebuilt.slice(noneMatch.index + raw.length);
        }

        // Upsert/maintenance fallback. Require the complete ordered field set ending
        // in Urgency so ordinary narrative text cannot accidentally become a record.
        // Delta records mean the field set is no longer fixed, so this can no
        // longer demand all ten fields in order. Require the two every record
        // must carry — mode and name — plus at least one more known field.
        // Ordinary prose does not produce consecutive "mode:" and "name:" lines,
        // so this stays specific enough to be safe.
        const loosePattern = new RegExp(
            `\\s*(?:NEMESIS\\s+RECORD\\s+BEGIN\\s*)?${F("mode")}\\s*(?:upsert|maintenance)[^\\r\\n]*`
            + `[\\r\\n]+${F("name")}[^\\r\\n]*`
            + `(?:[\\r\\n]+${DECOR}\\**(?:${FIELD_KEYS.slice(2).join("|")})\\**${DECOR}\\s*:[^\\r\\n]*)+`
            + `(?:\\s*NEMESIS\\s+RECORD\\s+END)?`,
            "i"
        );
        for (let guard = 0; guard < 2; guard++) {
            const match = rebuilt.match(loosePattern);
            if (!match) break;
            const raw = match[0];
            records.push({ raw, data: parseRecordBody(raw), loose: true });
            rebuilt = rebuilt.slice(0, match.index) + (debug ? `\n${raw.trim()}\n` : "") + rebuilt.slice(match.index + raw.length);
        }

        // Last-resort model fallback: if an unbounded upsert begins at the very
        // start of the post-Inner-Self output, accept its first paragraph when it
        // contains enough Nemesis fields to be unmistakable bookkeeping.
        if (!records.some(r => ["upsert", "maintenance"].includes(normalize(r.data?.mode || "").toLowerCase()))) {
            const head = rebuilt.match(new RegExp(
                `^\\s*${F("mode")}\\s*(?:upsert|maintenance)\\s*[\\s\\S]*?(?=\\n\\s*\\n|$)`, "i"
            ));
            if (head) {
                const raw = head[0];
                const data = parseRecordBody(raw);
                // A delta may legitimately carry only mode, name and one field, so
                // this can no longer demand four. Both anchors must be present and
                // at least one substantive field must follow them.
                const anchored = safeLine(data.mode || "") !== "" && safeLine(data.name || "") !== "";
                const fieldCount = FIELD_KEYS.filter(key => safeLine(data[key] || "") !== "").length;
                if (anchored && fieldCount >= 3) {
                    records.push({ raw, data, loose: true });
                    rebuilt = rebuilt.slice(raw.length);
                    if (debug) rebuilt = `\n${raw.trim()}\n${rebuilt}`;
                }
            }
        }
        return rebuilt;
    };

    const stripAndGetRecords = debug => {
        const records = [];
        const original = text;
        // Extraction always runs with echoing OFF. Echoing a record back into the
        // text mid-pass makes later passes re-parse it and count it twice.
        let rebuilt = extractBounded(text, START, END, records, false);
        rebuilt = extractBounded(rebuilt, LEGACY_START, LEGACY_END, records, false);
        rebuilt = extractLooseRecords(rebuilt, records, false);

        // Remove accidental echoes of prompt wrapper tags and orphaned sentinels.
        rebuilt = rebuilt
            .replace(/<\/?NEMESIS-[A-Z-]+>/gi, "")
            .replace(/NEMESIS\s+RECORD\s+(?:BEGIN|END)/gi, "")
            .replace(/<<(?:NEMESIS|ENDNEMESIS)>>/gi, "");

        rebuilt = rebuilt.replace(/\n\n\n+/g, "\n\n").trim();

        // SAFETY NET. Bookkeeping removal must never be able to empty a generation
        // that contained real prose. If it somehow did, delete only the lines that
        // are unmistakably bookkeeping and keep everything else.
        if (!rebuilt && normalize(original)) {
            const salvage = original
                .replace(/<\/?NEMESIS-[A-Z-]+>/gi, "")
                .replace(/NEMESIS\s+RECORD\s+(?:BEGIN|END)/gi, "")
                .replace(/<<(?:NEMESIS|ENDNEMESIS)>>/gi, "")
                .replace(new RegExp(
                    `^[ \\t>*_#-]*\\**(?:${FIELD_KEYS.join("|")})\\**[ \\t]*:[^\\n]*$`, "gim"
                ), "")
                .replace(/\n\n\n+/g, "\n\n")
                .trim();
            if (salvage) rebuilt = salvage;
        }

        // Debug NEVER writes the record back into the story. Doing that makes it
        // part of permanent history, feeds it back into later context, and shifts
        // the accepted-history hash. The raw text is reported in the debug block.
        if (debug && records.length) {
            NS.debugRaw = records.map(r => String(r.raw).trim()).join("\n---\n").slice(0, 900);
        } else if (debug) {
            NS.debugRaw = "";
        }

        text = rebuilt;
        if (!text) text = "\u200B";
        return records;
    };

    // -------------------------------------------------------------------------
    // Active Nemesis detection / last-seen tracking.
    // -------------------------------------------------------------------------
    const updateLastSeen = cards => {
        const recent = history.slice(-5).map(a => String(a?.text ?? a?.rawText ?? "")).join("\n");
        for (const { snap } of cards) {
            if (nameInText(snap.name, recent)) NS.lastSeen[snap.name] = turn();
        }
    };

    const activeNemeses = cards => {
        const recent = history.slice(-5).map(a => String(a?.text ?? a?.rawText ?? "")).join("\n");
        return cards.filter(({ snap }) => nameInText(snap.name, recent));
    };

    // -------------------------------------------------------------------------
    // Return opportunity selection. JS chooses opportunity; model vetoes plausibility.
    // -------------------------------------------------------------------------
    const urgencyWeight = u => ({ low: 1, normal: 3, high: 7, extreme: 12 }[u] || 3);
    const pickReturnCandidate = (cards, cfg) => {
        if (!cfg.allowReturns || cfg.returnChance <= 0) return null;
        if ((turn() - NS.lastReturnAttempt) < cfg.returnCooldown) return null;
        if ((Math.random() * 100) >= cfg.returnChance) return null;

        const recent = history.slice(-5).map(a => String(a?.text ?? a?.rawText ?? "")).join("\n");
        const pool = cards.filter(({ snap }) => {
            if (nameInText(snap.name, recent)) return false;
            const meta = NS.cards[snap.name] || {};
            // Full cooldown applies only after the Nemesis ACTUALLY reappeared.
            if ((turn() - (meta.lastReturn ?? -999999)) < cfg.sameNemesisCooldown) return false;
            // A narrator veto costs a short retry gap, not the full cooldown.
            // Otherwise one badly-timed roll hides a Nemesis for 16 turns and a
            // 12% setting behaves far rarer than 12%.
            if ((turn() - (meta.lastVeto ?? -999999)) < VETO_COOLDOWN) return false;
            if (CONFIRMED_DEAD.test(String(snap.status || ""))) return false;
            if (String(snap.returnState).toLowerCase() === "closed") return false;
            const unseen = turn() - (NS.lastSeen[snap.name] ?? -999999);
            // You cannot RE-enter a scene you never left. "eligible" had no
            // absence test at all, so a Nemesis the story was actively handling
            // could be offered a return while standing in the room. lastSeen is
            // refreshed both by their name appearing in recent text AND by any
            // record written for them, so this reads as "the story is still
            // dealing with this character right now".
            //
            // Reported live: a wounded soldier was captured and carried to a
            // medical tent, and the prose then called her "the prisoner" and
            // "she" for several turns. Her NAME never appeared, so the name check
            // cleared her, her card said eligible, and the model was told to
            // bring her into the scene she was already lying in. It resolved that
            // by putting her back on the battlefield under debris, every retry.
            if (unseen < MIN_ABSENCE_TURNS) return false;
            const stalePresent = snap.returnState === "present" && cfg.stalePresentTurns <= unseen;
            // Dormant decays back to returnable. Nothing writes a Nemesis card
            // while its subject is offscreen, so a living Nemesis marked dormant
            // had no event that could ever promote it back to eligible: it went
            // present -> dormant -> offscreen -> unreachable, permanently, and a
            // 100% return chance rolled against a pool it was not in. This is the
            // same self-healing rule "present" already has, applied to the state
            // that lacked it. Permanent removal is what "closed" is for.
            const staleDormant = snap.returnState === "dormant" && cfg.stalePresentTurns <= unseen;
            return snap.returnState === "eligible" || stalePresent || staleDormant;
        });
        if (!pool.length) return null;

        const total = pool.reduce((n, x) => n + urgencyWeight(x.snap.urgency), 0);
        let r = Math.random() * total;
        let chosen = pool[pool.length - 1];
        for (const item of pool) {
            r -= urgencyWeight(item.snap.urgency);
            if (r < 0) { chosen = item; break; }
        }
        // Offering is not returning. Record the offer; the output hook decides
        // which cooldown it earns once we can see whether they actually appeared.
        NS.lastReturnAttempt = turn();
        NS.lastCandidate = chosen.snap.name;
        NS.cards[chosen.snap.name] ??= {};
        NS.cards[chosen.snap.name].lastOffer = turn();
        NS.pendingReturn = { name: chosen.snap.name, turn: turn() };
        return chosen;
    };

    // -------------------------------------------------------------------------
    // Context prompt builders.
    // -------------------------------------------------------------------------
    const snapshotForPrompt = snap => renderSnapshot(snap).slice(0, 1400);

    const recordFormat = `
After any Inner Self parenthetical operation, the NEXT text must be this hidden record, followed by normal story prose. Never omit BEGIN or END.
${START}
mode: upsert
name: Darius
title: One-Eye
status: Alive
physical: Missing left eye due to the player
position: None established
relationships: The player is a personal enemy; Darius wants revenge
history: The player destroyed Darius's left eye; Darius escaped alive
drive: Revenge, but cautious
return: eligible
urgency: high
${END}
For no qualifying change use exactly:
${START}
mode: none
${END}
mode is upsert, maintenance, or none. return is present, eligible, dormant, or closed. urgency is low, normal, high, or extreme.
    `.trim();

    const significanceRules = playerRef => `
A new Nemesis requires a named or uniquely identifiable NPC plus major unresolved
personal history with ${playerRef}. That history can run in EITHER direction, and
both directions qualify on their own.

HARMED BY ${playerRef}: severe lasting injury with survival, near or apparent death
with possible survival, permanent crippling, meaningful sparing, serious
humiliation. Permanent crippling they survive is sufficient by itself; do not
wait for a revenge speech.

THEY HARMED ${playerRef}: beat them in a fight, put them down, disarmed or robbed
them, wounded or nearly killed them, humiliated them, or walked away the clear
winner. This is EQUALLY sufficient by itself — an enemy who WINS is exactly the
kind worth remembering, and does NOT need to be injured by the player first in
order to qualify. Do not wait for ${playerRef} to hurt them back.

EITHER DIRECTION: major betrayal, credible personal death threat, explicit
revenge or obsession, repeated major confrontation, major harm to someone
important to the other, or a major rescue or life debt.

Routine hostility, a minor one-off scuffle, a shove, generic enemies,
acquaintances, and ordinary dislike do not qualify in either direction.
Track only evolving current truth: lasting injuries/scars/replacements, life status, rank/authority, major relationships, compact causal history, current drive, recurrence state. Do not duplicate baseline appearance. Current facts replace superseded facts; History retains the cause.
Judge only events already established by narration before the current unresolved Do/Say attempt.
    `.trim();

    // Two triggers. The Notes limit is the player-facing "this card is getting
    // long" signal; the Entry pressure test is the one that matters, because the
    // Entry is what AI Dungeon budgets and what the model reads. Keying only on
    // Notes let a card reach 1122/1000 in the Entry while Notes was still well
    // under its limit — the script then has to elide mechanically, which loses
    // wording the model could have compressed meaningfully instead. 75% leaves a
    // real runway: the model gets several turns to compress semantically before
    // the Entry hits the budget and mechanical elision takes over.
    const maintenanceTarget = (cards, cfg) => cards
        .filter(({ card }) => String(card.description || "").length > cfg.historySoftLimit
            || String(card.entry || "").length >= ENTRY_BUDGET * 0.75)
        .sort((a, b) => String(b.card.entry || "").length - String(a.card.entry || "").length)[0] || null;

    // Make a small amount of room by trimming only the oldest Recent Story text.
    // This is used only when Inner Self or a large scenario has already filled the
    // model context. It preserves the newest story, Plot Components, and Inner Self task.
    const reserveContextRoom = required => {
        const maxChars = Number.isInteger(info.maxChars) ? info.maxChars : Infinity;
        const rawBefore = maxChars - text.length - 32;
        const before = Math.max(0, rawBefore);
        if (!Number.isFinite(maxChars) || rawBefore >= required) {
            return { before, after: before, trimmed: 0 };
        }
        // rawBefore may be negative if the assembled prompt is already oversized;
        // include that deficit when calculating how much old Recent Story to remove.
        const need = required - rawBefore;
        const recent = /Recent\s*Story\s*:\s*/i.exec(text);
        if (!recent) return { before, after: before, trimmed: 0 };
        const storyStart = recent.index + recent[0].length;
        let storyEnd = text.indexOf("<SYSTEM>", storyStart);
        if (storyEnd === -1) storyEnd = text.length;
        // Preserve the newest ~1600 chars of Recent Story whenever possible.
        // This is enough to retain the immediately preceding event while freeing room
        // for a compact bookkeeping instruction in saturated scenarios.
        const minimumRecentTail = 1600;
        const removable = Math.max(0, storyEnd - storyStart - minimumRecentTail);
        if (removable <= 0) return { before, after: before, trimmed: 0 };
        let remove = Math.min(need, removable);
        let cut = storyStart + remove;
        // Avoid starting in the middle of a word/sentence fragment when cheap.
        const cap = Math.min(storyEnd - minimumRecentTail, cut + 160);
        while (cut < cap && text.charCodeAt(cut) > 32) cut++;
        remove = cut - storyStart;
        text = text.slice(0, storyStart) + text.slice(cut);
        const after = Math.max(0, maxChars - text.length - 32);
        return { before, after, trimmed: remove };
    };

    const emitDebug = cfg => {
        if (!cfg?.debug) return;
        const c = NS.debugContext || {};
        const o = NS.debugOutput || {};
        const d = NS.diagnostic || {};
        const s = NS.stages || {};
        const verdict = (() => {
            if (s.contextRan !== true) return "Context hook never ran — check the Context modifier wiring";
            if (s.enabled === false) return "Disabled in Configure Nemesis";
            if (s.suppressed) return `Context suppressed by ${s.suppressed}`;
            if (d.needsAnalysis === false && !c.task) return "No analysis needed this turn (history unchanged)";
            if (d.taskPresent === false) return "Task did not make it into the final Context text";
            if (s.outputRan !== true) return "Output hook never ran — check the Output modifier wiring";
            if (o.records === 0) return "Model returned no Nemesis record. If this repeats, confirm the Output tab calls NemesisSystem BEFORE InnerSelf";
            if (s.parserAccepted === false) return "Record found but its fields were unusable";
            if (s.cardWritten === false) return "Story Card write failed";
            return "";
        })();
        try {
            state.message = [
                `Nemesis Debug ${VERSION}`,
                verdict ? `>> FIRST FAILED STAGE: ${verdict}` : ">> Pipeline OK",
                s.rolledBack ? `>> Rolled back discarded write: ${s.rolledBack}${s.rollbackContextFixed ? " (stale entry also removed from this turn's context)" : ""}` : "",
                "",
                `Turn: ${turn()} | history: ${history.length}`,
                `First hook this adventure: ${NS.firstHook ? `${NS.firstHook.hook} @ actionCount ${NS.firstHook.actionCount}, history ${NS.firstHook.historyLen}` : "unknown"}`,
                `Config card created: ${NS.configCreated ? `${NS.configCreated.hook} @ actionCount ${NS.configCreated.actionCount}, history ${NS.configCreated.historyLen}` : "pre-existing or not yet"}`,
                NS.configFailed ? `Config card creation FAILED ${NS.configFailed}x (addStoryCard refused)` : "",
                globalThis.__nemesisEnvFail ? `Environment guard blocked on: ${globalThis.__nemesisEnvFail}` : "",
                `Previous action: ${d.prevType || "unknown"}`,
                `Accepted actions: ${d.acceptedCount ?? "?"}`,
                `Accepted hash: ${d.currentHash || "none"}`,
                `Last analyzed hash: ${d.lastHash || "none"}`,
                `Needs analysis: ${d.needsAnalysis === true ? "YES" : d.needsAnalysis === false ? "NO" : "?"}`,
                `Context task decision: ${c.analysis || "unknown"}`,
                `Task variant: ${c.task || "none"}`,
                `Task chars: ${d.taskChars ?? 0}`,
                `Task present in final Context text: ${d.taskPresent ? "YES" : "NO"}`,
                `Strict SYSTEM task present: ${d.strictSystem ? "YES" : "NO"}`,
                `Context chars: ${d.contextBefore ?? "?"} -> ${d.contextAfter ?? "?"}`,
                `Room: ${c.roomBefore ?? "?"} -> ${c.roomAfter ?? "?"} | story trimmed: ${c.trimmed || 0}`,
                `Expected record entering Output: ${d.expectAtOutput ? "YES" : "NO"}`,
                `Raw canonical BEGIN found: ${d.rawCanonical ? "YES" : "NO"}`,
                `Raw legacy <<NEMESIS>> found: ${d.rawLegacy ? "YES" : "NO"}`,
                `Raw loose mode line found: ${d.rawLooseMode ? "YES" : "NO"}`,
                `Parsed records: ${o.records ?? 0}`,
                `Parsed mode: ${o.mode || "none"}`,
                `Parsed NPC: ${o.name || "none"}`,
                `Card result: ${o.card || "none"}`,
                `Story cards before/after Output: ${d.cardsBeforeOutput ?? "?"}/${d.cardsAfterOutput ?? "?"}`,
                `Loose fallback: ${o.loose ? "YES" : "NO"}`,
                "",
                "-- Return pipeline --",
                `Return roll: ${s.returnRolled === true ? "PASSED" : s.returnRolled === false ? "no candidate selected" : "—"}`,
                `Candidate: ${s.returnCandidate || "none"}`,
                `Candidate status: ${s.returnStatus || "—"}`,
                `Candidate return state: ${s.returnState || "—"}`,
                `Return prompt inserted: ${s.returnPromptInserted === true ? "YES" : s.returnPromptInserted === false ? "NO" : "—"}${s.returnCarrier ? ` (${s.returnCarrier})` : ""}`,
                `Model reintroduced candidate: ${s.returnResult === "appeared" ? "YES" : s.returnResult === "vetoed" ? "NO (vetoed)" : "—"}`,
                `Cooldown committed: ${s.returnCooldown || "—"}`,
                s.unsupportedDetail
                    ? `\n!! Detail with no match in the story text: ${s.unsupportedDetail}\n   (may be a paraphrase — check the prose before trusting it)`
                    : "",
                // Where the script corrected the model rather than just recording
                // it. Silent fixes are the ones that look like magic in a live
                // test, so they are reported alongside the flags.
                s.positionFromStory
                    ? `>> Position filled from the story: ${s.positionFromStory}` : "",
                s.historyMerged
                    ? `>> History would have been replaced; kept the earlier event: ${s.historyMerged}` : "",
                NS.debugRaw ? `\n-- Raw record as received --\n${NS.debugRaw}` : ""
            ].filter(l => l !== "").join("\n");
        } catch {}
    };
    // -------------------------------------------------------------------------
    // INPUT
    // -------------------------------------------------------------------------
    if (hook === "input") {
        // Keep setup friction at zero: just ensure the config exists and mirror player name.
        getConfig();
        text ||= "\u200B";
        return;
    }

    // -------------------------------------------------------------------------
    // CONTEXT
    // Must run AFTER InnerSelf("context") so this instruction appears later and can
    // explicitly coexist with Inner Self's required parenthetical operation.
    // -------------------------------------------------------------------------
    if (hook === "context" || (!hook && Number.isInteger(info.maxChars))) {
        const cfg = getConfig();
        NS.expectRecord = false;
        NS.pendingAnalysisHash = "";
        NS.debugContext = {};
        // Fresh per-turn pipeline trace.
        NS.stages = { contextRan: true, enabled: cfg.enabled };
        // How the model should refer to the player. A configured name must reach
        // the record values; every example used to say "the player", so that is
        // what the model wrote back regardless of what the config said.
        const namedPlayer = !!(cfg.player && cfg.player !== "the protagonist");
        const playerRef = namedPlayer ? cfg.player : "the player";
        // Retry / Erase + Continue: drop a write whose generation was discarded.
        rollbackDiscardedWrite();
        NS.diagnostic = {
            ...(NS.diagnostic || {}),
            prevType: String(history[history.length - 1]?.type || "none"),
            contextBefore: text.length,
            taskChars: 0,
            taskPresent: false,
            rawCanonical: false,
            rawLegacy: false,
            rawLooseMode: false,
            expectAtOutput: false,
            cardsBeforeOutput: storyCards.length,
            cardsAfterOutput: storyCards.length
        };
        if (
            !cfg.enabled
            || globalThis.stop === true
            || state.InnerSelf?.AC?.event === true
        ) {
            NS.debugContext = { analysis: "skipped", task: "none", roomBefore: 0, roomAfter: 0, trimmed: 0 };
            emitDebug(cfg);
            return;
        }

        const cards = nemesisCards();
        updateLastSeen(cards);
        const active = activeNemeses(cards);
        const currentHash = acceptedHash();
        const needsAnalysis = !!(cfg.autoDiscover && currentHash && currentHash !== NS.lastAnalysisHash);
        NS.diagnostic.acceptedCount = acceptedHistory().length;
        NS.diagnostic.currentHash = currentHash;
        NS.diagnostic.lastHash = NS.lastAnalysisHash || "";
        NS.diagnostic.needsAnalysis = needsAnalysis;
        const maintenance = maintenanceTarget(cards, cfg);
        const returnCandidate = pickReturnCandidate(cards, cfg);

        const survival = cfg.survivalGuidance ? `
<NEMESIS-SURVIVAL-GUIDANCE>
Named recurring opponents need not fight to the death. According to personality, injury, fear, odds, goals, allies, and escape routes they may retreat, surrender, be rescued or separated, hide, or survive an apparent death. Never override a certainly lethal established outcome or force cowardice on a character who would stay.
</NEMESIS-SURVIVAL-GUIDANCE>` : "";

        const activeContext = active.slice(0, cfg.maxActiveContextCards).map(({ snap }) => snap.name).join(", ");
        // RETURN OPPORTUNITY.
        // This used to be its own <NEMESIS-RETURN-OPPORTUNITY> tag budgeted AFTER
        // the bookkeeping task. In a saturated context — which is every long
        // adventure — there was never room left, so it was silently dropped and
        // returns could not fire at all. It now travels INSIDE the same SYSTEM
        // block as the bookkeeping task, so it is budgeted and reserved with it
        // and carries the same authority.
        const rc = returnCandidate ? returnCandidate.snap.name : "";
        // How long they have actually been gone. This is what tells the model
        // whether a stance recorded mid-injury is still true.
        const offscreenTurns = returnCandidate
            ? Math.max(0, turn() - (NS.lastSeen[rc] ?? turn()))
            : 0;
        // How long the stance fields have gone untouched while the rest of the
        // card moved on. This is a fact the script has and the model does not.
        const rcMeta = returnCandidate ? (NS.cards[rc] || {}) : {};
        const stanceAge = returnCandidate && Number.isInteger(rcMeta.stanceTurn)
            ? Math.max(0, turn() - rcMeta.stanceTurn) : 0;
        const stanceSkipped = returnCandidate
            ? Math.max(0, (rcMeta.updates || 0) - (rcMeta.stanceUpdates || 0)) : 0;
        const stanceNote = (returnCandidate && (stanceAge >= 5 || stanceSkipped >= 1))
            ? `\nSTANCE AGE: drive/relationships/urgency have not changed for ${stanceAge} accepted turns${stanceSkipped ? `, across ${stanceSkipped} update(s) that changed other fields` : ""}. Check whether they still describe ${rc}.`
            : "";
        const returnSectionFull = returnCandidate ? `
## RETURN OPPORTUNITY — ${rc}
${snapshotForPrompt(returnCandidate.snap)}
${rc} has been off-screen and is eligible to re-enter the story. Bring ${rc} into THIS scene unless something concrete already established makes it impossible right now (location, travel time, access, knowledge, injuries, world rules).
If ${rc} is ALREADY in this scene — present, held, captive, unconscious, or under guard — this offer is void. Do not stage a second entrance for someone who never left, and never move them somewhere else to justify one.
Their reappearance is itself a deliberate act — they chose this moment and this
ground. If their drive still describes a momentary reaction from the encounter
that created them, it is out of date; re-state it as what they are pursuing now.
How they appear follows their Drive, not a default: attack, ambush, watch from a distance, stalk, threaten, send someone else, avoid, flee, negotiate, ask for help, repay a debt, betray, or assist. A Nemesis is not obliged to fight.
Reintroduce them inside the ordinary flow of the scene. Never teleport them and never grant them knowledge they could not have.
They have been absent from the active story for ${offscreenTurns} accepted turns. That is a signal their current-state fields may be STALE — it is NOT a measure of fictional time. Those turns may cover weeks, one afternoon, or minutes of a single fight. Judge elapsed time only from the chronology the story itself has established, and do not grant recovery, treatment, new equipment or abilities, promotion, new allies or a change of heart merely because turns have passed. Reassess drive, relationships and urgency, and change them only where the story supports it.
What their last outcome with ${playerRef} changed, if anything, is part of who walks back in. Winning does not promote anyone by itself — but if that outcome plausibly changed what they can command, in people, ground, reputation or resources, this scene may show it. If it changed nothing, show nothing: most wins are just wins.${stanceNote}
If it is genuinely impossible right now, write the scene without mentioning them at all.
` : "";
        const returnSectionCompact = returnCandidate ? `
## RETURN OPPORTUNITY — ${rc}
${rc} has been absent ${offscreenTurns} accepted turns (a staleness signal, not elapsed fictional time) and is eligible. Bring ${rc} into this scene unless established facts make it impossible, or unless they are already in it — present, held or captive — in which case do not stage a second entrance. Their reappearance is itself a deliberate act — they chose this moment, so a drive that is still a momentary reaction from the last encounter is out of date. Reassess drive/relationships/urgency; change them only where the story supports it. Their Drive decides how: attack, ambush, watch, stalk, threaten, avoid, negotiate, ask for help, repay a debt, betray or assist. Never teleport them. If impossible, do not mention them.
Winning promotes nobody by itself; show what their last outcome changed only if it actually changed something — most wins are just wins.
Current: ${safeLine(returnCandidate.snap.physical)} | ${safeLine(returnCandidate.snap.drive)}${stanceNote}
` : "";
        const returnSectionMicro = returnCandidate
            ? `\nRETURN: bring ${rc} into this scene if plausible; their Drive decides how (${safeLine(returnCandidate.snap.drive, 60)}). If impossible, omit them.\n`
            : "";

        // ENCOUNTER RESOLUTION.
        // Observed live: a Nemesis won decisively, then could not stop winning.
        // The player went limp and the scene kept escalating because nothing told
        // the story a decided confrontation is finished. Only injected while a
        // Nemesis is actually present.
        const activeNames = active.slice(0, cfg.maxActiveContextCards).map(({ snap }) => snap.name);
        const resolutionSection = activeNames.length ? `
## ENCOUNTER RESOLUTION — ${activeNames.join(", ")}
If the confrontation between them and ${playerRef} has been DECIDED — one side is
down, disarmed, fled, unconscious, submitting, or no longer resisting — the scene
is over and must move on. A decided encounter does not continue so that someone
can extract one more reaction. Refusing to react is not a reason to keep going.
Moving on looks like: taking what they came for and leaving, calling their people
off, a parting line and walking away, dragging the loser somewhere, breaking off
because attention is arriving, or the loser getting away. Winning and staying are
not the same thing; a winner who cannot leave has not won anything.
If the encounter is genuinely still undecided, continue it normally.
` : "";
        const resolutionMicro = activeNames.length
            ? `\nRESOLUTION: if the fight with ${activeNames[0]} is already decided (someone down, disarmed, fled or not resisting), end the scene — leave, take something, call people off, or walk. Do not keep it going for a reaction.\n`
            : "";

        const shouldRequestRecord = needsAnalysis || !!maintenance;
        const existingForAnalysis = activeContext
            ? `Existing active Nemesis names: ${activeContext}. Their Nemesis card entries are authoritative.`
            : "No existing Nemesis is currently active.";
        // Names of every Nemesis that already has a card. The model needs this to
        // decide between a full creation record and a compact delta update.
        // Names only — a few tokens, and it is what makes delta records possible.
        const knownNames = cards.map(({ snap }) => snap.name).filter(Boolean).slice(0, 12);
        const knownList = knownNames.length
            ? `Nemeses that ALREADY have a card (send deltas for these): ${knownNames.join(", ")}.`
            : "No Nemesis cards exist yet; any qualifying record is a creation.";
        const maintenancePrompt = maintenance
            ? `Maintenance target: ${maintenance.snap.name}. This card is near its display limit. Rewrite History shorter WITHOUT losing an event: keep how the rivalry started, every outcome that changed them, and where it stands now; collapse repeated confrontations of the same kind into one clause that says how many and what came of them. Losing wording is fine, losing an event is not. Compress Relationships too if it repeats History.\n${snapshotForPrompt(maintenance.snap)}`
            : "";

        // The full task sits close to the context ceiling once Inner Self's own
        // tasks are in the same context, and the drop from full to compact is a
        // cliff — every rule vanishes at once to save a few hundred characters.
        // These two sections are the most compressible: they teach calibration
        // and stance in prose, and a "standard" variant keeps the load-bearing
        // rules (record shape, field discipline, outcome drivers, adaptation)
        // while spending far less on them.
        const calibrationSection = `  A Nemesis said ${playerRef} would not get away. RIGHT: a drive naming only what
  they were shown pursuing. WRONG: a drive adding their public standing as the
  motive, which nobody mentioned.
  A Nemesis returned in one piece of replacement gear, keeping to cover. RIGHT:
  capabilities naming that gear and the cover. WRONG: capabilities naming
  equipment that never appeared. Plausible, and still invented.
`;
        const stanceSection = `STANCE FIELDS — drive, relationships, urgency.
These describe what the NPC feels and wants RIGHT NOW, so they go stale in a way
physical, position and history do not. REASSESS all three every time you write a
record; RE-STATE one only when its value is no longer supported, or a new value
is.
MOMENTARY vs ONGOING. A stance describing a REACTION — shock, panic, fresh rage,
staying alive right now — describes the minute it was written in, not a standing
motivation. The moment the NPC does anything deliberate, that reaction has passed
and drive must be re-stated as what they are actually pursuing. Deliberate acts
include seeking treatment, arming themselves, recruiting help, changing ground
or tactics, and choosing when and where to reappear. Someone who spent that time
getting fitted with a replacement and picking his ground is not in shock; he is
hunting. Say that instead.
What counts as support: how they behave in this scene, elapsed time or
circumstances the story established, or something ${playerRef} did to them. Their
own choice to reappear is evidence — someone who walks back into ${playerRef}'s
path is no longer "surviving first". Do not invent a stance change you cannot
point to. Physical, position and history stay put unless the story changed them.

`;
        const stanceSectionBrief = `STANCE FIELDS — drive, relationships, urgency go stale as physical, position
and history do not. Reassess all three every record; re-state one only where the
story supports it. A reaction — shock, panic, fresh rage, staying alive right now
— is not a standing motivation once they do anything deliberate.

`;

        const recordTask = shouldRequestRecord ? `
<SYSTEM>
# NEMESIS SYSTEM
# STRICT OUTPUT FORMAT
You must output exactly one short Nemesis bookkeeping record followed by the normal story continuation.

## OUTPUT ORDER — REQUIRED
1. If an earlier Inner Self SYSTEM instruction requires a parenthetical brain operation, output it first exactly as Inner Self requires, followed by one space.
2. Then exactly one Nemesis record, beginning ${START} and ending ${END}.
3. Immediately after ${END}, continue the story prose, which must be the majority of the response.
4. Do not explain the record and put no other prose before it.

## NEMESIS DECISION
${significanceRules(playerRef)}
- You may consider the CURRENT player Do/Say action only if the continuation you are about to write will actually establish that consequence as canon. Decide that outcome first; if the action does not succeed or creates no qualifying persistent development, do not record it. Record and continuation must never contradict each other.
- Upserts are complete snapshots: preserve still-true facts, replace superseded ones.
- ${existingForAnalysis}
${maintenancePrompt}

${returnSectionFull}${resolutionSection}
## EXACT RECORD SHAPE
${knownList}

Angle brackets below describe what belongs on the line. They are instructions,
never values, and no story facts appear here to reuse. Never write a bracket
into a record.

A) NEW Nemesis — a name with no card yet. Give the full initial state:
${START}
mode: upsert
name: <name, as this story writes it>
title: <epithet this story used, else None established>
status: <Alive | Injured | Missing | Confirmed dead>
physical: <lasting bodily change shown here, else None established>
capabilities: <gear, allies or tactics shown here, else None established>
position: <role or standing this story gave them, else None established>
relationships: <what they are to ${playerRef}, and what made it so>
history: <the whole rivalry so far, compact — every major event, oldest first>
drive: <what they pursue now, short phrase>
return: <eligible | dormant | present | closed>
urgency: <low | normal | high>
${END}

B) EXISTING Nemesis — output ONLY mode, name, and the fields that actually
changed this turn. Every field you omit keeps its current value automatically.
Do NOT repeat unchanged fields. Most updates are two or three lines.
history is the ONE cumulative field: when you send it, send the whole rivalry
including what the card already records, not just the newest event.
${START}
mode: upsert
name: <the same name as their existing card>
<one field that changed this turn>: <its new value>
<another field that changed this turn>: <its new value>
${END}

OUTCOME DRIVERS — what an encounter changes about them
- They survive being hurt -> physical records the lasting mark.
- They LOSE, are beaten, spared, or humiliated -> capabilities records what they
  change in response, as a CONCRETE method, not a claim to have solved the
  problem. "Strikes before he is ready" is a method; "learned to counter him" is
  a claim, and a claim lets a later scene invent whatever ability would satisfy
  it. Losing teaches preparation: equipment they went and got, help they did not
  bring last time, ground they choose, a trap, an ambush, or refusing a fight
  they cannot win. A Nemesis who loses and adapts is the point of the system.
- They WIN — beat ${playerRef}, put them down, take something from them, or walk
  away on top -> history records the win plainly: what they did to ${playerRef} and
  what it cost him, in the story's own terms. If the story also establishes that
  the win changed how others treat them, position and title rise. Standing
  follows results, but the win is recorded whether or not anyone noticed it.
- They return after an absence -> new gear, allies or methods go in capabilities.
  physical is only ever their body.

UNRESOLVED NEMESES ESCALATE, THEY DO NOT RESET
Defeat, humiliation, injury, a failed plan or a lost resource never returns a
Nemesis to an earlier baseline. The story may take the SPECIFIC thing it actually
took — an ally killed, equipment destroyed, ground lost, a wound that impairs
them — and they answer that loss by adapting again in a new direction: different
allies, better preparation, traps, patience, leverage, indirect attacks, a
changed objective, or striking at what ${playerRef} values instead of at
${playerRef}. Humiliation is fuel, not a resolution; it usually intensifies or
twists a rivalry. While they live and the matter between them is unresolved, do
not write them broken, resigned, or conceding that ${playerRef} has won. A low
point is part of an arc, not the end of one. Only an outcome the story genuinely
establishes closes a rivalry.

ADAPTATION MUST RESPECT ESTABLISHED CAPABILITY
capabilities is the whole list of what a Nemesis can bring beyond ordinary
ability. Losing teaches a lesson, and a lesson is not a new power. Adaptation by
itself never grants strength, speed, senses, skill, knowledge, equipment, magic,
wealth, rank or allies. If countering what beat them needs something they do not
have, the story must first establish them getting it — training, gear, a patron,
an ally, study, whatever this setting allows. Until then they adapt with what
they already have: anticipation, ambush, position, distance, traps, numbers,
changing the objective, exploiting a habit, or refusing that kind of fight.
Knowing WHAT beat them is not the ability to answer it, and a Nemesis never
breaks this setting's own rules in order to stay dangerous.
Apply these only where the story establishes the outcome. An encounter ${playerRef}
walked away from unchanged changes nothing.

${namedPlayer ? `NAME THE PLAYER. The player character is called ${playerRef}. Write that
name in record values — "${playerRef} is a personal enemy", not "the player is a
personal enemy". Never write "the player" or "the protagonist" as a stand-in for
a character who has a name.\n` : ""}
WRITE THE SMALLEST TRUE VERSION
When the story supports a simple version and a richer one, write the simple one.
A field that says LESS than you could infer is correct; a field that says more
than the story showed is a fabrication, however plausible. The commonest
fabrications are motives nobody stated and equipment nobody showed, and "None
established" is often the right answer. Two real failures, described rather than
written out because a written-out record gets reused as continuity:
${calibrationSection}
FIELD DISCIPLINE
- physical: the lasting bodily facts the scene established — injuries, stiffness,
  limps, walking aids, replacements for what they lost. ADD new detail rather
  than dropping it. Narration that only wonders or speculates establishes
  nothing. Record the injury at the severity shown, not the diagnosis it
  implies: a hard blow, a bad sound and blood establish severe trauma to that
  part of the body, not which bone broke.
- drive: an ongoing motivation as a short phrase, not keywords — the motive and
  what they are doing about it, not the motive and a bare tactic word.
- capabilities: what they can bring to bear now that they could not before —
  equipment, allies, and tactics learned from losing. Not their body, not their
  rank. Write the concrete means, never abstract competence: "keeps distance and
  attacks from cover", "brought two of his people", "carries a shield he took
  last time" — not "learned to counter him", which lets a later scene invent
  whatever ability that would take.
- position: their standing, the one field that tracks where they RANK, so it
  needs a starting point. Record the plain role the story gave them the first
  time it gives it, ordinary and unchanged though it is: a guard, a thief, a
  servant, a healer — that IS their position. Replace it when they rise or fall;
  the old standing lives on in history. "None established" is only for when the
  story has genuinely not said what they are. Do not upgrade a plain role into a
  rank or attach a faction the story never named.
- relationships: name the relationship and what changed it, in a phrase.
- history: CUMULATIVE, and the only field that is — the whole rivalry, not the
  latest turn. Carry every major event already recorded and add the new one,
  oldest first. NEVER replace a past event with the current one: a defeat,
  victory, betrayal, maiming or sparing is permanent and stays even after it is
  avenged, because losing to them once and evening it later is a different
  rivalry from beating them. Compress old entries as the line grows; losing
  wording is fine, losing an event is not.

${stanceSection}After losing a confrontation, a typical delta is capabilities alone:
${START}
mode: upsert
name: <their name>
capabilities: <what they added in response to losing>
${END}

Update History only when the cause of a change needs recording. A status change
alone is just two lines:
${START}
mode: upsert
name: <their name>
status: Confirmed dead
${END}

For no qualifying change, output exactly:
${START}
mode: none
${END}

## ABSOLUTE FORMAT RULES
The record comes first (after any required Inner Self parenthetical), then the story. Never omit ${START} or ${END}. Never replace the record with JSON, XML, commentary or prose.
</SYSTEM>` : "";

        const compactRecordTask = shouldRequestRecord ? `
<SYSTEM>
# NEMESIS SYSTEM — STRICT OUTPUT FORMAT
After any REQUIRED Inner Self parenthetical operation, the next text MUST be ${START}. Emit exactly one Nemesis record, close it with ${END}, then write normal story prose. The story must be most of the output.
A named/identifiable NPC qualifies for major unresolved personal history: permanent severe injury with survival, near-death, major defeat/betrayal, sparing/humiliation, personal revenge/threat, repeated major conflict, or major debt/rescue. Permanent crippling injury plus survival is sufficient. Minor hostility is not.
You MAY use the current Do/Say action only if the continuation you are about to write actually establishes that qualifying consequence. Keep record and prose consistent.
ESCALATION: an unresolved Nemesis never resets to an earlier baseline. Losses take the specific thing the story took; humiliation is fuel, not a resolution. While they live and the matter is unresolved, never write them broken, resigned, or conceding the player has won.
ADAPTATION: losing teaches a lesson, not a new power. capabilities lists everything a Nemesis brings beyond ordinary ability; never narrate one matching a capability the story has not shown them acquire. They adapt with what they have — anticipation, ambush, position, distance, traps, numbers — or the story establishes them getting more first. Write concrete means, not "learned to counter him".
${returnSectionCompact}${resolutionSection}${knownList}
No change exactly:
${START}
mode: none
${END}
NEW Nemesis — full initial state:
${START}
mode: upsert
name: NAME
title: TITLE
status: STATUS
physical: PHYSICAL
capabilities: CAPABILITIES
position: POSITION
relationships: RELATIONSHIPS
history: HISTORY
drive: DRIVE
return: RETURN_STATE
urgency: URGENCY
${END}
EXISTING Nemesis — ONLY the fields that changed. Omitted fields keep their current values; never repeat unchanged fields:
${START}
mode: upsert
name: NAME
physical: WHAT CHANGED
${END}
FIRST non-whitespace text must be the required Inner Self parenthetical or ${START}. Never omit BEGIN or END.
</SYSTEM>` : "";

        const microRecordTask = shouldRequestRecord ? `
<SYSTEM>
# STRICT OUTPUT FORMAT
Start with any REQUIRED Inner Self parenthetical operation, then immediately ${START}. Otherwise start directly with ${START}. Emit one record, then ${END}, then normal story.
Current Do/Say may qualify only if the story you are about to write actually establishes it. Permanent crippling injury + survival is sufficient.
${returnSectionMicro}${resolutionMicro}${knownList}
No change: ${START}\nmode: none\n${END}
NEW: ${START}\nmode: upsert\nname: NAME\ntitle: TITLE\nstatus: STATUS\nphysical: PHYSICAL\ncapabilities: CAPABILITIES\nposition: POSITION\nrelationships: RELATIONSHIPS\nhistory: HISTORY\ndrive: DRIVE\nreturn: RETURN_STATE\nurgency: URGENCY\n${END}
EXISTING: only changed fields; omitted fields keep their values. ${START}\nmode: upsert\nname: NAME\nphysical: WHAT CHANGED\n${END}
Never omit BEGIN/END. Story prose comes only after END.
</SYSTEM>` : "";

        // A return can be due on a turn that needs no bookkeeping at all.
        const returnOnlyTask = (returnCandidate && !shouldRequestRecord) ? `
<SYSTEM>
# NEMESIS SYSTEM
${returnSectionFull}</SYSTEM>` : "";
        const returnOnlyCompact = (returnCandidate && !shouldRequestRecord) ? `
<SYSTEM>
# NEMESIS SYSTEM
${returnSectionCompact}</SYSTEM>` : "";

        let chosenRecord = "";
        let taskKind = "none";
        let budget = { before: Number.isInteger(info.maxChars) ? Math.max(0, info.maxChars - text.length - 32) : 999999, after: 0, trimmed: 0 };
        if (shouldRequestRecord) {
            // The drop from full (~11k) to compact (~1.5k) is a cliff: one
            // character over the budget threw away the field discipline, outcome
            // drivers and stance rules to save a return block worth ~1.4k. On a
            // return turn — the one turn carrying the largest optional section —
            // that happened routinely. Shrinking the OPTIONAL block first keeps
            // the expensive guidance that actually shapes the record.
            const leanRecordTask = (returnSectionFull && recordTask)
                ? recordTask.replace(returnSectionFull, returnSectionCompact)
                : "";
            // Standard: everything that decides what goes ON the card — record
            // shape, field discipline, outcome drivers, adaptation, qualification
            // — with the two prose sections compressed. This is the step that
            // stops a 500-character overrun from costing every rule at once,
            // which matters most with Inner Self sharing the same context.
            const standardBase = leanRecordTask || recordTask;
            const standardRecordTask = standardBase
                ? standardBase.replace(calibrationSection, "").replace(stanceSection, stanceSectionBrief)
                : "";
            const candidates = [
                [recordTask, "full"],
                ...(leanRecordTask ? [[leanRecordTask, "full-lean"]] : []),
                ...(standardRecordTask ? [[standardRecordTask, "standard"]] : []),
                [compactRecordTask, "compact"],
                [microRecordTask, "micro"]
            ];
            const maxChars = Number.isInteger(info.maxChars) ? info.maxChars : Infinity;
            let room = Math.max(0, maxChars - text.length - 32);
            for (const [candidate, kind] of candidates) {
                if (candidate.length <= room) {
                    chosenRecord = candidate;
                    taskKind = kind;
                    budget = { before: room, after: room, trimmed: 0 };
                    break;
                }
            }
            if (!chosenRecord) {
                // Reserve space for the smallest reliable task by trimming only old Recent Story.
                // microRecordTask already contains the return line when one is due.
                budget = reserveContextRoom(microRecordTask.length);
                room = budget.after;
                if (microRecordTask.length <= room) {
                    chosenRecord = microRecordTask;
                    taskKind = "micro-reserved";
                }
            }
            if (chosenRecord) {
                NS.expectRecord = true;
                NS.pendingAnalysisHash = needsAnalysis ? currentHash : "";
            }
        }

        let maxChars = Number.isInteger(info.maxChars) ? info.maxChars : Infinity;
        let remaining = Math.max(0, maxChars - text.length - 32 - chosenRecord.length);
        // Standalone return task, only when no bookkeeping task is carrying it.
        let chosenReturn = "";
        if (returnCandidate && !chosenRecord) {
            if (returnOnlyTask.length <= remaining) chosenReturn = returnOnlyTask;
            else if (returnOnlyCompact.length <= remaining) chosenReturn = returnOnlyCompact;
            else {
                const reserved = reserveContextRoom(returnOnlyCompact.length);
                if (returnOnlyCompact.length <= reserved.after) {
                    chosenReturn = returnOnlyCompact;
                    budget = reserved;
                }
                remaining = Math.max(0, maxChars - text.length - 32 - chosenRecord.length);
            }
        }
        remaining = Math.max(0, remaining - chosenReturn.length);
        // Survival guidance is the lowest priority: it is generic advice, while a
        // return opportunity is a rare scheduled event.
        const chosenSurvival = survival && survival.length <= remaining ? survival : "";
        const addon = `${chosenSurvival}${chosenReturn}${chosenRecord}`;
        if (addon) text = `${text.trimEnd()}\n\n${addon}\n\n`;
        NS.diagnostic.taskChars = chosenRecord.length;
        NS.diagnostic.taskPresent = !!(chosenRecord && text.includes(chosenRecord));
        NS.diagnostic.strictSystem = !!(chosenRecord && chosenRecord.includes("<SYSTEM>") && chosenRecord.includes("# STRICT OUTPUT FORMAT"));
        NS.diagnostic.contextAfter = text.length;
        NS.stages.analysisRequested = shouldRequestRecord;
        NS.stages.taskInserted = NS.diagnostic.taskPresent;
        // Return pipeline trace. Every stage answers one question so a missing
        // return always names the step that stopped it.
        const returnText = `${chosenReturn}${chosenRecord}`;
        NS.stages.returnRolled = !!returnCandidate;
        NS.stages.returnCandidate = returnCandidate ? returnCandidate.snap.name : "";
        NS.stages.returnStatus = returnCandidate ? safeLine(returnCandidate.snap.status, 40) : "";
        NS.stages.returnState = returnCandidate ? returnCandidate.snap.returnState : "";
        NS.stages.returnPromptInserted = !!(returnCandidate
            && returnText && text.includes(returnCandidate.snap.name)
            && /RETURN OPPORTUNITY|RETURN:/.test(returnText));
        NS.stages.returnCarrier = returnCandidate
            ? (chosenRecord ? `inside ${taskKind} task` : chosenReturn ? "standalone" : "NOT INSERTED")
            : "";

        NS.debugContext = {
            analysis: shouldRequestRecord ? (chosenRecord ? "requested" : "deferred-no-room") : "not-needed",
            task: taskKind,
            roomBefore: budget.before,
            roomAfter: budget.after || Math.max(0, maxChars - text.length - 32),
            trimmed: budget.trimmed || 0
        };
        emitDebug(cfg);
        return;
    }

    // -------------------------------------------------------------------------
    // OUTPUT
    // Must run AFTER InnerSelf("output"). Inner Self removes its () operation first;
    // the Nemesis sentinel survives because it avoids (), [], {}.
    // -------------------------------------------------------------------------
    if (hook === "output") {
        const cfg = getConfig();
        NS.diagnostic ??= {};
        NS.diagnostic.expectAtOutput = !!NS.expectRecord;
        NS.diagnostic.cardsBeforeOutput = storyCards.length;
        NS.diagnostic.rawCanonical = String(text || "").toLowerCase().includes(START.toLowerCase());
        NS.diagnostic.rawLegacy = String(text || "").toLowerCase().includes(LEGACY_START.toLowerCase());
        NS.diagnostic.rawLooseMode = /(?:^|[\r\n])\s*mode\s*:\s*(?:none|upsert|maintenance)\b/i.test(String(text || ""));
        NS.stages.outputRan = true;
        const records = stripAndGetRecords(cfg.debug);
        NS.stages.recordDetected = records.length > 0;
        NS.debugOutput = {
            records: records.length,
            mode: "none",
            name: "",
            card: "none",
            loose: records.some(r => r.loose)
        };
        if (!cfg.enabled) {
            NS.expectRecord = false;
            NS.pendingAnalysisHash = "";
            NS.diagnostic.cardsAfterOutput = storyCards.length;
            emitDebug(cfg);
            return;
        }

        if (!NS.expectRecord || !records.length) {
            // Bookkeeping was absent or malformed. It was stripped when recognizable,
            // but the analysis hash remains uncommitted so a later turn may retry.
            NS.expectRecord = false;
            NS.pendingAnalysisHash = "";
            NS.debugOutput.mode = records.length ? "unexpected" : "missing";
            NS.diagnostic.cardsAfterOutput = storyCards.length;
            emitDebug(cfg);
            return;
        }

        let validBookkeepingSeen = false;
        for (const { raw, data, loose } of records.slice(0, 3)) {
            const mode = normalize(data.mode || "").toLowerCase();
            const commitHash = simpleHash(`${NS.pendingAnalysisHash}|${raw}`);
            NS.debugOutput.mode = mode || "invalid";
            NS.debugOutput.loose ||= !!loose;
            if (commitHash === NS.lastCommitHash) continue;

            if (mode === "none") {
                NS.stages.parserAccepted = true;
                validBookkeepingSeen = true;
                NS.lastCommitHash = commitHash;
                NS.debugOutput.card = "no-change";
                continue;
            }
            if (!["upsert", "maintenance"].includes(mode)) continue;

            const name = cleanName(data.name || "");
            NS.debugOutput.name = name;
            if (!name) { NS.stages.parserAccepted = false; continue; }
            NS.stages.parserAccepted = true;
            const existing = findNemesisCard(name);
            if (mode === "maintenance" && !existing) continue;

            const base = existing ? parseSnapshot(existing, name) : defaultSnapshot(name);
            const snap = {
                ...base,
                name,
                title: data.title || base.title,
                status: data.status || base.status,
                physical: data.physical || base.physical,
                capabilities: data.capabilities || base.capabilities,
                position: data.position || base.position,
                relationships: data.relationships || base.relationships,
                history: data.history || base.history,
                drive: data.drive || base.drive,
                returnState: (data.return || base.returnState || "dormant").toLowerCase(),
                urgency: (data.urgency || base.urgency || "normal").toLowerCase(),
            };
            // Capture the pre-write state so a discarded generation can be undone.
            const prevDescription = existing ? String(existing.description || "") : null;
            // Stance-age tracking. A Drive written during a crisis and never
            // revisited is the most common way a card goes quietly wrong.
            // Did the new physical/capabilities detail appear in the story at all?
            // "Was this ever established?" is a question about the whole story,
            // not the last three turns. Narrowing it to the recent window is how
            // a role stated at an NPC's introduction went unrecorded.
            const supportSource = `${String(text || "")}\n${storyText()}`;
            const unsupported = [];
            // Proper nouns are always "supported" — the NPC's own name appears in
            // every story they are in — so they tell us nothing about whether a
            // claim is grounded. Exclude them before judging.
            const nameWords = new Set(
                `${name} ${cfg.player || ""}`.toLowerCase().split(/\s+/).filter(Boolean)
            );
            for (const key of ["physical", "capabilities"]) {
                if (!data[key]) continue;
                const terms = unsupportedTerms(snap[key], base[key], supportSource)
                    .filter(w => !nameWords.has(w));
                if (terms.length) unsupported.push(`${key}: ${terms.slice(0, 6).join(", ")}`);
            }
            // ADVISORY ONLY. This flags; it must never block a write. A field
            // whose wording paraphrases the story would fail a word-overlap test
            // while being perfectly correct, and silently dropping real
            // continuity is worse than recording a questionable line the player
            // can edit. Removing the canned examples is the fix for fabrication;
            // this is how we watch for the next one.
            NS.stages.unsupportedDetail = unsupported.length ? unsupported.join(" | ") : "";

            // A copied instruction placeholder is never a value. The record shape
            // teaches with <angle-bracket instructions>; a model that echoes one
            // back has described the field instead of filling it.
            for (const key of ["title", "status", "physical", "capabilities", "position",
                               "relationships", "history", "drive"]) {
                if (/<[^>]{3,}>/.test(String(snap[key] || ""))) {
                    snap[key] = base[key] || "None established";
                }
            }

            // Backstop: if the player has a name, a value that says "the player"
            // is using a placeholder for a character who has one. Phrase-scoped —
            // the bare word "player" is left alone.
            if (cfg.player && cfg.player !== "the protagonist") {
                const named = cfg.player;
                const fix = v => String(v || "")
                    .replace(/\bthe player character\b/gi, named)
                    .replace(/\bthe player\b/gi, named)
                    .replace(/\bthe protagonist\b/gi, named);
                for (const key of ["title", "status", "physical", "capabilities",
                                   "position", "relationships", "history", "drive"]) {
                    snap[key] = fix(snap[key]);
                }
            }

            // Backstop: a Nemesis with no recorded position has no baseline, and
            // "promotion" measured from nothing is not measurable. If the story
            // bound a plain role to the name, record it. This only ever FILLS an
            // empty field — a position the model or the player wrote is never
            // overwritten, so it cannot undo a promotion.
            if (!String(snap.position || "").trim()
                || /^none established$/i.test(String(snap.position).trim())) {
                const role = establishedRole(name, supportSource);
                if (role) {
                    snap.position = role;
                    NS.stages.positionFromStory = role;
                }
            }

            // No-loss guard for history. history is cumulative, so a new value is
            // supposed to be the old rivalry plus the new event. A COMPRESSION of
            // the old line must retain at least one content word from it; a value
            // that shares NOTHING with what was recorded is a replacement, and it
            // erases a past defeat or victory the progression logic depends on.
            // Failure modes are deliberately asymmetric: a false positive costs a
            // slightly redundant line the player can edit in Notes, a false
            // negative costs the fact that they once beat him.
            // Only for a card that already has real recorded history. On creation
            // base.history is the generic placeholder from defaultSnapshot, which
            // is not a past event and must never be merged in front of a real one.
            if (data.history && existing && base.history
                && !/^A significant unresolved encounter/i.test(String(base.history).trim())) {
                const prior = String(base.history).trim();
                const priorWords = contentWords(prior).filter(w => !nameWords.has(w));
                const nextWords = new Set(contentWords(snap.history).filter(w => !nameWords.has(w)));
                const keptSomething = priorWords.some(w => nextWords.has(w));
                if (priorWords.length >= 2 && !keptSomething
                    && !normalize(snap.history).toLowerCase().includes(normalize(prior).toLowerCase())) {
                    snap.history = safeLine(`${prior.replace(/[.;\s]+$/, "")}; then ${snap.history}`, 1500);
                    NS.stages.historyMerged = safeLine(prior, 60);
                }
            }

            const stanceChanged = ["drive", "relationships", "urgency"]
                .some(k => safeLine(String(snap[k] || "")) !== safeLine(String(base[k] || "")));
            const card = upsertNemesis(snap, cfg);
            if (!card) {
                NS.debugOutput.card = "failed";
                NS.stages.cardWritten = false;
                continue;
            }
            NS.ops++;
            validBookkeepingSeen = true;
            NS.lastCommitHash = commitHash;
            NS.debugOutput.card = existing ? "updated" : "created";
            NS.stages.cardWritten = true;
            NS.stages.cardVerified = findNemesisCard(name) !== null;
            NS.cards[name] ??= {};
            NS.cards[name].updates = (NS.cards[name].updates || 0) + 1;
            // A material Nemesis change means the situation moved; let Inner Self
            // form fresh thoughts for this character again.
            if (NS.thoughtStreak) {
                const who = String(name).trim().toLowerCase();
                for (const id of Object.keys(NS.thoughtStreak)) {
                    if (id.startsWith(`${who}::`)) delete NS.thoughtStreak[id];
                }
            }
            if (stanceChanged || NS.cards[name].stanceTurn === undefined) {
                NS.cards[name].stanceTurn = turn();
                NS.cards[name].stanceUpdates = NS.cards[name].updates;
            }
            // Undo record. See rollbackDiscardedWrite() for how this is consumed.
            NS.undoStack = Array.isArray(NS.undoStack) ? NS.undoStack : [];
            NS.undoStack.push({
                name,
                prevDescription,
                created: !existing,
                len: history.length
            });
            // Bounded: enough to unwind a multi-generation erase, small enough
            // that state stays tiny.
            while (NS.undoStack.length > 8) NS.undoStack.shift();
        }

        if (validBookkeepingSeen && NS.pendingAnalysisHash) {
            NS.lastAnalysisHash = NS.pendingAnalysisHash;
        }
        // RESOLVE A PENDING RETURN OFFER.
        // The scheduler offered a Nemesis last context hook. Now that the prose
        // exists we can tell an actual reappearance from a narrator veto, and
        // charge the right cooldown for each.
        if (NS.pendingReturn && NS.pendingReturn.name) {
            const name = NS.pendingReturn.name;
            const appeared = nameInText(name, text);
            NS.cards[name] ??= {};
            if (appeared) {
                NS.cards[name].lastReturn = turn();
                NS.lastSeen[name] = turn();
                delete NS.cards[name].lastVeto;
                NS.stages.returnResult = "appeared";
                // Reflect the reappearance on the card so the next roll sees it.
                const card = findNemesisCard(name);
                if (card) {
                    const snap = parseSnapshot(card, name);
                    if (snap.returnState !== "closed") {
                        card.description = renderSnapshot({ ...snap, returnState: "present" });
                        syncEntryFromNotes(card);
                    }
                }
            } else {
                NS.cards[name].lastVeto = turn();
                NS.stages.returnResult = "vetoed";
            }
            NS.stages.returnCooldown = appeared ? "full" : `veto (${VETO_COOLDOWN} turns)`;
            NS.pendingReturn = null;
        }
        if (validBookkeepingSeen) NS.lastMaintenance = turn();
        NS.expectRecord = false;
        NS.pendingAnalysisHash = "";
        NS.diagnostic.cardsAfterOutput = storyCards.length;
        emitDebug(cfg);
        return;
    }
}

globalThis.NemesisSystem = NemesisSystem;

/**
 * Correct-order hook entry points.
 *
 * The Output order is NOT the same as Input/Context. Inner Self repairs
 * unbalanced brackets in model output: an orphaned ")" anywhere in the prose
 * makes it prepend "(" to the start of the output and consume everything up to
 * that ")". The Nemesis record lives at the start of the output, so if Inner
 * Self runs first the record is destroyed and the card is silently never
 * created. Nemesis must remove its record first.
 *
 * Calling these three functions makes that impossible to get wrong.
 */
globalThis.NemesisHooks = (function () {
    /**
     * Each script is isolated. If one throws, the other still runs and the
     * modifier still returns text. Without this, a single Inner Self exception
     * during the opening generation takes down BOTH scripts, which looks
     * exactly like "the scripts never launched".
     */
    const errors = [];
    const safely = (label, fn) => {
        try {
            fn();
        } catch (error) {
            const message = `${label}: ${(error && error.message) || error}`;
            errors.push(message);
            try { log(`NemesisHooks caught -> ${message}`); } catch {}
            try {
                globalThis.state = globalThis.state || {};
                state.Nemesis = state.Nemesis || {};
                state.Nemesis.hookErrors = errors.slice(-5);
            } catch {}
        }
    };
    const inner = phase => safely(`InnerSelf(${phase})`, () => {
        if (typeof InnerSelf === "function") InnerSelf(phase);
    });
    const nemesis = phase => safely(`NemesisSystem(${phase})`, () => {
        if (typeof NemesisSystem === "function") NemesisSystem(phase);
    });

    return Object.freeze({
        input() { inner("input"); nemesis("input"); },
        context() { inner("context"); nemesis("context"); },
        output() {
            // Nemesis FIRST. Do not reorder these two lines.
            nemesis("output");
            inner("output");
        },
        /**
         * Temporary wiring check. Put `NemesisHooks.selfTest();` alone in a
         * modifier tab, take one action, and read the message it prints.
         * Remove it afterwards.
         */
        selfTest() {
            const present = name => {
                try { return typeof globalThis[name]; } catch { return "unavailable"; }
            };
            const cardTitles = (() => {
                try { return storyCards.map(c => c && c.title).filter(Boolean); } catch { return []; }
            })();
            const find = re => cardTitles.filter(t => re.test(t)).join(", ") || "NOT FOUND";
            const lines = [
                "Nemesis selfTest",
                "",
                `NemesisSystem : ${present("NemesisSystem")}`,
                `NemesisHooks  : ${present("NemesisHooks")}`,
                `InnerSelf     : ${present("InnerSelf")}`,
                `AutoCards     : ${present("AutoCards")}`,
                "",
                `state         : ${typeof globalThis.state}`,
                `info          : ${typeof globalThis.info}`,
                `history       : ${Array.isArray(globalThis.history) ? `array(${history.length})` : typeof globalThis.history}`,
                `storyCards    : ${Array.isArray(globalThis.storyCards) ? `array(${storyCards.length})` : typeof globalThis.storyCards}`,
                `text          : ${typeof globalThis.text}`,
                `addStoryCard  : ${typeof globalThis.addStoryCard}`,
                `info.maxChars : ${globalThis.info && info.maxChars}`,
                `info.actionCount : ${globalThis.info && info.actionCount}`,
                "",
                `env guard     : ${globalThis.__nemesisEnvFail ? `BLOCKED on ${globalThis.__nemesisEnvFail}` : "passed"}`,
                `Configure Nemesis    : ${find(/configure[\s\S]*nemesis/i)}`,
                `Configure Inner Self : ${find(/configure[\s\S]*inner\s*self/i)}`,
                `Nemesis cards        : ${find(/^⚔ Nemesis/)}`,
                "",
                `hook errors   : ${errors.length ? errors.join(" | ") : "none"}`
            ];
            try { state.message = lines.join("\n"); } catch {}
            try { log(lines.join("\n")); } catch {}
            return lines.join("\n");
        }
    });
})();
