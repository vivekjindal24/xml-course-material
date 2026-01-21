export interface CLO {
  id: string;
  description: string;
}

export interface CO {
  id: string;
  description: string;
}

export interface Topic {
  id: string;
  title: string;
  subtopics?: string[];
  clos: string[];
  cos: string[];
  content: {
    introduction: string;
    concept: string;
    technicalDepth: string;
    examples: string;
    practical: string;
    exam: string;
    takeaways: string;
  };
}

export interface Unit {
  id: string;
  title: string;
  topics: Topic[];
}

export const clos: CLO[] = [
  {
    id: 'CLO01',
    description:
      'Explain XML fundamentals, syntax rules, and how XML represents structured information.',
  },
  {
    id: 'CLO02',
    description:
      'Design and validate XML documents using DTD and XML Schema (XSD) constraints.',
  },
  {
    id: 'CLO03',
    description: 'Query and navigate XML documents using XPath expressions and axes.',
  },
  {
    id: 'CLO04',
    description: 'Transform XML into other formats using XSLT templates and processing rules.',
  },
  {
    id: 'CLO05',
    description:
      'Integrate XML, XSD, XPath, and XSLT into an end-to-end data processing workflow.',
  },
];

export const cos: CO[] = [
  {
    id: 'CO01',
    description:
      'Create well-formed XML documents and model data using elements and attributes.',
  },
  {
    id: 'CO02',
    description:
      'Use DTD to define structure, entities, and attribute constraints for XML validation.',
  },
  {
    id: 'CO03',
    description:
      'Develop XML Schema (XSD) using namespaces, types, and occurrence constraints.',
  },
  {
    id: 'CO04',
    description:
      'Write XPath and XSLT to query and transform XML data into usable outputs.',
  },
  {
    id: 'CO05',
    description:
      'Build and document an XML mini-project demonstrating validation and transformation.',
  },
];

