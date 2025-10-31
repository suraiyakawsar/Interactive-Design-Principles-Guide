// FIX: Populating the constants file with actual data and exports.
import type { PrincipleSet } from './types';

// Foundational Principles
import { BalanceVisual } from './components/visuals/BalanceVisual';
import { ContrastVisual as FoundationalContrastVisual } from './components/visuals/ContrastVisual';
import { HierarchyVisual } from './components/visuals/HierarchyVisual';
import { RepetitionVisual as FoundationalRepetitionVisual } from './components/visuals/RepetitionVisual';
import { ProximityVisual as FoundationalProximityVisual } from './components/visuals/ProximityVisual';
import { WhiteSpaceVisual } from './components/visuals/WhiteSpaceVisual';
import { AlignmentVisual as FoundationalAlignmentVisual } from './components/visuals/AlignmentVisual';
import { EmphasisVisual } from './components/visuals/EmphasisVisual';

// Nielsen's Heuristics
import { VisibilityOfSystemStatusVisual } from './components/visuals/nielsen/VisibilityOfSystemStatusVisual';
import { MatchSystemRealWorldVisual } from './components/visuals/nielsen/MatchSystemRealWorldVisual';
import { UserControlFreedomVisual } from './components/visuals/nielsen/UserControlFreedomVisual';
import { ConsistencyStandardsVisual } from './components/visuals/nielsen/ConsistencyStandardsVisual';
import { ErrorPreventionVisual } from './components/visuals/nielsen/ErrorPreventionVisual';
import { RecognitionRecallVisual } from './components/visuals/nielsen/RecognitionRecallVisual';
import { FlexibilityEfficiencyVisual } from './components/visuals/nielsen/FlexibilityEfficiencyVisual';
import { AestheticMinimalistVisual } from './components/visuals/nielsen/AestheticMinimalistVisual';
import { HelpRecognizeErrorsVisual } from './components/visuals/nielsen/HelpRecognizeErrorsVisual';
import { HelpAndDocumentationVisual } from './components/visuals/nielsen/HelpAndDocumentationVisual';

// Shneiderman's Golden Rules
import { ConsistencyVisual as ShneidermanConsistencyVisual } from './components/visuals/shneiderman/ConsistencyVisual';
import { ShortcutsVisual } from './components/visuals/shneiderman/ShortcutsVisual';
import { InformativeFeedbackVisual } from './components/visuals/shneiderman/InformativeFeedbackVisual';
import { DialogClosureVisual } from './components/visuals/shneiderman/DialogClosureVisual';
import { SimpleErrorHandlingVisual } from './components/visuals/shneiderman/SimpleErrorHandlingVisual';
import { EasyReversalVisual } from './components/visuals/shneiderman/EasyReversalVisual';
import { InternalLocusOfControlVisual } from './components/visuals/shneiderman/InternalLocusOfControlVisual';
import { ReduceMemoryLoadVisual } from './components/visuals/shneiderman/ReduceMemoryLoadVisual';

// Gestalt Principles
import { ProximityVisual as GestaltProximityVisual } from './components/visuals/gestalt/ProximityVisual';
import { SimilarityVisual } from './components/visuals/gestalt/SimilarityVisual';
import { ClosureVisual } from './components/visuals/gestalt/ClosureVisual';
import { FigureGroundVisual } from './components/visuals/gestalt/FigureGroundVisual';
import { ContinuityVisual } from './components/visuals/gestalt/ContinuityVisual';
import { CommonFateVisual } from './components/visuals/gestalt/CommonFateVisual';

// CRAP Principles
import { ContrastVisual as CrapContrastVisual } from './components/visuals/crap/ContrastVisual';
import { RepetitionVisual as CrapRepetitionVisual } from './components/visuals/crap/RepetitionVisual';
import { AlignmentVisual as CrapAlignmentVisual } from './components/visuals/crap/AlignmentVisual';
import { ProximityVisual as CrapProximityVisual } from './components/visuals/crap/ProximityVisual';

// Norman's Principles
import { VisibilityVisual } from './components/visuals/norman/VisibilityVisual';
import { FeedbackVisual } from './components/visuals/norman/FeedbackVisual';
import { AffordanceVisual } from './components/visuals/norman/AffordanceVisual';
import { MappingVisual } from './components/visuals/norman/MappingVisual';
import { ConstraintsVisual } from './components/visuals/norman/ConstraintsVisual';
import { ConsistencyVisual as NormanConsistencyVisual } from './components/visuals/norman/ConsistencyVisual';