export const units: Unit[] = [
  {
    id: 'unit-1',
    title: 'UNIT I: Introduction to XML',
    topics: [
      {
        id: 'xml-overview',
        title: 'XML Overview & Markup Languages',
        subtopics: [
          'Why XML exists',
          'Markup languages',
          'XML vs HTML',
          'Real-world use cases',
          'XML family (DTD/XSD/XPath/XSLT)',
        ],
        clos: ['CLO01'],
        cos: ['CO01'],
        content: {
          introduction:
            'XML is a standards-based way to package meaning and structure in plain text. It grew out of SGML to make data exchange predictable across tools, platforms, and decades. Think of it as a contract for how information is organized—not how it looks.',
          concept: `## Markup in practice

A markup language labels parts of a document so humans and programs agree on what each part means.

- HTML labels how to display; XML labels what the data *is*.
- XML is a meta-language: you mint tags that match your domain (student, invoice, sensor, book).

### Why extensible matters

You are not locked to a fixed tag set. New elements can be added without breaking existing parsers as long as they stay well-formed.

### Well-formed vs valid

- Well-formed: syntax rules are respected (single root, proper nesting, quoted attributes).
- Valid: well-formed *and* obeys a schema (DTD or XSD).`,
          technicalDepth: `## Tree mental model

XML documents are ordered trees:
- Root element contains everything.
- Elements may hold text, other elements, and attributes.
- Attributes are name/value metadata on elements.

### When to use elements vs attributes
- Use elements for repeatable or structured data (titles, items, nested records).
- Use attributes for identifiers, flags, short metadata (id, type, status).

### XML ecosystem map
- Structure guardrails: DTD / XSD
- Navigation: XPath
- Transformation: XSLT

### Parsing flow
1) Parse for well-formedness.
2) (Optional) Validate against DTD/XSD.
3) Query or transform with XPath/XSLT.
4) Serialize output for transport or storage.`,
          examples: `## Example 1: A Simple XML Document

~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<student id="S1">
  <name>Meera</name>
  <dept>CSE</dept>
  <cgpa>9.1</cgpa>
</student>
~~~

### Visual Tree Structure:
\`\`\`
student (id="S1")
├── name: "Meera"
├── dept: "CSE"
└── cgpa: "9.1"
\`\`\`

## Example 2: HTML vs XML Comparison

**HTML (Presentation-focused):**
~~~html
<h1>Course Title</h1>
<p><b>Instructor:</b> Dr. Smith</p>
<p><b>Credits:</b> 3</p>
~~~

**XML (Data-focused):**
~~~xml
<course id="CS101">
  <title>Distributed Systems</title>
  <instructor>Dr. Smith</instructor>
  <credits>3</credits>
  <department>CSE</department>
</course>
~~~

### Visual Tree:
\`\`\`
course (id="CS101")
├── title: "Distributed Systems"
├── instructor: "Dr. Smith"
├── credits: "3"
└── department: "CSE"
\`\`\`

## Example 3: Real-World XML - Book Catalog

~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
  <book category="technology">
    <title lang="en">Learning XML</title>
    <author>Erik T. Ray</author>
    <year>2003</year>
    <price>39.95</price>
  </book>
  <book category="fiction">
    <title lang="en">Harry Potter</title>
    <author>J.K. Rowling</author>
    <year>2005</year>
    <price>29.99</price>
  </book>
</bookstore>
~~~

### Visual Hierarchy:
\`\`\`
bookstore
├── book (category="technology")
│   ├── title (lang="en"): "Learning XML"
│   ├── author: "Erik T. Ray"
│   ├── year: "2003"
│   └── price: "39.95"
└── book (category="fiction")
    ├── title (lang="en"): "Harry Potter"
    ├── author: "J.K. Rowling"
    ├── year: "2005"
    └── price: "29.99"
\`\`\``,
          practical: `## Quick hands-on

- Draft one XML document for a dataset you like (books, courses, products).
- Check well-formedness with any strict parser.
- Add comments and attributes sparingly to see how tools display them.

Common pitfalls to avoid: missing end tags, multiple roots, unescaped & or <, and unquoted attributes.`,
          exam: `## Exam checkpoints

- Short: define XML; list 3 differences vs HTML; explain "extensible".
- Medium: describe well-formed vs valid with one example each.
- Long: explain how XML + DTD/XSD + XPath + XSLT form a pipeline.`,
          takeaways: `## Takeaways

- XML captures meaning; presentation is handled elsewhere.
- Treat every XML document as a tree.
- Validation is optional but crucial when systems exchange data.`,
        },
      },
      {
        id: 'xml-syntax',
        title: 'XML Syntax, Namespaces, and Well-Formedness',
        subtopics: [
          'XML prolog',
          'Elements vs attributes',
          'Entities and escaping',
          'Namespaces and prefixes',
          'Parser error patterns',
        ],
        clos: ['CLO01'],
        cos: ['CO01'],
        content: {
          introduction:
            'Syntax discipline is what lets any conforming parser build the same tree. This topic sharpens the core rules—proper nesting, entity handling, and namespace hygiene—so downstream validation and transforms stay predictable.',
          concept: `## Well-formedness rules

1) Exactly one root element.
2) Properly nested tags; every start tag closes.
3) Attribute values are quoted.
4) Reserved characters (\`<\`, \`>\`, \`&\`) are escaped inside text.

### Predefined entities table

| Character | Entity | When to use |
|-----------|--------|-------------|
| \`<\` | \`&lt;\` | Less-than symbol in text |
| \`>\` | \`&gt;\` | Greater-than symbol in text |
| \`&\` | \`&amp;\` | Ampersand in text |
| \`"\` | \`&quot;\` | Double quote in attributes |
| \`'\` | \`&apos;\` | Single quote (apostrophe) in attributes |

### Validity reminder
Valid = well-formed + conforms to a schema (DTD/XSD).`,
          technicalDepth: `## Namespaces in action

Namespaces prevent name collisions when mixing vocabularies.

With prefix:
~~~xml
<bk:book xmlns:bk="http://example.com/book">
  <bk:title>XML Handbook</bk:title>
</bk:book>
~~~

Default namespace:
~~~xml
<book xmlns="http://example.com/book">
  <title>XML Handbook</title>
</book>
~~~

Notes:
- Attributes are not in the default namespace unless prefixed.
- Choose stable, resolvable URIs for namespaces even if they are not fetched at runtime.`,
          examples: `## Example 1: Good vs Bad Nesting

**✅ Correct nesting** (tags open and close in the right order)
~~~xml
<order>
  <item>
    <sku>123</sku>
    <name>Widget</name>
  </item>
</order>
~~~

**❌ Broken nesting** (item closes after order—parser error)
~~~xml
<order><item></order></item>
~~~

## Example 2: Complete Well-Formed XML Document

~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<library>
  <book id="bk101" category="CS">
    <title>XML Developer's Guide</title>
    <author>Gambardella, Matthew</author>
    <year>2000</year>
    <price>44.95</price>
    <description>An in-depth look at creating applications with XML.</description>
  </book>
  <book id="bk102" category="Fiction">
    <title>Midnight Rain</title>
    <author>Ralls, Kim</author>
    <year>2000</year>
    <price>5.95</price>
    <description>A former architect battles corporate zombies.</description>
  </book>
</library>
~~~

**Why it's well-formed:**
- Has XML declaration at top
- Single root element (library)
- All tags properly nested and closed
- Attributes in quotes
- No reserved characters unescaped

## Example 3: Entity Usage

**Problem:** You want to show "if value < 10 & flag = true" in XML

**❌ Wrong** (parser treats \`<\` and \`&\` as markup)
~~~xml
<condition>if value < 10 & flag = true</condition>
<!-- Parser error: "<" is reserved -->
~~~

**✅ Correct** (entities escape special characters)
~~~xml
<condition>if value &lt; 10 &amp; flag = true</condition>
<!-- Displays as: if value < 10 & flag = true -->
~~~

### More Entity Examples:
~~~xml
<message>She said, &quot;Hello&quot;</message>
<!-- Displays: She said, "Hello" -->

<code>if (a &lt; b &amp;&amp; c &gt; d)</code>
<!-- Displays: if (a < b && c > d) -->

<note>Tom&apos;s Book</note>
<!-- Displays: Tom's Book -->
~~~

## Example 4: Namespace Demonstration

**Problem:** Two vocabularies both use \`<title>\`
~~~xml
<!-- Without namespaces—ambiguous -->
<document>
  <title>Book Title</title>
  <title>Page Title</title>  <!-- Which is which? -->
</document>
~~~

**Solution 1:** Use prefixes
~~~xml
<doc xmlns:book="http://example.com/book" 
     xmlns:page="http://example.com/page">
  <book:title>Clean Code</book:title>
  <book:author>Robert Martin</book:author>
  <page:title>Chapter 1: Introduction</page:title>
  <page:number>1</page:number>
</doc>
~~~

**Solution 2:** Default namespace with prefix override
~~~xml
<book xmlns="http://example.com/book" 
      xmlns:pg="http://example.com/page">
  <title>Clean Code</title>         <!-- book namespace -->
  <author>Robert Martin</author>     <!-- book namespace -->
  <pg:title>Chapter 1</pg:title>     <!-- page namespace -->
  <pg:number>1</pg:number>           <!-- page namespace -->
</book>
~~~

## Example 5: Attributes vs Elements

**Using Attributes:**
~~~xml
<student id="S001" name="Alice" dept="CSE" cgpa="9.2"/>
~~~

**Using Elements:**
~~~xml
<student>
  <id>S001</id>
  <name>Alice</name>
  <department>CSE</department>
  <cgpa>9.2</cgpa>
</student>
~~~

**Mixed Approach (Recommended):**
~~~xml
<student id="S001">  <!-- id as attribute: unique identifier -->
  <name>Alice</name>
  <department>CSE</department>
  <cgpa>9.2</cgpa>
</student>
~~~

**Rule of thumb:** Use attributes for metadata, IDs, and flags. Use elements for content and data that might repeat or have structure.`,
          practical: `## Practice

- Add a namespace prefix to an existing XML file and run it through a validator.
- Intentionally break three rules (double root, bad nesting, unescaped <) and read the parser errors.
- Add meaningful attributes (id, status) and confirm they remain quoted.`,
          exam: `## Exam focus

- Define namespace and default namespace.
- List the five predefined entities.
- Explain difference between well-formed and valid with one-liner examples.`,
          takeaways: `## Takeaways

- Namespaces are non-negotiable when combining vocabularies.
- Most parser errors come from nesting or unescaped characters.
- Stick to UTF-8 in the prolog to avoid encoding surprises.`,
        },
      },
    ],
  },
  {
    id: 'unit-2',
    title: 'UNIT II: Document Type Definition (DTD)',
    topics: [
      {
        id: 'dtd-basics',
        title: 'DTD Fundamentals: Elements, Attributes, and Validation',
        subtopics: [
          'Role of DTD',
          'ELEMENT declarations',
          'ATTLIST declarations',
          'Internal vs external DTD',
          'Validity vs well-formedness',
        ],
        clos: ['CLO02'],
        cos: ['CO02'],
        content: {
          introduction:
            'A DTD is the original grammar for XML. It lists which elements exist, how they nest, and which attributes are allowed. Even if XSD is richer, DTD fluency is essential for legacy systems and exam answers.',
          concept: `## What a DTD captures

- Allowed elements and their order.
- Cardinality using ?, *, +.
- Allowed attributes with types (CDATA, ID, IDREF, enumerations).
- Entities for reusable text.

### Internal vs external
- Internal: rules declared inside the DOCTYPE.
- External: referenced with system/public identifiers for reuse.`,
          technicalDepth: `## Element and attribute declarations

~~~dtd
<!ELEMENT library (book+)>
<!ELEMENT book (title, author, price)>
<!ELEMENT title (#PCDATA)>
<!ATTLIST book id ID #REQUIRED>
<!ATTLIST book category (cs|ee|me) "cs">
~~~

Operators recap: ? optional, * zero-or-more, + one-or-more, | choice, comma = sequence.`,
          examples: `## Example 1: Simple Library DTD (Internal)

~~~xml
<?xml version="1.0"?>
<!DOCTYPE library [
  <!ELEMENT library (book+)>
  <!ELEMENT book (title, author, price)>
  <!ELEMENT title (#PCDATA)>
  <!ELEMENT author (#PCDATA)>
  <!ELEMENT price (#PCDATA)>
  <!ATTLIST book 
    id ID #REQUIRED
    category CDATA #IMPLIED>
]>
<library>
  <book id="b1" category="technology">
    <title>XML Fundamentals</title>
    <author>John Doe</author>
    <price>499</price>
  </book>
  <book id="b2">
    <title>Advanced XML</title>
    <author>Jane Smith</author>
    <price>599</price>
  </book>
</library>
~~~

### Visual Structure:
\`\`\`
library (1 or more books required)
└── book (id required, category optional)
    ├── title (text content)
    ├── author (text content)
    └── price (text content)
\`\`\`

## Example 2: External DTD - Student Records

**File: student.dtd**
~~~dtd
<!ELEMENT students (student+)>
<!ELEMENT student (name, department, cgpa, courses)>
<!ELEMENT name (firstName, lastName)>
<!ELEMENT firstName (#PCDATA)>
<!ELEMENT lastName (#PCDATA)>
<!ELEMENT department (#PCDATA)>
<!ELEMENT cgpa (#PCDATA)>
<!ELEMENT courses (course+)>
<!ELEMENT course (#PCDATA)>

<!ATTLIST student 
  id ID #REQUIRED
  year (1|2|3|4) #REQUIRED>
<!ATTLIST course 
  code CDATA #REQUIRED
  credits (1|2|3|4) "3">
~~~

**File: students.xml**
~~~xml
<?xml version="1.0"?>
<!DOCTYPE students SYSTEM "student.dtd">
<students>
  <student id="S001" year="3">
    <name>
      <firstName>Alice</firstName>
      <lastName>Johnson</lastName>
    </name>
    <department>CSE</department>
    <cgpa>9.2</cgpa>
    <courses>
      <course code="CS301" credits="4">Data Structures</course>
      <course code="CS302">Algorithms</course>
    </courses>
  </student>
</students>
~~~

## Example 3: Choice and Optional Elements

~~~xml
<!DOCTYPE message [
  <!ELEMENT message (header, body, (attachment | link)?)>
  <!ELEMENT header (from, to, subject, date)>
  <!ELEMENT from (#PCDATA)>
  <!ELEMENT to (#PCDATA)>
  <!ELEMENT subject (#PCDATA)>
  <!ELEMENT date (#PCDATA)>
  <!ELEMENT body (#PCDATA)>
  <!ELEMENT attachment (#PCDATA)>
  <!ELEMENT link (#PCDATA)>
  
  <!ATTLIST message 
    priority (low|normal|high) "normal"
    encrypted (yes|no) "no">
]>
<message priority="high" encrypted="yes">
  <header>
    <from>alice@example.com</from>
    <to>bob@example.com</to>
    <subject>Project Update</subject>
    <date>2024-01-15</date>
  </header>
  <body>Please review the attached document.</body>
  <attachment>project_plan.pdf</attachment>
</message>
~~~

### Cardinality Operators Explained:
\`\`\`
? = optional (0 or 1)        example: address?
* = zero or more             example: comment*
+ = one or more              example: book+
| = choice                   example: (email|phone)
, = sequence (order matters) example: (firstName, lastName)
\`\`\`

## Example 4: Attribute Types

~~~dtd
<!ELEMENT product EMPTY>
<!ATTLIST product
  id ID #REQUIRED           <!-- Unique identifier -->
  name CDATA #REQUIRED      <!-- Character data -->
  category (electronics|clothing|food) #REQUIRED  <!-- Enumeration -->
  inStock (yes|no) "yes"    <!-- Default value -->
  manufacturer CDATA #IMPLIED  <!-- Optional -->
  related IDREFS #IMPLIED>  <!-- References to other product IDs -->
~~~

**Usage:**
~~~xml
<product id="p001" name="Laptop" category="electronics" 
         manufacturer="Dell" related="p002 p003"/>
<product id="p002" name="Mouse" category="electronics" inStock="no"/>
<product id="p003" name="Keyboard" category="electronics"/>
~~~`,
          practical: `## Hands-on

- Draft a DTD for a course catalog with course, credits, faculty.
- Validate one XML sample, then break rules (wrong order, missing attribute) to see error messages.
- Move rules to an external DTD and reference it from your XML.`,
          exam: `## Exam prep

- Define #PCDATA and EMPTY.
- Write one element declaration using + and |.
- Sketch a DOCTYPE for an employee file with required id attribute.`,
          takeaways: `## Takeaways

- DTD gives structural validation but almost no data typing.
- Keep content models simple; deeply nested choices become unreadable.
- External DTDs promote reuse across documents.`,
        },
      },
      {
        id: 'dtd-advanced',
        title: 'Advanced DTD: Entities, Mixed Content, and Limitations',
        subtopics: [
          'General and parameter entities',
          'Mixed content models',
          'ID/IDREF relationships',
          'Why XSD replaces many DTD roles',
        ],
        clos: ['CLO02'],
        cos: ['CO02'],
        content: {
          introduction:
            'This topic is about reuse and realism. Entities keep repeated text consistent, mixed content supports text with inline tags, and ID/IDREF mimic primary/foreign keys. You also learn where DTDs fall short so you can justify XSD.',
          concept: `## Entity toolkit

- General entity: reusable text inside XML instances.
- Parameter entity: reusable fragments inside the DTD itself.

## Mixed content

Allows text with inline elements, e.g., paragraphs that contain <b> and <i>.`,
          technicalDepth: `## Patterns to remember

General entity
~~~dtd
<!ENTITY company "ACME Pvt Ltd">
...
<name>&company;</name>
~~~

Parameter entity
~~~dtd
<!ENTITY % commonAttrs "id ID #REQUIRED created CDATA #IMPLIED">
<!ATTLIST book %commonAttrs;>
~~~

Mixed content
~~~dtd
<!ELEMENT p (#PCDATA|b|i)*>
~~~

Limitations
- No native data ranges or regex patterns.
- Poor namespace story.
- Not written in XML, so tooling reuse is limited.`,
          examples: `## Example 1: General and Parameter Entities

~~~xml
<?xml version="1.0"?>
<!DOCTYPE university [
  <!-- General entities for reuse in XML content -->
  <!ENTITY institute "Indian Institute of Technology">
  <!ENTITY address "IIT Campus, Delhi - 110016">
  <!ENTITY phone "+91-11-26581234">
  
  <!-- Parameter entity for reuse in DTD -->
  <!ENTITY % personInfo "name, email, phone">
  <!ENTITY % contactAttrs "id ID #REQUIRED status (active|inactive) 'active'">
  
  <!ELEMENT university (student+, faculty+)>
  <!ELEMENT student (%personInfo;, department, year)>
  <!ELEMENT faculty (%personInfo;, department, designation)>
  <!ELEMENT name (#PCDATA)>
  <!ELEMENT email (#PCDATA)>
  <!ELEMENT phone (#PCDATA)>
  <!ELEMENT department (#PCDATA)>
  <!ELEMENT year (#PCDATA)>
  <!ELEMENT designation (#PCDATA)>
  
  <!ATTLIST student %contactAttrs;>
  <!ATTLIST faculty %contactAttrs;>
]>
<university>
  <student id="s1" status="active">
    <name>Rahul Sharma</name>
    <email>rahul@example.com</email>
    <phone>&phone;</phone>
    <department>CSE</department>
    <year>3</year>
  </student>
  <faculty id="f1">
    <name>Dr. Priya Singh</name>
    <email>priya@example.com</email>
    <phone>&phone;</phone>
    <department>CSE</department>
    <designation>Professor</designation>
  </faculty>
</university>
~~~

**How entities help:**
- \`&phone;\` replaced with "+91-11-26581234" everywhere
- \`%personInfo;\` expands to "name, email, phone" in DTD
- Change once, update everywhere

## Example 2: Mixed Content for Documents

~~~xml
<!DOCTYPE article [
  <!ELEMENT article (title, author, content+)>
  <!ELEMENT title (#PCDATA)>
  <!ELEMENT author (#PCDATA)>
  <!ELEMENT content (paragraph+)>
  
  <!-- Mixed content: text with inline formatting -->
  <!ELEMENT paragraph (#PCDATA|bold|italic|code|link)*>
  <!ELEMENT bold (#PCDATA)>
  <!ELEMENT italic (#PCDATA)>
  <!ELEMENT code (#PCDATA)>
  <!ELEMENT link (#PCDATA)>
  
  <!ATTLIST link href CDATA #REQUIRED>
]>
<article>
  <title>Introduction to XML</title>
  <author>John Doe</author>
  <content>
    <paragraph>
      XML stands for <bold>eXtensible Markup Language</bold>. 
      It is widely used for <italic>data exchange</italic> between systems.
      You can validate XML using <code>xmllint</code> or similar tools.
      Practice XML coding to master these concepts.
    </paragraph>
    <paragraph>
      XML documents must be <bold>well-formed</bold> to be parsed correctly.
    </paragraph>
  </content>
</article>
~~~

### Visual Structure:
\`\`\`
paragraph (mixed content)
├── text: "XML stands for "
├── bold: "eXtensible Markup Language"
├── text: ". It is widely used for "
├── italic: "data exchange"
└── text: " between systems."
\`\`\`

## Example 3: ID and IDREF Relationships

~~~xml
<!DOCTYPE library [
  <!ELEMENT library (authors, books)>
  <!ELEMENT authors (author+)>
  <!ELEMENT author (name, bio)>
  <!ELEMENT name (#PCDATA)>
  <!ELEMENT bio (#PCDATA)>
  
  <!ELEMENT books (book+)>
  <!ELEMENT book (title, price)>
  <!ELEMENT title (#PCDATA)>
  <!ELEMENT price (#PCDATA)>
  
  <!ATTLIST author 
    authorId ID #REQUIRED>
  <!ATTLIST book 
    bookId ID #REQUIRED
    writtenBy IDREF #REQUIRED>
]>
<library>
  <authors>
    <author authorId="a1">
      <name>Robert Martin</name>
      <bio>Software engineer and author</bio>
    </author>
    <author authorId="a2">
      <name>Martin Fowler</name>
      <bio>Chief Scientist at ThoughtWorks</bio>
    </author>
  </authors>
  <books>
    <book bookId="b1" writtenBy="a1">
      <title>Clean Code</title>
      <price>450</price>
    </book>
    <book bookId="b2" writtenBy="a1">
      <title>Clean Architecture</title>
      <price>550</price>
    </book>
    <book bookId="b3" writtenBy="a2">
      <title>Refactoring</title>
      <price>600</price>
    </book>
  </books>
</library>
~~~

### Relationship Diagram:
\`\`\`
author (authorId="a1")              author (authorId="a2")
  └── "Robert Martin"                 └── "Martin Fowler"
        ↑                                     ↑
        |                                     |
    writtenBy                             writtenBy
        |                                     |
book (bookId="b1")                    book (bookId="b3")
book (bookId="b2")
\`\`\`

## Example 4: DTD Limitations Illustrated

**❌ DTD Cannot:**

~~~dtd
<!-- Cannot specify data type ranges -->
<!ELEMENT price (#PCDATA)>  <!-- Cannot say "must be between 0-10000" -->

<!-- Cannot enforce patterns -->
<!ELEMENT email (#PCDATA)>  <!-- Cannot validate email format -->

<!-- Weak namespace support -->
<!ELEMENT book:title (#PCDATA)>  <!-- Namespaces are awkward -->
~~~

**✅ XSD Can:**

~~~xml
<!-- Specify ranges -->
<xs:element name="price">
  <xs:simpleType>
    <xs:restriction base="xs:decimal">
      <xs:minInclusive value="0"/>
      <xs:maxInclusive value="10000"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>

<!-- Enforce patterns -->
<xs:element name="email">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:pattern value="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
~~~`,
          practical: `## Try it

- Add a general entity for your institute name and reuse it in two elements.
- Create a paragraph element that allows bold/italic mixed with text.
- Add ID/IDREF to link a book to a publisher element.`,
          exam: `## Exam cues

- Difference between general and parameter entities.
- Mixed content syntax and why the * is required.
- Three crisp limitations of DTD vs XSD.`,
          takeaways: `## Takeaways

- Entities reduce duplication; parameter entities keep DTDs DRY.
- Mixed content is essential for narrative text with inline markup.
- Use XSD when you need types, namespaces, and stricter constraints.`,
        },
      },
    ],
  },
  {
    id: 'unit-3',
    title: 'UNIT III: XML Schema (XSD)',
    topics: [
      {
        id: 'xsd-fundamentals',
        title: 'XSD Fundamentals: Namespaces, Types, and Structure',
        subtopics: [
          'Schema document shape',
          'targetNamespace and qualification',
          'Simple vs complex types',
          'sequence/choice/all',
          'minOccurs/maxOccurs',
        ],
        clos: ['CLO02'],
        cos: ['CO03'],
        content: {
          introduction:
            'XSD is the W3C recommendation for expressing XML structure and datatypes using XML syntax itself. It brings namespaces, strong typing, and precise control over order and cardinality.',
          concept: `## Why XSD beats DTD

- Written in XML, so it can be parsed and validated like any other XML.
- Rich built-in types: string, boolean, decimal, date, dateTime, integer, etc.
- Namespaces are first-class, preventing collisions in large vocabularies.
- Facets add business rules (length, pattern, ranges).`,
          technicalDepth: `## Skeleton to memorize

~~~xml
<xs:schema xmlns:xs="http://schemas.xmlsoap.org/xmlschema/2001"
           targetNamespace="http://example.com/student"
           xmlns="http://example.com/student"
           elementFormDefault="qualified">

  <xs:element name="student" type="StudentType"/>

  <xs:complexType name="StudentType">
    <xs:sequence>
      <xs:element name="name" type="xs:string"/>
      <xs:element name="dept" type="xs:string"/>
      <xs:element name="cgpa" type="xs:decimal"/>
    </xs:sequence>
    <xs:attribute name="id" type="xs:ID" use="required"/>
  </xs:complexType>

</xs:schema>
~~~

### Model groups
- xs:sequence → ordered children.
- xs:choice → one of the listed children.
- xs:all → any order, each 0 or 1 by design.

### Occurrence constraints
minOccurs / maxOccurs mirrors ?, *, + from DTD.`,
          examples: `## Example 1: Basic XSD Structure

**File: student.xsd**
~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://schemas.xmlsoap.org/xmlschema/2001"
           targetNamespace="http://example.com/student"
           xmlns="http://example.com/student"
           elementFormDefault="qualified">

  <!-- Root element -->
  <xs:element name="student" type="StudentType"/>

  <!-- Complex type definition -->
  <xs:complexType name="StudentType">
    <xs:sequence>
      <xs:element name="name" type="xs:string"/>
      <xs:element name="department" type="xs:string"/>
      <xs:element name="cgpa" type="xs:decimal"/>
      <xs:element name="courses" type="CoursesType"/>
    </xs:sequence>
    <xs:attribute name="id" type="xs:ID" use="required"/>
    <xs:attribute name="year" type="xs:integer" use="required"/>
  </xs:complexType>

  <!-- Nested complex type -->
  <xs:complexType name="CoursesType">
    <xs:sequence>
      <xs:element name="course" type="xs:string" 
                  minOccurs="1" maxOccurs="unbounded"/>
    </xs:sequence>
  </xs:complexType>

</xs:schema>
~~~

**File: student.xml**
~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<student xmlns="http://example.com/student"
         xmlns:xsi="http://schemas.xmlsoap.org/xmlschema/2001-instance"
         xsi:schemaLocation="http://example.com/student student.xsd"
         id="S001" year="3">
  <name>Alice Johnson</name>
  <department>CSE</department>
  <cgpa>9.2</cgpa>
  <courses>
    <course>Data Structures</course>
    <course>Algorithms</course>
    <course>Operating Systems</course>
  </courses>
</student>
~~~

### Visual Schema Structure:
\`\`\`
StudentType
├── sequence (ordered elements)
│   ├── name (string)
│   ├── department (string)
│   ├── cgpa (decimal)
│   └── courses (CoursesType)
│       └── course (1 to unlimited strings)
└── attributes
    ├── id (ID, required)
    └── year (integer, required)
\`\`\`

## Example 2: Repeating Elements with Occurrence

~~~xml
<xs:element name="book" type="BookType" minOccurs="0" maxOccurs="unbounded"/>
<!-- 0 to unlimited books allowed -->

<xs:element name="title" type="xs:string" minOccurs="1" maxOccurs="1"/>
<!-- Exactly 1 title required (default) -->

<xs:element name="author" type="xs:string" maxOccurs="5"/>
<!-- 1 to 5 authors (minOccurs defaults to 1) -->
~~~

**Complete Example:**
~~~xml
<xs:complexType name="LibraryType">
  <xs:sequence>
    <xs:element name="book" minOccurs="1" maxOccurs="unbounded">
      <xs:complexType>
        <xs:sequence>
          <xs:element name="title" type="xs:string"/>
          <xs:element name="author" type="xs:string" 
                      minOccurs="1" maxOccurs="5"/>
          <xs:element name="price" type="xs:decimal"/>
          <xs:element name="description" type="xs:string" 
                      minOccurs="0"/>
        </xs:sequence>
        <xs:attribute name="isbn" type="xs:string" use="required"/>
      </xs:complexType>
    </xs:element>
  </xs:sequence>
</xs:complexType>
~~~

## Example 3: Choice vs Sequence vs All

**Sequence (order matters):**
~~~xml
<xs:complexType name="PersonType">
  <xs:sequence>
    <xs:element name="firstName" type="xs:string"/>
    <xs:element name="lastName" type="xs:string"/>
    <xs:element name="age" type="xs:integer"/>
  </xs:sequence>
</xs:complexType>
~~~
**Valid XML:** firstName → lastName → age (in that order)

**Choice (pick one):**
~~~xml
<xs:complexType name="ContactType">
  <xs:choice>
    <xs:element name="email" type="xs:string"/>
    <xs:element name="phone" type="xs:string"/>
  </xs:choice>
</xs:complexType>
~~~
**Valid XML:** Either email OR phone (not both)

**All (any order, each 0 or 1):**
~~~xml
<xs:complexType name="AddressType">
  <xs:all>
    <xs:element name="street" type="xs:string"/>
    <xs:element name="city" type="xs:string"/>
    <xs:element name="zip" type="xs:string"/>
  </xs:all>
</xs:complexType>
~~~
**Valid XML:** street, city, zip in any order

## Example 4: Simple vs Complex Types

**Simple Type (no children, no attributes):**
~~~xml
<xs:element name="price" type="xs:decimal"/>
<xs:element name="email" type="xs:string"/>
~~~

**Complex Type with Simple Content (has attributes):**
~~~xml
<xs:element name="price">
  <xs:complexType>
    <xs:simpleContent>
      <xs:extension base="xs:decimal">
        <xs:attribute name="currency" type="xs:string" use="required"/>
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>
</xs:element>
~~~
**Valid XML:** \`<price currency="USD">49.99</price>\`

**Complex Type with Complex Content (has child elements):**
~~~xml
<xs:complexType name="BookType">
  <xs:sequence>
    <xs:element name="title" type="xs:string"/>
    <xs:element name="author" type="xs:string"/>
  </xs:sequence>
</xs:complexType>
~~~`,
          practical: `## Build it

- Write an XSD for a student or inventory dataset.
- Add one required attribute and one repeating child.
- Validate at least two XML instances against it.`,
          exam: `## Exam must-knows

- Role of targetNamespace and elementFormDefault.
- Difference between simpleType and complexType.
- When to use sequence vs choice vs all.`,
          takeaways: `## Takeaways

- Start with a clear namespace; keep it consistent across XML and XSD.
- Choose the right model group to match business order requirements.
- Occurrence constraints are your first line of validation.`,
        },
      },
      {
        id: 'xsd-advanced',
        title: 'Advanced XSD: Restrictions, Extensions, and Identity Constraints',
        subtopics: ['Facets', 'Enumerations', 'Patterns', 'Type derivation', 'key/unique/keyref'],
        clos: ['CLO02', 'CLO05'],
        cos: ['CO03'],
        content: {
          introduction:
            'Beyond structure, XSD lets you express business rules: allowed ranges, controlled vocabularies, and relational links. It also supports reuse through type derivation.',
          concept: `## Facets = constraints

- Range: minInclusive, maxInclusive, minExclusive, maxExclusive.
- Vocabulary: enumeration.
- Shape: length, minLength, maxLength.
- Pattern: regular expressions for formats (phone, code, ids).

## Derivation strategies
- Restriction: narrow an existing type.
- Extension: add elements/attributes to an existing type.

## Identity constraints
- xs:unique → values must be unique in scope.
- xs:key → primary-key-like constraint.
- xs:keyref → foreign-key-like reference.`,
          technicalDepth: `## Concrete snippets

Range restriction
~~~xml
<xs:simpleType name="CgpaType">
  <xs:restriction base="xs:decimal">
    <xs:minInclusive value="0.0"/>
    <xs:maxInclusive value="10.0"/>
  </xs:restriction>
</xs:simpleType>
~~~

Enumeration
~~~xml
<xs:simpleType name="DeptType">
  <xs:restriction base="xs:string">
    <xs:enumeration value="CSE"/>
    <xs:enumeration value="ECE"/>
    <xs:enumeration value="ME"/>
  </xs:restriction>
</xs:simpleType>
~~~

Identity constraints
~~~xml
<xs:element name="library">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="book" maxOccurs="unbounded">
        <xs:complexType>
          <xs:attribute name="id" type="xs:ID" use="required"/>
        </xs:complexType>
      </xs:element>
    </xs:sequence>
    <xs:key name="bookId">
      <xs:selector xpath="book"/>
      <xs:field xpath="@id"/>
    </xs:key>
  </xs:complexType>
</xs:element>
~~~`,
          examples: `## Example 1: Facets - Range Restrictions

~~~xml
<xs:schema xmlns:xs="http://schemas.xmlsoap.org/xmlschema/2001">

  <!-- CGPA must be between 0 and 10 -->
  <xs:element name="cgpa">
    <xs:simpleType>
      <xs:restriction base="xs:decimal">
        <xs:minInclusive value="0.0"/>
        <xs:maxInclusive value="10.0"/>
        <xs:fractionDigits value="2"/>
      </xs:restriction>
    </xs:simpleType>
  </xs:element>

  <!-- Age must be between 18 and 100 -->
  <xs:element name="age">
    <xs:simpleType>
      <xs:restriction base="xs:integer">
        <xs:minInclusive value="18"/>
        <xs:maxInclusive value="100"/>
      </xs:restriction>
    </xs:simpleType>
  </xs:element>

  <!-- Percentage must be 0 to 100 -->
  <xs:element name="percentage">
    <xs:simpleType>
      <xs:restriction base="xs:decimal">
        <xs:minInclusive value="0"/>
        <xs:maxInclusive value="100"/>
      </xs:restriction>
    </xs:simpleType>
  </xs:element>

</xs:schema>
~~~

**Valid XML:**
~~~xml
<cgpa>9.25</cgpa>
<age>21</age>
<percentage>85.5</percentage>
~~~

## Example 2: Enumerations (Controlled Vocabulary)

~~~xml
<xs:schema xmlns:xs="http://schemas.xmlsoap.org/xmlschema/2001">

  <!-- Department must be one of these -->
  <xs:simpleType name="DeptType">
    <xs:restriction base="xs:string">
      <xs:enumeration value="CSE"/>
      <xs:enumeration value="ECE"/>
      <xs:enumeration value="ME"/>
      <xs:enumeration value="CE"/>
      <xs:enumeration value="EE"/>
    </xs:restriction>
  </xs:simpleType>

  <!-- Status enumeration -->
  <xs:simpleType name="StatusType">
    <xs:restriction base="xs:string">
      <xs:enumeration value="active"/>
      <xs:enumeration value="inactive"/>
      <xs:enumeration value="suspended"/>
      <xs:enumeration value="graduated"/>
    </xs:restriction>
  </xs:simpleType>

  <!-- Priority levels -->
  <xs:simpleType name="PriorityType">
    <xs:restriction base="xs:string">
      <xs:enumeration value="low"/>
      <xs:enumeration value="medium"/>
      <xs:enumeration value="high"/>
      <xs:enumeration value="critical"/>
    </xs:restriction>
  </xs:simpleType>

  <xs:element name="student">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="name" type="xs:string"/>
        <xs:element name="department" type="DeptType"/>
      </xs:sequence>
      <xs:attribute name="status" type="StatusType" use="required"/>
    </xs:complexType>
  </xs:element>

</xs:schema>
~~~

**Valid XML:**
~~~xml
<student status="active">
  <name>Raj Kumar</name>
  <department>CSE</department>
</student>
~~~

## Example 3: Pattern Facets (Regular Expressions)

~~~xml
<xs:schema xmlns:xs="http://schemas.xmlsoap.org/xmlschema/2001">

  <!-- Phone: exactly 10 digits -->
  <xs:simpleType name="PhoneType">
    <xs:restriction base="xs:string">
      <xs:pattern value="[0-9]{10}"/>
    </xs:restriction>
  </xs:simpleType>

  <!-- Email pattern -->
  <xs:simpleType name="EmailType">
    <xs:restriction base="xs:string">
      <xs:pattern value="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"/>
    </xs:restriction>
  </xs:simpleType>

  <!-- Student ID: S followed by 4 digits -->
  <xs:simpleType name="StudentIdType">
    <xs:restriction base="xs:string">
      <xs:pattern value="S[0-9]{4}"/>
    </xs:restriction>
  </xs:simpleType>

  <!-- Postal code: 6 digits -->
  <xs:simpleType name="PinCodeType">
    <xs:restriction base="xs:string">
      <xs:pattern value="[0-9]{6}"/>
    </xs:restriction>
  </xs:simpleType>

  <!-- Product code: 3 letters + 4 digits -->
  <xs:simpleType name="ProductCodeType">
    <xs:restriction base="xs:string">
      <xs:pattern value="[A-Z]{3}[0-9]{4}"/>
    </xs:restriction>
  </xs:simpleType>

</xs:schema>
~~~

**Valid Examples:**
~~~xml
<phone>9876543210</phone>
<email>student@example.com</email>
<studentId>S1234</studentId>
<pinCode>110016</pinCode>
<productCode>ABC1234</productCode>
~~~

## Example 4: Length Facets

~~~xml
<xs:schema xmlns:xs="http://schemas.xmlsoap.org/xmlschema/2001">

  <!-- Username: 3 to 20 characters -->
  <xs:simpleType name="UsernameType">
    <xs:restriction base="xs:string">
      <xs:minLength value="3"/>
      <xs:maxLength value="20"/>
    </xs:restriction>
  </xs:simpleType>

  <!-- Password: exactly 8 characters -->
  <xs:simpleType name="PasswordType">
    <xs:restriction base="xs:string">
      <xs:length value="8"/>
    </xs:restriction>
  </xs:simpleType>

  <!-- Description: max 500 characters -->
  <xs:simpleType name="DescriptionType">
    <xs:restriction base="xs:string">
      <xs:maxLength value="500"/>
    </xs:restriction>
  </xs:simpleType>

</xs:schema>
~~~

## Example 5: Type Derivation - Extension

~~~xml
<xs:schema xmlns:xs="http://schemas.xmlsoap.org/xmlschema/2001">

  <!-- Base type: Person -->
  <xs:complexType name="PersonType">
    <xs:sequence>
      <xs:element name="name" type="xs:string"/>
      <xs:element name="email" type="xs:string"/>
      <xs:element name="phone" type="xs:string"/>
    </xs:sequence>
    <xs:attribute name="id" type="xs:ID" use="required"/>
  </xs:complexType>

  <!-- Extended type: Student adds more fields -->
  <xs:complexType name="StudentType">
    <xs:complexContent>
      <xs:extension base="PersonType">
        <xs:sequence>
          <xs:element name="department" type="xs:string"/>
          <xs:element name="cgpa" type="xs:decimal"/>
          <xs:element name="year" type="xs:integer"/>
        </xs:sequence>
        <xs:attribute name="rollNumber" type="xs:string" use="required"/>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>

  <!-- Extended type: Faculty adds different fields -->
  <xs:complexType name="FacultyType">
    <xs:complexContent>
      <xs:extension base="PersonType">
        <xs:sequence>
          <xs:element name="department" type="xs:string"/>
          <xs:element name="designation" type="xs:string"/>
          <xs:element name="specialization" type="xs:string"/>
        </xs:sequence>
        <xs:attribute name="employeeId" type="xs:string" use="required"/>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>

</xs:schema>
~~~

**Valid XML:**
~~~xml
<student id="p1" rollNumber="2021CSE001">
  <name>Priya Sharma</name>
  <email>priya@example.com</email>
  <phone>9876543210</phone>
  <department>CSE</department>
  <cgpa>9.1</cgpa>
  <year>3</year>
</student>
~~~

## Example 6: Identity Constraints (key, unique, keyref)

~~~xml
<xs:schema xmlns:xs="http://schemas.xmlsoap.org/xmlschema/2001">

  <xs:element name="university">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="departments" type="DepartmentsType"/>
        <xs:element name="students" type="StudentsType"/>
      </xs:sequence>
    </xs:complexType>

    <!-- Key: Department codes must be unique -->
    <xs:key name="deptKey">
      <xs:selector xpath="departments/department"/>
      <xs:field xpath="@code"/>
    </xs:key>

    <!-- Keyref: Student's dept must reference a valid department -->
    <xs:keyref name="studentDeptRef" refer="deptKey">
      <xs:selector xpath="students/student"/>
      <xs:field xpath="@deptCode"/>
    </xs:keyref>

    <!-- Unique: Student emails must be unique -->
    <xs:unique name="uniqueEmail">
      <xs:selector xpath="students/student"/>
      <xs:field xpath="email"/>
    </xs:unique>
  </xs:element>

  <xs:complexType name="DepartmentsType">
    <xs:sequence>
      <xs:element name="department" maxOccurs="unbounded">
        <xs:complexType>
          <xs:sequence>
            <xs:element name="name" type="xs:string"/>
          </xs:sequence>
          <xs:attribute name="code" type="xs:string" use="required"/>
        </xs:complexType>
      </xs:element>
    </xs:sequence>
  </xs:complexType>

  <xs:complexType name="StudentsType">
    <xs:sequence>
      <xs:element name="student" maxOccurs="unbounded">
        <xs:complexType>
          <xs:sequence>
            <xs:element name="name" type="xs:string"/>
            <xs:element name="email" type="xs:string"/>
          </xs:sequence>
          <xs:attribute name="id" type="xs:string" use="required"/>
          <xs:attribute name="deptCode" type="xs:string" use="required"/>
        </xs:complexType>
      </xs:element>
    </xs:sequence>
  </xs:complexType>

</xs:schema>
~~~

**Valid XML:**
~~~xml
<university>
  <departments>
    <department code="CSE">
      <name>Computer Science</name>
    </department>
    <department code="ECE">
      <name>Electronics</name>
    </department>
  </departments>
  <students>
    <student id="s1" deptCode="CSE">
      <name>Alice</name>
      <email>alice@example.com</email>
    </student>
    <student id="s2" deptCode="ECE">
      <name>Bob</name>
      <email>bob@example.com</email>
    </student>
  </students>
</university>
~~~

### Constraint Types:
\`\`\`
key      → Primary key (unique + not null)
unique   → Values must be unique (can be null)
keyref   → Foreign key (references another key)
\`\`\``,
          practical: `## Do it

- Add an enumeration for department codes and a pattern for phone numbers.
- Introduce xs:key for unique IDs and xs:keyref for referencing them.
- Derive one new type using extension (e.g., StaffType extends PersonType).`,
          exam: `## Exam direction

- Explain how facets differ from derivation.
- Write one example each for key and keyref.
- State two real benefits of identity constraints in XML integration.`,
          takeaways: `## Takeaways

- Facets encode business rules; derivation encodes reuse.
- Identity constraints give XML relational-style integrity.
- Always document the scope of selectors when using keys.`,
        },
      },
    ],
  },
  {
    id: 'unit-4',
    title: 'UNIT IV: XSLT (Transformations)',
    topics: [
      {
        id: 'xslt-basics',
        title: 'XSLT Basics: Templates, Match/Select, and HTML Output',
        subtopics: ['Templates', 'match/select', 'apply-templates', 'for-each', 'HTML output'],
        clos: ['CLO04'],
        cos: ['CO04'],
        content: {
          introduction:
            'XSLT is a rule-driven language that walks an XML tree with XPath and emits another document (HTML, text, XML, PDF via FO). Mastering templates and context selection is the gateway to clean transformations.',
          concept: `## Core ideas

- Templates match nodes; matching sets the current context.
- apply-templates delegates processing; value-of pulls text.
- for-each iterates when you need full control over ordering.
- output method controls whether you emit XML, HTML, or text.`,
          technicalDepth: `## Minimal, exam-ready stylesheet

~~~xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://schemas.xmlsoap.org/xslt/1999/transform">
  <xsl:output method="html" indent="yes"/>

  <xsl:template match="/">
    <html><body>
      <h1>Library</h1>
      <xsl:apply-templates select="library/book"/>
    </body></html>
  </xsl:template>

  <xsl:template match="book">
    <p><xsl:value-of select="title"/></p>
  </xsl:template>
</xsl:stylesheet>
~~~

Sorting inside for-each:
~~~xml
<xsl:for-each select="library/book">
  <xsl:sort select="number(price)" data-type="number" order="descending"/>
  <xsl:value-of select="title"/>
</xsl:for-each>
~~~`,
          examples: `## Sample XML for All XSLT Examples

**File: library.xml**
~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<library>
  <book id="b1" category="technology">
    <title>XML Fundamentals</title>
    <author>John Doe</author>
    <price>499</price>
    <year>2020</year>
  </book>
  <book id="b2" category="technology">
    <title>XSLT Mastery</title>
    <author>Jane Smith</author>
    <price>599</price>
    <year>2021</year>
  </book>
  <book id="b3" category="fiction">
    <title>The Great Adventure</title>
    <author>Bob Johnson</author>
    <price>299</price>
    <year>2019</year>
  </book>
</library>
~~~

## Example 1: Basic Template Matching

**File: basic.xsl**
~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://schemas.xmlsoap.org/xslt/1999/transform">
  
  <xsl:output method="html" indent="yes"/>

  <!-- Root template -->
  <xsl:template match="/">
    <html>
      <head>
        <title>Library Catalog</title>
      </head>
      <body>
        <h1>Book Library</h1>
        <xsl:apply-templates select="library/book"/>
      </body>
    </html>
  </xsl:template>

  <!-- Book template -->
  <xsl:template match="book">
    <div>
      <h2><xsl:value-of select="title"/></h2>
      <p>Author: <xsl:value-of select="author"/></p>
      <p>Price: ₹<xsl:value-of select="price"/></p>
      <hr/>
    </div>
  </xsl:template>

</xsl:stylesheet>
~~~

**Output HTML:**
~~~html
<html>
  <head><title>Library Catalog</title></head>
  <body>
    <h1>Book Library</h1>
    <div>
      <h2>XML Fundamentals</h2>
      <p>Author: John Doe</p>
      <p>Price: ₹499</p>
      <hr/>
    </div>
    <div>
      <h2>XSLT Mastery</h2>
      <p>Author: Jane Smith</p>
      <p>Price: ₹599</p>
      <hr/>
    </div>
    <!-- ... more books ... -->
  </body>
</html>
~~~

## Example 2: HTML Table with for-each

~~~xml
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://schemas.xmlsoap.org/xslt/1999/transform">
  
  <xsl:output method="html" indent="yes"/>

  <xsl:template match="/">
    <html>
      <body>
        <h1>Library Catalog</h1>
        <table border="1" cellpadding="5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="library/book">
              <tr>
                <td><xsl:value-of select="@id"/></td>
                <td><xsl:value-of select="title"/></td>
                <td><xsl:value-of select="author"/></td>
                <td>₹<xsl:value-of select="price"/></td>
                <td><xsl:value-of select="@category"/></td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
~~~

**Output:**
\`\`\`
| ID | Title             | Author       | Price | Category   |
|----|-------------------|--------------|-------|------------|
| b1 | XML Fundamentals  | John Doe     | ₹499  | technology |
| b2 | XSLT Mastery      | Jane Smith   | ₹599  | technology |
| b3 | The Great Adventure| Bob Johnson | ₹299  | fiction    |
\`\`\`

## Example 3: Sorting Data

~~~xml
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://schemas.xmlsoap.org/xslt/1999/transform">
  
  <xsl:output method="html"/>

  <xsl:template match="/">
    <html>
      <body>
        <h2>Books Sorted by Price (Descending)</h2>
        <table border="1">
          <tr>
            <th>Title</th>
            <th>Price</th>
          </tr>
          <xsl:for-each select="library/book">
            <!-- Sort by price numerically in descending order -->
            <xsl:sort select="price" data-type="number" order="descending"/>
            <tr>
              <td><xsl:value-of select="title"/></td>
              <td>₹<xsl:value-of select="price"/></td>
            </tr>
          </xsl:for-each>
        </table>

        <h2>Books Sorted by Title (Ascending)</h2>
        <table border="1">
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
          <xsl:for-each select="library/book">
            <!-- Sort by title alphabetically -->
            <xsl:sort select="title" data-type="text" order="ascending"/>
            <tr>
              <td><xsl:value-of select="title"/></td>
              <td><xsl:value-of select="author"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
~~~

**First Table Output (by price):**
\`\`\`
XSLT Mastery       - ₹599
XML Fundamentals   - ₹499
The Great Adventure - ₹299
\`\`\`

## Example 4: Using xsl:if

~~~xml
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://schemas.xmlsoap.org/xslt/1999/transform">

  <xsl:template match="/">
    <html>
      <body>
        <h2>Expensive Books (Above ₹400)</h2>
        <ul>
          <xsl:for-each select="library/book">
            <xsl:if test="price &gt; 400">
              <li>
                <xsl:value-of select="title"/> - 
                ₹<xsl:value-of select="price"/>
                <xsl:if test="price &gt; 550">
                  <strong> [PREMIUM]</strong>
                </xsl:if>
              </li>
            </xsl:if>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
~~~

**Output:**
~~~html
<h2>Expensive Books (Above ₹400)</h2>
<ul>
  <li>XML Fundamentals - ₹499</li>
  <li>XSLT Mastery - ₹599 <strong>[PREMIUM]</strong></li>
</ul>
~~~

## Example 5: Using xsl:choose (Multi-way Branch)

~~~xml
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://schemas.xmlsoap.org/xslt/1999/transform">

  <xsl:template match="/">
    <html>
      <body>
        <h2>Books with Price Categories</h2>
        <table border="1">
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Price Range</th>
            <th>Color</th>
          </tr>
          <xsl:for-each select="library/book">
            <tr>
              <td><xsl:value-of select="title"/></td>
              <td>₹<xsl:value-of select="price"/></td>
              <td>
                <xsl:choose>
                  <xsl:when test="price &gt; 500">
                    <strong>Expensive</strong>
                  </xsl:when>
                  <xsl:when test="price &gt; 400">
                    Moderate
                  </xsl:when>
                  <xsl:otherwise>
                    Affordable
                  </xsl:otherwise>
                </xsl:choose>
              </td>
              <td>
                <xsl:choose>
                  <xsl:when test="@category='technology'">
                    <span style="color: blue;">Tech</span>
                  </xsl:when>
                  <xsl:when test="@category='fiction'">
                    <span style="color: green;">Fiction</span>
                  </xsl:when>
                  <xsl:otherwise>
                    Other
                  </xsl:otherwise>
                </xsl:choose>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
~~~

**Output:**
\`\`\`
| Title               | Price | Price Range | Color   |
|---------------------|-------|-------------|---------|
| XML Fundamentals    | ₹499  | Moderate    | Tech    |
| XSLT Mastery        | ₹599  | Expensive   | Tech    |
| The Great Adventure | ₹299  | Affordable  | Fiction |
\`\`\`

## Example 6: Variables and Calculations

~~~xml
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://schemas.xmlsoap.org/xslt/1999/transform">

  <xsl:template match="/">
    <xsl:variable name="totalBooks" select="count(library/book)"/>
    <xsl:variable name="totalPrice" select="sum(library/book/price)"/>
    <xsl:variable name="avgPrice" select="$totalPrice div $totalBooks"/>
    <xsl:variable name="techBooks" select="count(library/book[@category='technology'])"/>

    <html>
      <body>
        <h1>Library Statistics</h1>
        <table border="1" cellpadding="5">
          <tr>
            <td><strong>Total Books:</strong></td>
            <td><xsl:value-of select="$totalBooks"/></td>
          </tr>
          <tr>
            <td><strong>Total Value:</strong></td>
            <td>₹<xsl:value-of select="$totalPrice"/></td>
          </tr>
          <tr>
            <td><strong>Average Price:</strong></td>
            <td>₹<xsl:value-of select="format-number($avgPrice, '0.00')"/></td>
          </tr>
          <tr>
            <td><strong>Technology Books:</strong></td>
            <td><xsl:value-of select="$techBooks"/></td>
          </tr>
        </table>

        <h2>Books Below Average Price</h2>
        <ul>
          <xsl:for-each select="library/book[price &lt; $avgPrice]">
            <li><xsl:value-of select="title"/> - ₹<xsl:value-of select="price"/></li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
~~~

**Output:**
~~~
Library Statistics
Total Books:     3
Total Value:     ₹1397
Average Price:   ₹465.67
Technology Books: 2

Books Below Average Price
- The Great Adventure - ₹299
~~~`,
          practical: `## Build a starter transform

- Generate an HTML table from book.xml.
- Add a header row with <th>.
- Sort by price descending using xsl:sort.
- Validate that the XSLT runs in a browser or xsltproc.`,
          exam: `## Exam prompts

- Difference between match and select.
- Role of apply-templates vs for-each.
- What does xsl:output method="html" do?`,
          takeaways: `## Takeaways

- Think in templates; keep the root template small.
- Use apply-templates for extensibility; reach for for-each when you must control order explicitly.
- Sorting and formatting are driven by XPath expressions.`,
        },
      },
      {
        id: 'xslt-advanced',
        title: 'Advanced XSLT: Conditions, Sorting, and Modular Design',
        subtopics: ['xsl:if', 'xsl:choose', 'xsl:sort', 'variables', 'modularity'],
        clos: ['CLO04', 'CLO05'],
        cos: ['CO04', 'CO05'],
        content: {
          introduction:
            'Real-world transforms branch, classify, and reuse logic. Conditions, variables, and separate templates keep stylesheets maintainable. You also learn to compute values (totals, averages) and to modularize code.',
          concept: `## Control and reuse

- xsl:if for single checks; xsl:choose for multi-branch logic.
- Variables hold computed values or XPath results (immutable once set).
- Named templates enable reuse across documents.
- Import/include split large stylesheets for teams.`,
          technicalDepth: `## Snippets worth memorizing

Branching
~~~xml
<xsl:choose>
  <xsl:when test="price &gt; 500">Expensive</xsl:when>
  <xsl:otherwise>Affordable</xsl:otherwise>
</xsl:choose>
~~~

Variables and totals
~~~xml
<xsl:variable name="total" select="sum(/library/book/price)"/>
<p>Total: <xsl:value-of select="$total"/></p>
~~~

Modularity
~~~xml
<xsl:call-template name="renderRow"/>
~~~`,
          examples: `## Example 1: Complete Classification Dashboard

~~~xml
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://schemas.xmlsoap.org/xslt/1999/transform">
  
  <xsl:output method="html" indent="yes"/>
  
  <!-- Variables for calculations -->
  <xsl:variable name="avgPrice" select="sum(library/book/price) div count(library/book)"/>
  <xsl:variable name="totalBooks" select="count(library/book)"/>
  <xsl:variable name="maxPrice" select="library/book/price[not(. &lt; ../preceding-sibling::book/price) and not(. &lt; ../following-sibling::book/price)]"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>Library Dashboard</title>
        <style>
          body { font-family: Arial; margin: 20px; }
          .stats { background: #f0f0f0; padding: 15px; margin: 10px 0; }
          .expensive { background-color: #ffcccc; }
          .moderate { background-color: #ffffcc; }
          .affordable { background-color: #ccffcc; }
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #4CAF50; color: white; }
        </style>
      </head>
      <body>
        <h1>📚 Library Dashboard</h1>
        
        <!-- Statistics Section -->
        <div class="stats">
          <h2>Statistics</h2>
          <p><strong>Total Books:</strong> <xsl:value-of select="$totalBooks"/></p>
          <p><strong>Total Value:</strong> ₹<xsl:value-of select="sum(library/book/price)"/></p>
          <p><strong>Average Price:</strong> ₹<xsl:value-of select="format-number($avgPrice, '0.00')"/></p>
          <p><strong>Highest Price:</strong> ₹<xsl:value-of select="$maxPrice"/></p>
        </div>

        <!-- Books Table with Classification -->
        <h2>All Books (Sorted by Price)</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Price</th>
              <th>Category</th>
              <th>Classification</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="library/book">
              <xsl:sort select="number(price)" data-type="number" order="descending"/>
              <xsl:variable name="priceClass">
                <xsl:choose>
                  <xsl:when test="price &gt; 500">expensive</xsl:when>
                  <xsl:when test="price &gt; 400">moderate</xsl:when>
                  <xsl:otherwise>affordable</xsl:otherwise>
                </xsl:choose>
              </xsl:variable>
              
              <tr class="{$priceClass}">
                <td><xsl:value-of select="title"/></td>
                <td><xsl:value-of select="author"/></td>
                <td>₹<xsl:value-of select="price"/></td>
                <td><xsl:value-of select="@category"/></td>
                <td>
                  <xsl:choose>
                    <xsl:when test="price &gt; $avgPrice">Above Average</xsl:when>
                    <xsl:otherwise>Below Average</xsl:otherwise>
                  </xsl:choose>
                  <xsl:if test="price = $maxPrice"> 🏆 Highest</xsl:if>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>

        <!-- Category Breakdown -->
        <h2>By Category</h2>
        <xsl:call-template name="categoryBreakdown">
          <xsl:with-param name="category" select="'technology'"/>
        </xsl:call-template>
        <xsl:call-template name="categoryBreakdown">
          <xsl:with-param name="category" select="'fiction'"/>
        </xsl:call-template>
      </body>
    </html>
  </xsl:template>

  <!-- Named Template for Reusable Category Display -->
  <xsl:template name="categoryBreakdown">
    <xsl:param name="category"/>
    <h3>Category: <xsl:value-of select="$category"/></h3>
    <ul>
      <xsl:for-each select="library/book[@category=$category]">
        <li>
          <xsl:value-of select="title"/> 
          (₹<xsl:value-of select="price"/>) - 
          <xsl:value-of select="author"/>
        </li>
      </xsl:for-each>
    </ul>
    <p>
      <strong>Count:</strong> <xsl:value-of select="count(library/book[@category=$category])"/> | 
      <strong>Total Value:</strong> ₹<xsl:value-of select="sum(library/book[@category=$category]/price)"/>
    </p>
  </xsl:template>

</xsl:stylesheet>
~~~

## Example 2: Conditional Formatting with Multiple Checks

~~~xml
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://schemas.xmlsoap.org/xslt/1999/transform">

  <xsl:template match="/">
    <html>
      <body>
        <h2>Book Analysis</h2>
        <table border="1">
          <tr>
            <th>Book</th>
            <th>Status</th>
            <th>Recommendation</th>
          </tr>
          <xsl:for-each select="library/book">
            <tr>
              <td><xsl:value-of select="title"/></td>
              <td>
                <!-- Multi-condition status -->
                <xsl:choose>
                  <xsl:when test="price &gt; 500 and @category='technology'">
                    💎 Premium Tech
                  </xsl:when>
                  <xsl:when test="price &gt; 500">
                    💰 High Value
                  </xsl:when>
                  <xsl:when test="@category='technology'">
                    💻 Tech Essential
                  </xsl:when>
                  <xsl:when test="year &lt; 2020">
                    📅 Classic
                  </xsl:when>
                  <xsl:otherwise>
                    📖 Standard
                  </xsl:otherwise>
                </xsl:choose>
              </td>
              <td>
                <!-- Recommendation logic -->
                <xsl:if test="price &lt; 350">
                  ⭐ Best Value! 
                </xsl:if>
                <xsl:if test="price &gt; 550">
                  ⚠️ Consider budget
                </xsl:if>
                <xsl:if test="year &gt; 2020">
                  🆕 Latest edition
                </xsl:if>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
~~~

## Example 3: Named Templates for Modular Code

~~~xml
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://schemas.xmlsoap.org/xslt/1999/transform">

  <!-- Main template -->
  <xsl:template match="/">
    <html>
      <body>
        <h1>Library Report</h1>
        
        <!-- Generate summary -->
        <xsl:call-template name="generateSummary"/>
        
        <!-- Generate detailed list -->
        <xsl:call-template name="generateDetailedList">
          <xsl:with-param name="sortBy" select="'price'"/>
        </xsl:call-template>
      </body>
    </html>
  </xsl:template>

  <!-- Named Template: Summary -->
  <xsl:template name="generateSummary">
    <div style="background: #e8f5e9; padding: 15px; margin: 10px 0;">
      <h2>Quick Summary</h2>
      <xsl:variable name="total" select="sum(//book/price)"/>
      <xsl:variable name="count" select="count(//book)"/>
      <p>Total Books: <xsl:value-of select="$count"/></p>
      <p>Total Investment: ₹<xsl:value-of select="$total"/></p>
      <p>Average: ₹<xsl:value-of select="format-number($total div $count, '0.00')"/></p>
    </div>
  </xsl:template>

  <!-- Named Template: Detailed List -->
  <xsl:template name="generateDetailedList">
    <xsl:param name="sortBy" select="'title'"/>
    <h2>Books (sorted by <xsl:value-of select="$sortBy"/>)</h2>
    <table border="1" style="width: 100%;">
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Price</th>
      </tr>
      <xsl:for-each select="//book">
        <xsl:sort select="*[name()=$sortBy]" data-type="number"/>
        <xsl:call-template name="bookRow"/>
      </xsl:for-each>
    </table>
  </xsl:template>

  <!-- Named Template: Book Row -->
  <xsl:template name="bookRow">
    <tr>
      <td><xsl:value-of select="title"/></td>
      <td><xsl:value-of select="author"/></td>
      <td>₹<xsl:value-of select="price"/></td>
    </tr>
  </xsl:template>

</xsl:stylesheet>
~~~

## Example 4: Advanced Sorting with Multiple Keys

~~~xml
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://schemas.xmlsoap.org/xslt/1999/transform">

  <xsl:template match="/">
    <html>
      <body>
        <h2>Multi-Level Sorting</h2>
        
        <!-- Sort by category, then by price within each category -->
        <table border="1">
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
          <xsl:for-each select="library/book">
            <!-- Primary sort: category (alphabetically) -->
            <xsl:sort select="@category" data-type="text" order="ascending"/>
            <!-- Secondary sort: price (numerically descending) -->
            <xsl:sort select="price" data-type="number" order="descending"/>
            <tr>
              <td><xsl:value-of select="@category"/></td>
              <td><xsl:value-of select="title"/></td>
              <td>₹<xsl:value-of select="price"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
~~~

**Output Order:**
\`\`\`
Category    | Title               | Price
------------|---------------------|-------
fiction     | The Great Adventure | ₹299
technology  | XSLT Mastery        | ₹599
technology  | XML Fundamentals    | ₹499
\`\`\`

## Example 5: Variables and Computations

~~~xml
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://schemas.xmlsoap.org/xslt/1999/transform">

  <xsl:template match="/">
    <!-- Global variables -->
    <xsl:variable name="tax" select="0.18"/>  <!-- 18% GST -->
    <xsl:variable name="discount" select="0.10"/>  <!-- 10% discount -->
    
    <html>
      <body>
        <h2>Price Calculation with Tax</h2>
        <table border="1">
          <tr>
            <th>Book</th>
            <th>Base Price</th>
            <th>After Discount</th>
            <th>GST (18%)</th>
            <th>Final Price</th>
          </tr>
          <xsl:for-each select="library/book">
            <xsl:variable name="basePrice" select="price"/>
            <xsl:variable name="afterDiscount" select="$basePrice * (1 - $discount)"/>
            <xsl:variable name="taxAmount" select="$afterDiscount * $tax"/>
            <xsl:variable name="finalPrice" select="$afterDiscount + $taxAmount"/>
            
            <tr>
              <td><xsl:value-of select="title"/></td>
              <td>₹<xsl:value-of select="format-number($basePrice, '0.00')"/></td>
              <td>₹<xsl:value-of select="format-number($afterDiscount, '0.00')"/></td>
              <td>₹<xsl:value-of select="format-number($taxAmount, '0.00')"/></td>
              <td><strong>₹<xsl:value-of select="format-number($finalPrice, '0.00')"/></strong></td>
            </tr>
          </xsl:for-each>
        </table>
        
        <!-- Summary -->
        <xsl:variable name="grandTotal" 
          select="sum(library/book/price) * (1 - $discount) * (1 + $tax)"/>
        <p><strong>Grand Total: ₹<xsl:value-of select="format-number($grandTotal, '0.00')"/></strong></p>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
~~~

## Visual Processing Flow

\`\`\`
XML Input
   ↓
XSLT Processor
   ↓
Match "/" template → HTML structure
   ↓
apply-templates → Find matching templates
   ↓
Match "book" templates → Transform each book
   ↓
value-of → Extract text values
   ↓
xsl:if / xsl:choose → Conditional logic
   ↓
xsl:sort → Order elements
   ↓
Variables → Store computed values
   ↓
HTML Output
\`\`\``,
          practical: `## Apply it

- Add a price band label using xsl:choose.
- Compute a grand total and average with sum() and count().
- Move row rendering into a named template and call it, keeping the root template slim.`,
          exam: `## Likely questions

- Contrast xsl:if with xsl:choose.
- How does xsl:sort treat numbers vs strings?
- Two advantages of named templates or imports.`,
          takeaways: `## Takeaways

- Conditions make transforms context-aware.
- Variables simplify repeated calculations.
- Modular stylesheets stay maintainable as projects grow.`,
        },
      },
    ],
  },
  {
    id: 'unit-5',
    title: 'UNIT V: XPath + Mini Project',
    topics: [
      {
        id: 'xpath',
        title: 'XPath: Node Selection, Axes, Predicates, and Functions',
        subtopics: ['Absolute vs relative paths', 'Predicates', 'Axes', 'Functions', 'Attributes'],
        clos: ['CLO03'],
        cos: ['CO04'],
        content: {
          introduction:
            'XPath is the query backbone for XML. XSLT, XQuery, DOM APIs, and validators all lean on it. You will learn to move across the tree with axes, filter with predicates, and compute with built-in functions.',
          concept: `## Essentials

- Absolute path starts with /; relative starts at the current node.
- Predicates [ ] filter nodes by position or condition.
- Axes describe direction: child, parent, ancestor, descendant, following-sibling, preceding-sibling, attribute.
- Functions help aggregate, test, and convert values.`,
          technicalDepth: `## Syntax patterns

Common selections
~~~
/library/book/title
//book[@id='b2']/price
//book[price &gt; 500]
//@id
~~~

Handy functions
- count(/library/book)
- sum(/library/book/price)
- string-length(title)
- contains(title, 'XML')`,
          examples: `## Sample XML for All XPath Examples

~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<library>
  <book id="b1" category="technology">
    <title>XML Fundamentals</title>
    <author>John Doe</author>
    <price currency="USD">499</price>
    <year>2020</year>
  </book>
  <book id="b2" category="technology">
    <title>XSLT Mastery</title>
    <author>Jane Smith</author>
    <price currency="USD">599</price>
    <year>2021</year>
  </book>
  <book id="b3" category="fiction">
    <title>The Great Adventure</title>
    <author>Bob Johnson</author>
    <price currency="USD">299</price>
    <year>2019</year>
  </book>
  <book id="b4" category="technology">
    <title>XPath Guide</title>
    <author>Alice Brown</author>
    <price currency="INR">450</price>
    <year>2022</year>
  </book>
</library>
~~~

## Example 1: Basic Path Expressions

**Absolute paths (start from root):**
~~~xpath
/library                    → Selects root library element
/library/book              → All book elements
/library/book/title        → All title elements inside books
/library/book/author       → All author elements
~~~

**Relative paths (from current node):**
~~~xpath
book                       → book children of current node
book/title                 → titles of book children
.                          → Current node
..                         → Parent node
~~~

**Descendant operator (//):**
~~~xpath
//book                     → All book elements anywhere
//title                    → All title elements anywhere
//price                    → All price elements anywhere
library//title             → All titles under library (any depth)
~~~

**Results visualization:**
\`\`\`
/library/book → 4 nodes (b1, b2, b3, b4)
//title → 4 nodes:
  - "XML Fundamentals"
  - "XSLT Mastery"
  - "The Great Adventure"
  - "XPath Guide"
\`\`\`

## Example 2: Predicates (Filters)

**Position predicates:**
~~~xpath
/library/book[1]           → First book (XML Fundamentals)
/library/book[last()]      → Last book (XPath Guide)
/library/book[position()<3] → First 2 books
/library/book[2]           → Second book (XSLT Mastery)
~~~

**Value predicates:**
~~~xpath
//book[price>500]          → Books with price > 500
                            Result: b2 (XSLT Mastery)

//book[year=2020]          → Books from 2020
                            Result: b1 (XML Fundamentals)

//book[author='John Doe']  → Books by John Doe
                            Result: b1

//title[contains(., 'XML')] → Titles containing 'XML'
                            Result: "XML Fundamentals"
~~~

**Attribute predicates:**
~~~xpath
//book[@id='b2']           → Book with id="b2"
                            Result: XSLT Mastery book

//book[@category='technology']  → All technology books
                                  Result: b1, b2, b4

//price[@currency='USD']   → Prices in USD
                            Result: 499, 599, 299
~~~

**Complex predicates:**
~~~xpath
//book[price>400 and @category='technology']
  → Technology books over 400
  Result: b1 (499), b2 (599)

//book[@category='technology'][1]
  → First technology book
  Result: b1

//book[position()>2 and price<500]
  → Books after position 2 with price < 500
  Result: b3 (299), b4 (450)
~~~

## Example 3: Axes (Navigation Directions)

**Child axis:**
~~~xpath
/library/child::book       → All book children
book/child::title          → title children of book
~~~

**Parent axis:**
~~~xpath
//title/parent::book       → Parent book of each title
//price/../title           → Sibling title (via parent)
~~~

**Attribute axis:**
~~~xpath
//book/@id                 → All id attributes
                            Result: b1, b2, b3, b4

//book/@category           → All category attributes
                            Result: technology, technology, fiction, technology

//@currency                → All currency attributes
                            Result: USD, USD, USD, INR
~~~

**Descendant axis:**
~~~xpath
/library/descendant::title → All title descendants
//book/descendant::text()  → All text nodes under books
~~~

**Following-sibling axis:**
~~~xpath
//book[1]/following-sibling::book
  → All siblings after first book
  Result: b2, b3, b4

//book[@id='b2']/following-sibling::book[1]
  → Next sibling of b2
  Result: b3
~~~

**Preceding-sibling axis:**
~~~xpath
//book[last()]/preceding-sibling::book
  → All siblings before last book
  Result: b1, b2, b3

//book[@id='b3']/preceding-sibling::book[1]
  → Previous sibling of b3
  Result: b2
~~~

**Ancestor axis:**
~~~xpath
//title/ancestor::library  → library ancestor of title
//price/ancestor::book     → book ancestor of price
~~~

## Example 4: XPath Functions

**String functions:**
~~~xpath
//book[contains(title, 'XML')]
  → Books with 'XML' in title
  Result: b1

//book[starts-with(title, 'X')]
  → Titles starting with 'X'
  Result: b1 (XML...), b2 (XSLT...), b4 (XPath...)

string-length(//book[1]/title)
  → Length of first title
  Result: 17 ("XML Fundamentals")

concat(//book[1]/author, ' - ', //book[1]/title)
  → Result: "John Doe - XML Fundamentals"

substring(//book[1]/title, 1, 3)
  → First 3 chars of title
  Result: "XML"
~~~

**Numeric functions:**
~~~xpath
count(//book)              → Total books
                            Result: 4

count(//book[@category='technology'])
                           → Technology books
                            Result: 3

sum(//book/price)          → Sum of all prices
                            Result: 1847

number(//book[1]/price)    → Convert to number
                            Result: 499

round(sum(//price) div count(//price))
                           → Average price
                            Result: 462
~~~

**Boolean functions:**
~~~xpath
boolean(//book[@id='b1'])  → true (exists)
boolean(//book[@id='b99']) → false (doesn't exist)

not(//book[price>1000])    → true (no book over 1000)
~~~

## Example 5: Complex Queries

**Find expensive technology books:**
~~~xpath
//book[@category='technology' and price>450]
  Result: b1 (499), b2 (599)
~~~

**Get titles of books by specific author:**
~~~xpath
//book[author='Jane Smith']/title
  Result: "XSLT Mastery"
~~~

**Find all attributes of first book:**
~~~xpath
//book[1]/@*
  Result: id="b1", category="technology"
~~~

**Books published after 2019 with price in USD:**
~~~xpath
//book[year>2019 and price/@currency='USD']
  Result: b1 (2020), b2 (2021)
~~~

**Second and third books:**
~~~xpath
//book[position()>=2 and position()<=3]
  Result: b2, b3
~~~

**All text content:**
~~~xpath
//book[1]//text()
  Result: All text nodes in first book
  - "XML Fundamentals"
  - "John Doe"
  - "499"
  - "2020"
~~~

## Visual Cheat Sheet

\`\`\`
Operators:
/     → child
//    → descendant
.     → current
..    → parent
@     → attribute
*     → any element
@*    → any attribute

Predicates:
[1]           → first
[last()]      → last
[position()<3] → first 2
[@id='b1']    → filter by attribute
[price>500]   → filter by value

Axes:
child::           most common
parent::          go up one level
ancestor::        all parents
descendant::      all children (any depth)
following-sibling:: next siblings
preceding-sibling:: previous siblings
attribute::       @ is shorthand

Functions:
count()           → number of nodes
sum()             → add values
contains()        → substring check
starts-with()     → prefix check
string-length()   → text length
concat()          → join strings
\`\`\``,
          practical: `## Do-now exercises

- Write 10 XPath queries against your project XML and verify them in an online tester.
- Use predicates for both value filters and positional filters.
- Try an axis you rarely use (following-sibling or ancestor) and note the result.`,
          exam: `## What examiners like

- Define predicate with an example.
- Explain two axes and where they are useful.
- Show one function that returns a number and one that returns a string.`,
          takeaways: `## Takeaways

- XPath is context-sensitive; always know your current node.
- Predicates and axes together unlock precise navigation.
- Practice writing and reading XPath faster than memorizing it.`,
        },
      },
      {
        id: 'xml-project',
        title: 'Mini Project: XML + XSD + XPath + XSLT Pipeline',
        subtopics: ['Dataset modeling', 'XML instances', 'XSD validation', 'XPath queries', 'XSLT report'],
        clos: ['CLO05'],
        cos: ['CO05'],
        content: {
          introduction:
            'This capstone brings everything together. You will model a small but realistic dataset, validate it with XSD, query it with XPath, and publish a report via XSLT.',
          concept: `## Project blueprint

1) Define the vocabulary (elements, attributes, namespace).
2) Draft XML instances that reflect realistic data.
3) Create XSD with constraints that matter (enums, ranges, required attributes).
4) Prepare XPath queries that answer meaningful questions.
5) Author XSLT to render a clean HTML or text report.`,
          technicalDepth: `## Suggested folder layout

- data/ → XML instances
- schema/ → XSD
- transform/ → XSLT
- report/ → generated output

Quality checklist
- No well-formedness errors.
- Schema enforces keys and value ranges.
- XPath queries documented with expected outputs.
- XSLT uses templates, sorting, and at least one conditional.`,
          examples: `## Deliverables snapshot

- 1–2 XML files for the dataset (e.g., courses, orders, patients).
- 1 XSD capturing constraints (id uniqueness, enums, min/max).
- 5–10 XPath queries with short notes.
- 1 XSLT that generates an HTML dashboard/table.`,
          practical: `## Step-by-step

1. Pick a dataset you can describe in 8–12 elements.
2. Write a draft XML and validate well-formedness.
3. Write XSD and iterate until validation passes.
4. Run XPath queries in a tester and capture expected results.
5. Build XSLT that sorts and labels data; verify in browser or cli.
6. Ship a short README explaining assumptions and how to run.`,
          exam: `## Viva prompts

- Why did you choose certain attributes vs elements?
- Which XSD constraints caught errors during testing?
- Show a query that fails after you intentionally break the XML.
- How does your XSLT pick which nodes to render first?`,
          takeaways: `## Takeaways

- Real value comes from combining validation, querying, and transformation.
- A clear namespace and consistent IDs reduce downstream bugs.
- Documenting your pipeline makes handover painless.`,
        },
      },
    ],
  },
];