// Laws of UX
import { FittsLawVisual } from './components/visuals/laws-of-ux/FittsLawVisual';
import { HicksLawVisual } from './components/visuals/laws-of-ux/HicksLawVisual';
import { MillersLawVisual } from './components/visuals/laws-of-ux/MillersLawVisual';
import { JakobsLawVisual } from './components/visuals/laws-of-ux/JakobsLawVisual';
import { ParkinsonsLawVisual } from './components/visuals/laws-of-ux/ParkinsonsLawVisual';
import { TeslersLawVisual } from './components/visuals/laws-of-ux/TeslersLawVisual';
import { PeakEndRuleVisual } from './components/visuals/laws-of-ux/PeakEndRuleVisual';

// WCAG Principles
import { PerceivableVisual } from './components/visuals/wcag/PerceivableVisual';
import { OperableVisual } from './components/visuals/wcag/OperableVisual';
import { UnderstandableVisual } from './components/visuals/wcag/UnderstandableVisual';
import { RobustVisual } from './components/visuals/wcag/RobustVisual';

// Inclusive Design
import { ComparableExperienceVisual } from './components/visuals/inclusive-design/ComparableExperienceVisual';
import { SituationalDesignVisual } from './components/visuals/inclusive-design/SituationalDesignVisual';
import { ConsistencyVisual as InclusiveConsistencyVisual } from './components/visuals/inclusive-design/ConsistencyVisual';
import { UserControlVisual } from './components/visuals/inclusive-design/UserControlVisual';
import { OfferChoiceVisual } from './components/visuals/inclusive-design/OfferChoiceVisual';
import { PrioritizeContentVisual } from './components/visuals/inclusive-design/PrioritizeContentVisual';

export const PRINCIPLE_SETS: PrincipleSet[] = [
  {
    id: 'foundational',
    name: 'Foundational Principles',
    principles: [
      { id: 'balance', name: 'Balance', description: 'Distributing elements to create a sense of stability. Can be symmetrical, asymmetrical, or radial.', visual: BalanceVisual },
      { id: 'contrast', name: 'Contrast', description: 'Using differences in color, size, or shape to make elements stand out and create focal points.', visual: FoundationalContrastVisual },
      { id: 'hierarchy', name: 'Hierarchy', description: 'Arranging elements to show their order of importance, guiding the user\'s eye through the design.', visual: HierarchyVisual },
      { id: 'repetition', name: 'Repetition', description: 'Reusing the same or similar elements throughout a design to create consistency and unity.', visual: FoundationalRepetitionVisual },
      { id: 'proximity', name: 'Proximity', description: 'Grouping related elements together to create a relationship between them.', visual: FoundationalProximityVisual },
      { id: 'white-space', name: 'White Space', description: 'The empty space around elements, used to reduce clutter and improve readability.', visual: WhiteSpaceVisual },
      { id: 'alignment', name: 'Alignment', description: 'Placing elements so their edges line up along a common row or column, creating a visual connection.', visual: FoundationalAlignmentVisual },
      { id: 'emphasis', name: 'Emphasis', description: 'Making a particular element the focal point to draw the user\'s attention.', visual: EmphasisVisual },
    ],
  },
  {
    id: 'nielsen-heuristics',
    name: 'Nielsen\'s Heuristics',
    principles: [
        { id: 'visibility-status', name: 'Visibility of system status', description: 'The system should always keep users informed about what is going on, through appropriate feedback within reasonable time.', visual: VisibilityOfSystemStatusVisual },
        { id: 'match-system-real-world', name: 'Match between system and the real world', description: 'The system should speak the users\' language, with words, phrases and concepts familiar to the user, rather than system-oriented terms.', visual: MatchSystemRealWorldVisual },
        { id: 'user-control-freedom', name: 'User control and freedom', description: 'Users often choose system functions by mistake and will need a clearly marked "emergency exit" to leave the unwanted state without having to go through an extended dialogue.', visual: UserControlFreedomVisual },
        { id: 'consistency-standards', name: 'Consistency and standards', description: 'Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform conventions.', visual: ConsistencyStandardsVisual },
        { id: 'error-prevention', name: 'Error prevention', description: 'Even better than good error messages is a careful design which prevents a problem from occurring in the first place.', visual: ErrorPreventionVisual },
        { id: 'recognition-recall', name: 'Recognition rather than recall', description: 'Minimize the user\'s memory load by making objects, actions, and options visible. The user should not have to remember information from one part of the dialogue to another.', visual: RecognitionRecallVisual },
        { id: 'flexibility-efficiency', name: 'Flexibility and efficiency of use', description: 'Accelerators — unseen by the novice user — may often speed up the interaction for the expert user such that the system can cater to both inexperienced and experienced users.', visual: FlexibilityEfficiencyVisual },
        { id: 'aesthetic-minimalist', name: 'Aesthetic and minimalist design', description: 'Dialogues should not contain information which is irrelevant or rarely needed. Every extra unit of information in a dialogue competes with the relevant units of information and diminishes their relative visibility.', visual: AestheticMinimalistVisual },
        { id: 'help-recognize-errors', name: 'Help users recognize, diagnose, and recover from errors', description: 'Error messages should be expressed in plain language (no codes), precisely indicate the problem, and constructively suggest a solution.', visual: HelpRecognizeErrorsVisual },
        { id: 'help-documentation', name: 'Help and documentation', description: 'Even though it is better if the system can be used without documentation, it may be necessary to provide help and documentation.', visual: HelpAndDocumentationVisual },
    ]
  },
  {
    id: 'shneiderman-rules',
    name: 'Shneiderman\'s 8 Golden Rules',
    principles: [
        { id: 'strive-consistency', name: 'Strive for consistency', description: 'Consistent sequences of actions should be required in similar situations; identical terminology should be used in prompts, menus, and help screens.', visual: ShneidermanConsistencyVisual },
        { id: 'universal-usability', name: 'Enable frequent users to use shortcuts', description: 'As the frequency of use increases, so do the user\'s desires to reduce the number of interactions and to increase the pace of interaction.', visual: ShortcutsVisual },
        { id: 'informative-feedback', name: 'Offer informative feedback', description: 'For every operator action, there should be some system feedback. For frequent and minor actions, the response can be modest, while for infrequent and major actions, the response should be more substantial.', visual: InformativeFeedbackVisual },
        { id: 'dialog-closure', name: 'Design dialog to yield closure', description: 'Sequences of actions should be organized into groups with a beginning, middle, and end. The informative feedback at the completion of a group of actions gives users the satisfaction of accomplishment.', visual: DialogClosureVisual },
        { id: 'simple-error-handling', name: 'Offer simple error handling', description: 'As much as possible, design the system so the user cannot make a serious error. If an error is made, the system should be able to detect the error and offer simple, comprehensible mechanisms for handling the error.', visual: SimpleErrorHandlingVisual },
        { id: 'easy-reversal', name: 'Permit easy reversal of actions', description: 'This feature relieves anxiety, since the user knows that errors can be undone; it thus encourages exploration of unfamiliar options.', visual: EasyReversalVisual },
        { id: 'internal-locus-control', name: 'Support internal locus of control', description: 'Experienced operators strongly desire the sense that they are in charge of the system and that the system responds to their actions. Design the system to make users the initiators of actions rather than the responders.', visual: InternalLocusOfControlVisual },
        { id: 'reduce-memory-load', name: 'Reduce short-term memory load', description: 'The limitation of human information processing in short-term memory requires that displays be kept simple, multiple page displays be consolidated, window-motion frequency be reduced, and sufficient training time be allotted for codes, mnemonics, and sequences of actions.', visual: ReduceMemoryLoadVisual },
    ],
  },
  {
    id: 'gestalt-principles',
    name: 'Gestalt Principles',
    principles: [
        { id: 'gestalt-proximity', name: 'Proximity', description: 'Objects that are close to one another are perceived as a group.', visual: GestaltProximityVisual },
        { id: 'similarity', name: 'Similarity', description: 'Objects that share similar characteristics (like color or shape) are perceived as a group.', visual: SimilarityVisual },
        { id: 'closure', name: 'Closure', description: 'We perceive elements as a whole, even when parts are missing, by mentally filling in the gaps.', visual: ClosureVisual },
        { id: 'figure-ground', name: 'Figure-Ground', description: 'We perceive elements as either being in the foreground (figure) or the background (ground).', visual: FigureGroundVisual },
        { id: 'continuity', name: 'Continuity', description: 'We perceive elements arranged in a line or curve as related to each other, following the smoothest path.', visual: ContinuityVisual },
        { id: 'common-fate', name: 'Common Fate', description: 'We perceive elements moving in the same direction as being more related than elements that are stationary or moving in different directions.', visual: CommonFateVisual },
    ],
  },
  {
    id: 'crap-principles',
    name: 'C.R.A.P. Principles',
    principles: [
        { id: 'crap-contrast', name: 'Contrast', description: 'Making different elements visually distinct to create interest and hierarchy.', visual: CrapContrastVisual },
        { id: 'crap-repetition', name: 'Repetition', description: 'Repeating visual elements like colors, fonts, or shapes to create consistency and unity.', visual: CrapRepetitionVisual },
        { id: 'crap-alignment', name: 'Alignment', description: 'Consciously placing every element so it has a visual connection with another element.', visual: CrapAlignmentVisual },
        { id: 'crap-proximity', name: 'Proximity', description: 'Grouping related items together to form a cohesive unit and reduce clutter.', visual: CrapProximityVisual },
    ],
  },
  {
    id: 'norman-principles',
    name: 'Norman\'s Principles',
    principles: [
        { id: 'norman-visibility', name: 'Visibility', description: 'The more visible functions are, the more likely users will be able to know what to do next.', visual: VisibilityVisual },
        { id: 'norman-feedback', name: 'Feedback', description: 'Providing immediate and clear information about the result of an action.', visual: FeedbackVisual },
        { id: 'affordance', name: 'Affordance', description: 'The perceived properties of an object that suggest how it can be used.', visual: AffordanceVisual },
        { id: 'mapping', name: 'Mapping', description: 'The relationship between controls and their effects in the world.', visual: MappingVisual },
        { id: 'constraints', name: 'Constraints', description: 'Restricting the kinds of user interaction that can take place to prevent errors.', visual: ConstraintsVisual },
        { id: 'norman-consistency', name: 'Consistency', description: 'Designing interfaces to have similar operations and use similar elements for achieving similar tasks.', visual: NormanConsistencyVisual },
    ],
  },
  {
    id: 'laws-of-ux',
    name: 'Laws of UX',
    principles: [
        { id: 'fitts-law', name: 'Fitts\'s Law', description: 'The time to acquire a target is a function of the distance to and size of the target.', visual: FittsLawVisual },
        { id: 'hicks-law', name: 'Hick\'s Law', description: 'The time it takes to make a decision increases with the number and complexity of choices.', visual: HicksLawVisual },
        { id: 'millers-law', name: 'Miller\'s Law', description: 'The average person can only keep about 7 (plus or minus 2) items in their working memory.', visual: MillersLawVisual },
        { id: 'jakobs-law', name: 'Jakob\'s Law', description: 'Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know.', visual: JakobsLawVisual },
        { id: 'parkinsons-law', name: 'Parkinson\'s Law', description: 'Work expands so as to fill the time available for its completion.', visual: ParkinsonsLawVisual },
        { id: 'teslers-law', name: 'Tesler\'s Law', description: 'For any system there is a certain amount of complexity which cannot be reduced (Conservation of Complexity).', visual: TeslersLawVisual },
        { id: 'peak-end-rule', name: 'Peak–End Rule', description: 'People judge an experience largely based on how they felt at its peak and at its end, rather than on the total sum or average of every moment of the experience.', visual: PeakEndRuleVisual },
    ],
  },
  {
    id: 'wcag-principles',
    name: 'WCAG Principles',
    principles: [
        { id: 'perceivable', name: 'Perceivable', description: 'Information and user interface components must be presentable to users in ways they can perceive.', visual: PerceivableVisual },
        { id: 'operable', name: 'Operable', description: 'User interface components and navigation must be operable. Users must be able to interact with the interface.', visual: OperableVisual },
        { id: 'understandable', name: 'Understandable', description: 'Information and the operation of user interface must be understandable. Users must be able to understand the information as well as the operation of the user interface.', visual: UnderstandableVisual },
        { id: 'robust', name: 'Robust', description: 'Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.', visual: RobustVisual },
    ],
  },
  {
    id: 'inclusive-design',
    name: 'Inclusive Design',
    principles: [
        { id: 'comparable-experience', name: 'Provide a comparable experience', description: 'Ensure your interface provides a comparable experience for all people, regardless of their abilities, without degrading the experience for anyone.', visual: ComparableExperienceVisual },
        { id: 'situational-design', name: 'Consider situation', description: 'People use your interface in different situations. Make sure your interface delivers a valuable experience to people regardless of their circumstances.', visual: SituationalDesignVisual },
        { id: 'inclusive-consistency', name: 'Be consistent', description: 'Use familiar conventions and apply them consistently.', visual: InclusiveConsistencyVisual },
        { id: 'user-control', name: 'Give control', description: 'Ensure people are in control. People should be able to access and interact with content in their preferred way.', visual: UserControlVisual },
        { id: 'offer-choice', name: 'Offer choice', description: 'Consider providing different ways for people to complete tasks, especially those that are complex or non-standard.', visual: OfferChoiceVisual },
        { id: 'prioritize-content', name: 'Prioritize content', description: 'Separate core content and functionality from supplementary information and features.', visual: PrioritizeContentVisual },
    ]
  },
];
